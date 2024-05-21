import { Controller, Get } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countryService: CountriesService) {}

  @Get()
  async getCountries(): Promise<string[]> {
    return this.countryService.getCountries();
  }
}