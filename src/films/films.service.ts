import { Injectable } from '@nestjs/common';
import { FilmsDto, PartialFilmsDto } from 'src/Dto/Films.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.films.findMany();
  }

  register(data: FilmsDto) {
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

  updateFilm(id: number, data: FilmsDto) {
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

  partialUpdateFilm(id: number, data: PartialFilmsDto) {
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
}
