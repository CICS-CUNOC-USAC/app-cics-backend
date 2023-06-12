import { Test, TestingModule } from '@nestjs/testing';
import { CarreraCursoService } from './carrera_curso.service';

describe('CarreraCursoService', () => {
  let service: CarreraCursoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarreraCursoService],
    }).compile();

    service = module.get<CarreraCursoService>(CarreraCursoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
