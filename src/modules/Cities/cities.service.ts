import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class CitiesService {
  async getCities(country: string): Promise<string[]> {
    try {
      const response = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
        country: country
      });
      const cities = response.data;
      return cities;
    } catch (error) {
      throw new Error('Failed to fetch countries');
    }
  }
} 