import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Carrera {
  @PrimaryColumn()
  @ApiProperty()
  codigo: number;

  @Column()
  @ApiProperty()
  nombre: string;
}
