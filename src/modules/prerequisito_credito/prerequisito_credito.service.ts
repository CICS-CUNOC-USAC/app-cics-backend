import { Injectable } from '@nestjs/common';
import { CreatePrerequisitoCreditoDto } from './dto/create-prerequisito_credito.dto';
import { UpdatePrerequisitoCreditoDto } from './dto/update-prerequisito_credito.dto';

@Injectable()
export class PrerequisitoCreditoService {
  create(createPrerequisitoCreditoDto: CreatePrerequisitoCreditoDto) {
    return 'This action adds a new prerequisitoCredito';
  }

  findAll() {
    return `This action returns all prerequisitoCredito`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prerequisitoCredito`;
  }

  update(id: number, updatePrerequisitoCreditoDto: UpdatePrerequisitoCreditoDto) {
    return `This action updates a #${id} prerequisitoCredito`;
  }

  remove(id: number) {
    return `This action removes a #${id} prerequisitoCredito`;
  }
}
