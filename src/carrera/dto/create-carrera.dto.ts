import { ApiProperty } from "@nestjs/swagger"
import { MinLength } from "class-validator"

export class CreateCarreraDto {
  @ApiProperty({ required: false })
  codigo?: number

  @ApiProperty()
  @MinLength(1)
  nombre: string
}
