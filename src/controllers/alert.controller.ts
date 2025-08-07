import { Body, Controller, Get, Post, Delete } from '@nestjs/common';
import { GetAlertModel, PostAlertModel } from 'src/dtos/dataModel';
import { manipulateAlert } from 'src/repositories/alert.repository';
import { UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

@Controller('alert')
@UseGuards(ThrottlerGuard)
export class alertController {
  constructor(private manipulateAlert: manipulateAlert) {}
  @Post()
  async postAlert(@Body() body: PostAlertModel) {
    try {
      const { clientId, alertName, alertDescription, alertQuery, alertLink } = body;
      await this.manipulateAlert.post(
        clientId,
        alertName,
        alertDescription,
        alertQuery,
        alertLink,
      );
    } catch (err) {
      return err
    }
  }

  @Get()
  async getAlert() {
    const response = await this.manipulateAlert.get();
    return response;
  }

  @Delete()
  async deleteAlert() {
    const idAlert = 
    return 
  }
}
