import { PartialType } from '@nestjs/swagger';
import { CreatePrerequisitoCursoDto } from './create-prerequisito_curso.dto';

export class UpdatePrerequisitoCursoDto extends PartialType(CreatePrerequisitoCursoDto) {}
