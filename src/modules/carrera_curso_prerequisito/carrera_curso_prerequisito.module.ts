import { Module } from '@nestjs/common';
import { CarreraCursoPrerequisitoService } from './carrera_curso_prerequisito.service';
import { CarreraCursoPrerequisitoController } from './carrera_curso_prerequisito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarreraCursoPrerequisito } from './entities/carrera_curso_prerequisito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarreraCursoPrerequisito])],
  controllers: [CarreraCursoPrerequisitoController],
  providers: [CarreraCursoPrerequisitoService]
})
export class CarreraCursoPrerequisitoModule {}
