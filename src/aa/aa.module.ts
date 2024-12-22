import { Module } from '@nestjs/common';
import { AaController } from './aa.controller';
import { AaService } from './aa.service';

@Module({
  controllers: [AaController],
  providers: [AaService]
})
export class AaModule {}
