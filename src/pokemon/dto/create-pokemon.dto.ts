import {
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
}
