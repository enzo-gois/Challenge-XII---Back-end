import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserDTO {
  id? :          string;

  @IsString()
  first_name:    string;

  @IsString()
  last_name :    string;

  @IsEmail()
  email:         string;

  @IsString()
  country:       string;

  @IsString()
  city:          string;

  @IsOptional()
  referral_code?: string;

  @IsBoolean()
  own_car:       boolean;

  @IsString()
  car_type:      string;
}