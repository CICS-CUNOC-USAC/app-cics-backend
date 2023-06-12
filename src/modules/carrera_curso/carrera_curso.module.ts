import { Module } from '@nestjs/common';
import { CarreraCursoService } from './carrera_curso.service';
import { CarreraCursoController } from './carrera_curso.controller';
import { CarreraCurso } from './entities/carrera_curso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CarreraCurso])],
  controllers: [CarreraCursoController],
  providers: [CarreraCursoService]
})
export class CarreraCursoModule {}
