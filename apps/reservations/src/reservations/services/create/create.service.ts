import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from '../../dto/create-reservation.dto';
import { ReservationsRepository } from '../../reservations.repository';

@Injectable()
export class CreateReservationService {
  constructor(private readonly reservationsRepository: ReservationsRepository) { }


  create(createReservationDto: CreateReservationDto) {
    return this.reservationsRepository.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId: '123'
    })
  }
}
