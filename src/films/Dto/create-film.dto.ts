import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmDto {

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  director: string;

  @IsNotEmpty()
  @IsDateString()
  releaseDate: Date;

  @IsNotEmpty()
  @IsString()
  genre: string;
}
