import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Carrera {
  @PrimaryColumn()
  @ApiProperty()
  codigo: number;

  @Column({nullable: false})
  @ApiProperty()
  nombre: string;
}
