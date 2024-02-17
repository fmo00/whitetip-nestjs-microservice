import { Test, TestingModule } from '@nestjs/testing';
import { UpdateReservationService } from './update.service';

describe('UpdateReservationService', () => {
  let service: UpdateReservationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateReservationService],
    }).compile();

    service = module.get<UpdateReservationService>(UpdateReservationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
