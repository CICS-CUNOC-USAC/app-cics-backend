import { Test, TestingModule } from '@nestjs/testing';
import { PrerequisitoCreditoService } from './prerequisito_credito.service';

describe('PrerequisitoCreditoService', () => {
  let service: PrerequisitoCreditoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrerequisitoCreditoService],
    }).compile();

    service = module.get<PrerequisitoCreditoService>(PrerequisitoCreditoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
