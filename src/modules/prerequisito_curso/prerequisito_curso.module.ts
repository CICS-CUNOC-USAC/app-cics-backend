import { Module } from '@nestjs/common';
import { PrerequisitoCursoService } from './prerequisito_curso.service';
import { PrerequisitoCursoController } from './prerequisito_curso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrerequisitoCurso } from './entities/prerequisito_curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrerequisitoCurso])],
  controllers: [PrerequisitoCursoController],
  providers: [PrerequisitoCursoService]
})
export class PrerequisitoCursoModule {}
