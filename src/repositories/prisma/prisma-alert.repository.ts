import { PrismaService } from 'src/database/prisma.service';
import { manipulateAlert } from '../alert.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class prismaManipulationAlert implements manipulateAlert {
  constructor(private prisma: PrismaService) {}
  async post(
    clientId: number,
    alertName: string,
    alertDescription: string,
    alertQuery: string,
    alertLink: string,
  ): Promise<void> {
    try {
      if (clientId && alertName) {
        const createdAt = new Date();
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
      } else {
        throw new Error('Something went wrong.');
      }
    } catch (e) {
      return e;
    }
  }
  async get(): Promise<string | object> {
    try {
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
    } catch (err) {
      return err.message;
    }
  }
}
