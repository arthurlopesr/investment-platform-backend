import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AssetsModule } from './modules/assets/assets.module';

@Module({
  imports: [PrismaModule, AssetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
