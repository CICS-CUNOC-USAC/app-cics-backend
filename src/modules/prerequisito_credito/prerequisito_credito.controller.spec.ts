import { Test, TestingModule } from '@nestjs/testing';
import { PrerequisitoCreditoController } from './prerequisito_credito.controller';
import { PrerequisitoCreditoService } from './prerequisito_credito.service';

describe('PrerequisitoCreditoController', () => {
  let controller: PrerequisitoCreditoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrerequisitoCreditoController],
      providers: [PrerequisitoCreditoService],
    }).compile();

    controller = module.get<PrerequisitoCreditoController>(PrerequisitoCreditoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
