import { IsInt, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsInt()
  @Min(1)
  no: number;
}
