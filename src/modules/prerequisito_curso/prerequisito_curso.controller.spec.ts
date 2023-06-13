import { Test, TestingModule } from '@nestjs/testing';
import { PrerequisitoCursoController } from './prerequisito_curso.controller';
import { PrerequisitoCursoService } from './prerequisito_curso.service';

describe('PrerequisitoCursoController', () => {
  let controller: PrerequisitoCursoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrerequisitoCursoController],
      providers: [PrerequisitoCursoService],
    }).compile();

    controller = module.get<PrerequisitoCursoController>(PrerequisitoCursoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
