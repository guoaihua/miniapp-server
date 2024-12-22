import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaModule } from './aa/aa.module';
import { BbModule } from './bb/bb.module';

@Module({
  imports: [AaModule, BbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
