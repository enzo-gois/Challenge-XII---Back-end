import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountriesService {
  async getCountries(): Promise<string[]> {
    try {
      const response = await axios.get(
        'https://countriesnow.space/api/v0.1/countries',
      );
      const countries = response.data.data.map(
        (country: any) => country.country,
      );
      return countries;
    } catch (error) {
      throw new Error('Failed to fetch countries');
    }
  }
}
