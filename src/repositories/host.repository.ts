import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class manipulateHost {
  abstract get(): Promise<object | string>;
}
