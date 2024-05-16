import { Module } from '@nestjs/common'; 
import { UserModule } from './modules/user/user.module';
import { CardModule } from './modules/Cards/cards.module';
import { CitiesModule } from './modules/Cities/cities.module';
import { CountriesModule } from './modules/Countries/countries.module';

@Module({
  imports: [UserModule, CardModule, CitiesModule, CountriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
