import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { GetServerModel } from 'src/dtos/dataModel';
import { manipulateServer } from 'src/repositories/server.repository';

@Controller('server')
@UseGuards(ThrottlerGuard)
export class ServerController {
  constructor(private manipulateServer: manipulateServer) {}
  @Get() 
  async getServer(@Query() query: GetServerModel) {
    const { hostId } = query;
    const response = await this.manipulateServer.get(hostId);
    return response;
  }
}
