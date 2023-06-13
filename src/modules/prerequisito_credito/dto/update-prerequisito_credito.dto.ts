import { PartialType } from '@nestjs/swagger';
import { CreatePrerequisitoCreditoDto } from './create-prerequisito_credito.dto';

export class UpdatePrerequisitoCreditoDto extends PartialType(CreatePrerequisitoCreditoDto) {}
