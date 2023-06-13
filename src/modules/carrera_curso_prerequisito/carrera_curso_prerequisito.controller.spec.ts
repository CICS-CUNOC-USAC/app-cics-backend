import { Test, TestingModule } from '@nestjs/testing';
import { CarreraCursoPrerequisitoController } from './carrera_curso_prerequisito.controller';
import { CarreraCursoPrerequisitoService } from './carrera_curso_prerequisito.service';

describe('CarreraCursoPrerequisitoController', () => {
  let controller: CarreraCursoPrerequisitoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarreraCursoPrerequisitoController],
      providers: [CarreraCursoPrerequisitoService],
    }).compile();

    controller = module.get<CarreraCursoPrerequisitoController>(CarreraCursoPrerequisitoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
