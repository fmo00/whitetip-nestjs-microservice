import { Injectable } from '@nestjs/common';
import { UpdateReservationDto } from '../../dto/update-reservation.dto';
import { ReservationsRepository } from '../../reservations.repository';

@Injectable()
export class UpdateReservationService {
  constructor(private readonly reservationsRepository: ReservationsRepository) { }


  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationsRepository.findOneAndUpdate({ _id }, { $set: updateReservationDto })
  }
}
