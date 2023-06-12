import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Carrera {
  @PrimaryColumn({type: 'int', nullable: false})
  @ApiProperty()
  codigo: number;

  @Column({type: 'string', nullable: false})
  @ApiProperty()
  nombre: string;
}
