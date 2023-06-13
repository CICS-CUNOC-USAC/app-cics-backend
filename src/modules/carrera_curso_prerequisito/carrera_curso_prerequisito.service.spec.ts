import { Test, TestingModule } from '@nestjs/testing';
import { CarreraCursoPrerequisitoService } from './carrera_curso_prerequisito.service';

describe('CarreraCursoPrerequisitoService', () => {
  let service: CarreraCursoPrerequisitoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarreraCursoPrerequisitoService],
    }).compile();

    service = module.get<CarreraCursoPrerequisitoService>(CarreraCursoPrerequisitoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
