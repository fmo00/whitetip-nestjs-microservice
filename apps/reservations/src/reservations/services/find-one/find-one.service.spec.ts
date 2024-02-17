import { Test, TestingModule } from '@nestjs/testing';
import { FindOneReservationService } from './find-one.service';

describe('FindOneReservationService', () => {
  let service: FindOneReservationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneReservationService],
    }).compile();

    service = module.get<FindOneReservationService>(FindOneReservationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
