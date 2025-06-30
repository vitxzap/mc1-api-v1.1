import { PrismaService } from 'src/database/prisma.service';
import { manipulateHost } from '../host.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class prismaManipulationHost implements manipulateHost {
  constructor(private prisma: PrismaService) {}
  async get(): Promise<object | string> {
    try {
      const c = await this.prisma.tb_host.findMany();
      return c;
    } catch (err) {
      return err.message;
    }
  }
}
