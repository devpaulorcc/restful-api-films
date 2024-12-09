import { Controller, Get } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
    constructor (private readonly filmsService : FilmsService) {}

    @Get()
    findAllFilms(){
        return this.filmsService.findAll();
    }
}
