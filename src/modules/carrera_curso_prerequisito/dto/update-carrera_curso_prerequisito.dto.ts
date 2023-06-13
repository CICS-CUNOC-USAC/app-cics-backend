import { PartialType } from '@nestjs/swagger';
import { CreateCarreraCursoPrerequisitoDto } from './create-carrera_curso_prerequisito.dto';

export class UpdateCarreraCursoPrerequisitoDto extends PartialType(CreateCarreraCursoPrerequisitoDto) {}
