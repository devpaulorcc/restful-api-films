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
import { UpdateFilmDto } from 'src/films/Dto/update-film.dto';
import { CreateFilmDto } from './Dto/create-film.dto';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  findAllFilms() {
    return this.filmsService.findAll();
  }

  @Get(':id')
  findOneFilms(@Param('id') id: string) {
    return this.filmsService.findOne(id);
  }

  @Post()
  registerNewFilm(@Body() data: CreateFilmDto) {
    return this.filmsService.register(data);
  }

  @Put(':id')
  updateFilm(@Param('id') id: number, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmsService.updateFilm(Number(id), updateFilmDto);
  }

  @Patch(':id')
  partialUpdateFilm(@Param('id') id: number, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmsService.partialUpdateFilm(Number(id), updateFilmDto);
  }

  @Delete(':id')
  deleteFilm(@Param('id') id: string) {
    return this.filmsService.deleteFilm(id);
  }
}
