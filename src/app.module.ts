import { Module } from '@nestjs/common'; 
import { UserModule } from './modules/user/user.module';
import { CardModule } from './modules/Cards/cards.module';

@Module({
  imports: [UserModule, CardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
