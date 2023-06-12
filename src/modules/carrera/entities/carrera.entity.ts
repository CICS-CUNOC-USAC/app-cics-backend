import { ApiProperty } from '@nestjs/swagger';
import { CarreraCurso } from 'src/modules/carrera_curso/entities/carrera_curso.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Carrera {
  @PrimaryColumn()
  @ApiProperty()
  codigo: number;

  @Column()
  @ApiProperty()
  nombre: string;

  @OneToMany(() => CarreraCurso, (carrera_curso) => carrera_curso.codigo_carrera)
  @ApiProperty()
  codigo_carrera: number[];
}
