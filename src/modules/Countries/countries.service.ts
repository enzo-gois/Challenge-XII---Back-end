import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class CountriesService {
  async getCountries(): Promise<string[]> {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countries = response.data.map((country: any) => country.name.common);
      return countries;
    } catch (error) {
      throw new Error('Failed to fetch countries');
    }
  }
} 