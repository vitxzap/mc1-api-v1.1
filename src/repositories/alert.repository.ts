import { Injectable } from '@nestjs/common';
import { deleteAlertModel } from 'src/dtos/dataModel';
@Injectable()
export abstract class manipulateAlert {
  abstract post(
    clientId: number,
    alertName: string,
    alertDescription: string,
    alertQuery: string,
    alertLink: string,
  ): Promise<void | object>;
    
  abstract get(): Promise<object>;
  abstract delete(alertId: number): Promise<void | object >;
}
