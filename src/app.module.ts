import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwsModule } from './infra/aws/aws.module';

@Module({
  imports: [
    AwsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
