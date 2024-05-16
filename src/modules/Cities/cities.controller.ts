import { Controller, Post, Body } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly countryService: CitiesService) {}

  @Post()
  async getCities(@Body('country') country: string): Promise<string[]> {
    return this.countryService.getCities(country);
  }
}