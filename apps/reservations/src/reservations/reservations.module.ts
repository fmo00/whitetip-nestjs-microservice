import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ReservationDocument, ReservationSchema } from './models/reservation.schema';
import { ReservationsController } from './reservations.controller';
import { ReservationsRepository } from './reservations.repository';
import { CreateReservationService } from './services/create/create.service';
import { DeleteReservationService } from './services/delete/delete.service';
import { FindAllReservationsService } from './services/find-all/find-all.service';
import { FindOneReservationService } from './services/find-one/find-one.service';
import { UpdateReservationService } from './services/update/update.service';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([{ name: ReservationDocument.name, schema: ReservationSchema }])],
  controllers: [ReservationsController],
  providers: [CreateReservationService, UpdateReservationService, DeleteReservationService, FindOneReservationService, FindAllReservationsService, ReservationsRepository],
})
export class ReservationsModule { }
