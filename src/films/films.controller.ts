import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsDto, PartialFilmsDto } from 'src/Dto/Films.dto';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  findAllFilms() {
    return this.filmsService.findAll();
  }

  @Post()
  registerNewFilm(@Body() data: FilmsDto) {
    return this.filmsService.register(data);
  }

  @Put(':id')
  updateFilm(@Param('id') id: number, @Body() data: FilmsDto) {
    return this.filmsService.updateFilm(Number(id), data);
  }

  @Patch(':id')
  partialUpdateFilm(@Param('id') id: number, @Body() data: PartialFilmsDto) {
    return this.filmsService.partialUpdateFilm(Number(id), data);
  }

  @Delete(':id')
  deleteFilm(@Param('id') id: string) {
    return this.filmsService.deleteFilm(id);
  }
}
