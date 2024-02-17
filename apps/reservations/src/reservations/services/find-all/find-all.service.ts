import { Injectable } from '@nestjs/common';
import { ReservationsRepository } from '../../reservations.repository';

@Injectable()
export class FindAllReservationsService {
  constructor(private readonly reservationsRepository: ReservationsRepository) { }


  findAll() {
    return this.reservationsRepository.find({})
  }
}
