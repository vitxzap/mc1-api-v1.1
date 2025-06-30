import { Controller, Get, UseGuards } from '@nestjs/common';
import { manipulateHost } from '../repositories/host.repository';
import { ThrottlerGuard } from '@nestjs/throttler';

@Controller('host')
@UseGuards(ThrottlerGuard)
export class HostController {
  constructor(private manipulateHost: manipulateHost) {}
  @Get()
  async getHost() {
    const response = await this.manipulateHost.get();
    return response;
  }
}
