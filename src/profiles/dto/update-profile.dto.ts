import { MinLength ,Length ,IsString } from "class-validator";
export class UpdateProfileDto {
  @IsString()
  @Length(3, 50)
  name: string;
  @IsString()
  @MinLength(10)
  description: string;
}
