import { Injectable } from '@nestjs/common';
import { FilmsDto } from 'src/Dto/Films.dto';
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
}
