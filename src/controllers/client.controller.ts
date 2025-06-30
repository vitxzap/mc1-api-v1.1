import { Body, Controller, Get } from '@nestjs/common';
import { GetClientModel } from '../dtos/dataModel';
import { manipulateClient } from 'src/repositories/client.repository';
import { UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
@Controller('client')
@UseGuards(ThrottlerGuard)
export class ClientController {
  constructor(private manipulateClient: manipulateClient) {}
  @Get()
  async getClient() {
    const res = await this.manipulateClient.get();
    return res;
  }
}
