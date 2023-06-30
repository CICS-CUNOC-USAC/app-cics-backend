import { Module } from '@nestjs/common';
import { CarreraCursoPrerequisitoService } from './carrera_curso_prerequisito.service';
import { CarreraCursoPrerequisitoController } from './carrera_curso_prerequisito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarreraCursoPrerequisito } from './entities/carrera_curso_prerequisito.entity';
import { PrerequisitoCurso } from '../prerequisito_curso/entities/prerequisito_curso.entity';
import { PrerequisitoCredito } from '../prerequisito_credito/entities/prerequisito_credito.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([CarreraCursoPrerequisito]),
      TypeOrmModule.forFeature([PrerequisitoCurso]),
      TypeOrmModule.forFeature([PrerequisitoCredito]),
  ],
  controllers: [CarreraCursoPrerequisitoController],
  providers: [CarreraCursoPrerequisitoService]
})
export class CarreraCursoPrerequisitoModule {}
