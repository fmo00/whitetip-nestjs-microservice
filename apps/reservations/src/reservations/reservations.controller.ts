import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { CreateReservationService } from './services/create/create.service';
import { DeleteReservationService } from './services/delete/delete.service';
import { FindAllReservationsService } from './services/find-all/find-all.service';
import { FindOneReservationService } from './services/find-one/find-one.service';
import { UpdateReservationService } from './services/update/update.service';

@Controller()
export class ReservationsController {
  constructor(private readonly createReservationService: CreateReservationService,
    private readonly findReservationsService: FindAllReservationsService,
    private readonly findOneReservationsService: FindOneReservationService,
    private readonly updateReservationService: UpdateReservationService,
    private readonly deleteReservationService: DeleteReservationService) { }

  @Post('/reservation')
  create(requestBody: CreateReservationDto) {
    return this.createReservationService.create(requestBody)
  }

  @Get('/reservations')
  findAll() {
    return this.findReservationsService.findAll()
  }

  @Get('/reservation/:id')
  find(@Param('id') id: string) {
    return this.findOneReservationsService.findOne(id)
  }

  /*  @Patch('/reservation/:id')
   update(@Param('id') id: string, @Body() requestBody: UpdateReservationDto) {
     return this.updateReservationService.update(id, requestBody)
   } */

  @Delete('/reservation/:id')
  delete(@Param('id') id: string) {
    return this.deleteReservationService.delete(id)
  }
}
