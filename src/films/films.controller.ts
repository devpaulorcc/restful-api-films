import { Body, Controller, Get, Post } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsDto } from 'src/Dto/Films.dto';

@Controller('films')
export class FilmsController {
    constructor (private readonly filmsService : FilmsService) {}

    @Get()
    findAllFilms(){
        return this.filmsService.findAll();
    }

    @Post()
    registerNewFilm(@Body() data: FilmsDto){
        return this.filmsService.register(data)
    }
}
