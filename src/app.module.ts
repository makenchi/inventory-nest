import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwsModule } from './infra/aws/aws.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    AwsModule,
    InventoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}