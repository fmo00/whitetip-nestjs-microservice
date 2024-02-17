import { Injectable } from '@nestjs/common';
import { ReservationsRepository } from '../../reservations.repository';

@Injectable()
export class DeleteReservationService {
  constructor(private readonly reservationsRepository: ReservationsRepository) { }


  delete(_id: string) {
    return this.reservationsRepository.findOneAndDelete({ _id })
  }
}
