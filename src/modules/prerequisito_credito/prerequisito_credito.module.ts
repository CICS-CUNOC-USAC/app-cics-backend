import { Module } from '@nestjs/common';
import { PrerequisitoCreditoService } from './prerequisito_credito.service';
import { PrerequisitoCreditoController } from './prerequisito_credito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrerequisitoCredito } from './entities/prerequisito_credito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrerequisitoCredito])],
  controllers: [PrerequisitoCreditoController],
  providers: [PrerequisitoCreditoService]
})
export class PrerequisitoCreditoModule {}
