import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class manipulateServer {
  abstract get(hostId: number): Promise<object | string>;
}
