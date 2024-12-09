import { Module } from '@nestjs/common';
import { FilmsModule } from './films/films.module';
import { StatusModule } from './status/status.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FilmsModule, StatusModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
