import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Query,
  HttpCode,
} from '@nestjs/common';
import {
  deleteAlertModel,
  GetAlertModel,
  PostAlertModel,
} from 'src/dtos/dataModel';
import { manipulateAlert } from 'src/repositories/alert.repository';
import { UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

@Controller('alert')
@UseGuards(ThrottlerGuard)
export class alertController {
  constructor(private manipulateAlert: manipulateAlert) {}
  @Post()
  async postAlert(@Body() body: PostAlertModel) {
    const { clientId, alertName, alertDescription, alertQuery, alertLink } =
      body;
    await this.manipulateAlert.post(
      clientId,
      alertName,
      alertDescription,
      alertQuery,
      alertLink,
    );
  }

  @Get()
  async getAlert() {
    const response = await this.manipulateAlert.get();
    return response;
  }

  @Delete()
  async deleteAlert(@Query() { alertId }: deleteAlertModel) {
    const c = await this.manipulateAlert.delete(alertId);
  }
}
