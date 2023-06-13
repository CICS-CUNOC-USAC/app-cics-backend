import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrerequisitoCreditoService } from './prerequisito_credito.service';
import { CreatePrerequisitoCreditoDto } from './dto/create-prerequisito_credito.dto';
import { UpdatePrerequisitoCreditoDto } from './dto/update-prerequisito_credito.dto';

@Controller('prerequisito-credito')
export class PrerequisitoCreditoController {
  constructor(private readonly prerequisitoCreditoService: PrerequisitoCreditoService) {}

  @Post()
  create(@Body() createPrerequisitoCreditoDto: CreatePrerequisitoCreditoDto) {
    return this.prerequisitoCreditoService.create(createPrerequisitoCreditoDto);
  }

  @Get()
  findAll() {
    return this.prerequisitoCreditoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prerequisitoCreditoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrerequisitoCreditoDto: UpdatePrerequisitoCreditoDto) {
    return this.prerequisitoCreditoService.update(+id, updatePrerequisitoCreditoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prerequisitoCreditoService.remove(+id);
  }
}
