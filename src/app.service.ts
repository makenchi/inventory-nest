import { Injectable } from '@nestjs/common';
import { AWSService } from './infra/aws/aws.service';

@Injectable()
export class AppService {
  constructor(
    //protected readonly aws: AWSService,
  ) {}

  getHello(): any {
    return 'hello';
  }
}