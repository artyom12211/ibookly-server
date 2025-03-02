import { Module } from '@nestjs/common';
import { GrammyService } from './telegram.service';

@Module({
  providers: [GrammyService],
//   exports: [GrammyService], // Экспортируем сервис для использования в других модулях
})
export class TelegramModule {}