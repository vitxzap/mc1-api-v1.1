import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class manipulateAlert {
  abstract post(
    clientId: number,
    alertName: string,
    alertDescription: string,
    alertQuery: string,
    alertLink: string,
  ): Promise<void>;
    
  abstract get(): Promise<string | object>;
}
