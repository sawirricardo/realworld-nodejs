import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Real world app implemented with NodeJS (NestJS) by Ricardo Sawir';
  }
}
