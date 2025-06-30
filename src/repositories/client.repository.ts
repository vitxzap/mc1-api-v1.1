import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class manipulateClient {
  abstract get(): Promise<object | string>;
}
