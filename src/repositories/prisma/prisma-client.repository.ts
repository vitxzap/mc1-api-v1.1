import { PrismaService } from 'src/database/prisma.service';
import { manipulateClient } from '../client.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class prismaManipulationClient implements manipulateClient {
  constructor(private prisma: PrismaService) {}
  async get(): Promise<object | string> {
    try { 
      const c = await this.prisma.tb_client.findMany();
      return c;
    } catch (err) {
      return err.message
    }
  }
}
