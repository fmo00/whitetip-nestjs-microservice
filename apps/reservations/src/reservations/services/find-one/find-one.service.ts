import { Injectable } from '@nestjs/common';
import { ReservationsRepository } from '../../reservations.repository';

@Injectable()
export class FindOneReservationService {
  constructor(private readonly reservationsRepository: ReservationsRepository) { }


  findOne(_id: string) {
    return this.reservationsRepository.findOne({ _id })
  }
}
