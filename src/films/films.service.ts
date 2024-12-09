import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmsService {

    constructor(private readonly prisma : PrismaService) {}

    findAll(){
        return this.prisma.films.findMany()
    }
}
