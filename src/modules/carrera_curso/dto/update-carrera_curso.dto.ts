import { PartialType } from '@nestjs/swagger';
import { CreateCarreraCursoDto } from './create-carrera_curso.dto';

export class UpdateCarreraCursoDto extends PartialType(CreateCarreraCursoDto) {}
