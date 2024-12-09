import { PartialType } from '@nestjs/mapped-types';

export class FilmsDto {
  title: string;
  director: string;
  releaseDate: string;
  genre: string;
}

export class PartialFilmsDto extends PartialType(FilmsDto) {}
