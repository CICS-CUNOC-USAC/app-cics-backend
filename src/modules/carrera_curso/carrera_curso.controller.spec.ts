import { Test, TestingModule } from '@nestjs/testing';
import { CarreraCursoController } from './carrera_curso.controller';
import { CarreraCursoService } from './carrera_curso.service';

describe('CarreraCursoController', () => {
  let controller: CarreraCursoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarreraCursoController],
      providers: [CarreraCursoService],
    }).compile();

    controller = module.get<CarreraCursoController>(CarreraCursoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
