import { Injectable } from '@nestjs/common';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrera } from './entities/carrera.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarreraService {
  constructor(@InjectRepository(Carrera) private readonly carreraRepository: Repository<Carrera>,) {}

  create(createCarreraDto: CreateCarreraDto) {
    return 'This action adds a new carrera';
  }

  findAll() {
    return this.carreraRepository.find();
  }

  findOne(codigo: number) {
    return this.carreraRepository.findOneBy({ codigo: codigo });
  }

  update(id: number, updateCarreraDto: UpdateCarreraDto) {
    return `This action updates a #${id} carrera`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrera`;
  }
}
