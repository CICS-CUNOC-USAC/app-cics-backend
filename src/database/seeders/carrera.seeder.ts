import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seeder } from 'nestjs-seeder';
import { Carrera } from 'src/modules/carrera/entities/carrera.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarreraSeeder implements Seeder {
  constructor(
    @InjectRepository(Carrera)
    private readonly carreraRepository: Repository<Carrera>,
  ) {}

  async seed(): Promise<any> {
    const carreras = [
      { codigo: 33, nombre: 'Civil' },
      { codigo: 34, nombre: 'Mecánica' },
      { codigo: 35, nombre: 'Industrial' },
      { codigo: 36, nombre: 'Mecánica Industrial' },
      { codigo: 58, nombre: 'Ciencias y Sistemas' },
    ];

    return this.carreraRepository.save(carreras);
  }

  async drop(): Promise<any> {}
}
