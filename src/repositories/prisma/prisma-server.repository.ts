import { PrismaService } from 'src/database/prisma.service';
import { manipulateServer } from '../server.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class prismaManipulationServer implements manipulateServer {
  constructor(private prisma: PrismaService) {}
  async get(hostId: number): Promise<object | string> {
    try {
      const c = await this.prisma.tb_server.findMany({
        where: {
          id_host: hostId,
        },
      });
      return c;
    } catch (err) {
      return err.message;
    }
  }
}
