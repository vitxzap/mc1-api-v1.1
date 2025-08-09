import { PrismaService } from 'src/database/prisma.service';
import { manipulateAlert } from '../alert.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class prismaManipulationAlert implements manipulateAlert {
  constructor(private prisma: PrismaService) {}
  async delete(alertId: number): Promise<void | object> {
    await this.prisma.tb_alert.delete({
      where: { id_alert: Number(alertId) },
    });
  }
  async post(
    clientId: number,
    alertName: string,
    alertDescription: string,
    alertQuery: string,
    alertLink: string,
  ): Promise<void | object> {
    const createdAt = new Date().toISOString();
    await this.prisma.tb_alert.create({
      data: {
        id_client: clientId,
        nm_alert: alertName,
        desc_alert: alertDescription,
        query_alert: alertQuery,
        link_alert: alertLink,
        dt_created: createdAt,
      },
    });
  }
  async get(): Promise<object> {
    const c = await this.prisma.tb_alert.findMany({
      include: {
        tb_client: {
          include: {
            tb_server: {
              include: {
                tb_host: {
                  include: {
                    tb_cloud_provider: {},
                  },
                },
              },
            },
          },
        },
      },
    });
    return c;
  }
}
