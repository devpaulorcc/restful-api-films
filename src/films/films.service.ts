import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmDto } from './Dto/create-film.dto';
import { UpdateFilmDto } from './Dto/update-film.dto';

@Injectable()
export class FilmsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.films.findMany();
  }

  async findOne(id: string) {
    const filmItem = await this.prisma.films.findUnique({
      where: { id: Number(id) },
    });

    if (!filmItem) {
      throw new HttpException('Film not found', HttpStatus.NOT_FOUND);
    }

    return filmItem;
  }

  register(data: CreateFilmDto) {
    const releaseDate = new Date(data.releaseDate);
    return this.prisma.films.create({
      data: {
        title: data.title,
        director: data.director,
        releaseDate,
        genre: data.genre,
      },
    });
  }

  updateFilm(id: number, data: UpdateFilmDto) {
    const releaseDate = new Date(data.releaseDate);
    return this.prisma.films.update({
      where: { id },
      data: {
        title: data.title,
        director: data.director,
        releaseDate,
        genre: data.genre,
      },
    });
  }

  partialUpdateFilm(id: number, data: UpdateFilmDto) {
    return this.prisma.films.update({
      where: { id },
      data: {
        ...(data.title && { title: data.title }),
        ...(data.director && { director: data.director }),
        ...(data.releaseDate && { releaseDate: new Date(data.releaseDate) }),
        ...(data.genre && { genre: data.genre }),
      },
    });
  }

  deleteFilm(id: string) {
    const numericId = parseInt(id, 10);
    return this.prisma.films.delete({
      where: {
        id: numericId,
      },
    });
  }
}
