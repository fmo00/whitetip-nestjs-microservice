import { Test, TestingModule } from '@nestjs/testing';
import { FindAllReservationsService } from './find-all.service';

describe('FindAllReservationsService', () => {
  let service: FindAllReservationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllReservationsService],
    }).compile();

    service = module.get<FindAllReservationsService>(FindAllReservationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
