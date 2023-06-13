import { Test, TestingModule } from '@nestjs/testing';
import { PrerequisitoCursoService } from './prerequisito_curso.service';

describe('PrerequisitoCursoService', () => {
  let service: PrerequisitoCursoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrerequisitoCursoService],
    }).compile();

    service = module.get<PrerequisitoCursoService>(PrerequisitoCursoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
