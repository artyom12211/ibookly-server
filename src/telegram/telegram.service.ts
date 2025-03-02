import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Bot } from 'grammy';

@Injectable()
export class GrammyService implements OnModuleInit, OnModuleDestroy {
  private bot: Bot;

  constructor() {
    // Инициализируем бота с вашим токеном
    this.bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);
  }

  // Запускаем бота при инициализации модуля
  async onModuleInit() {
    // Настраиваем команды и обработчики
    const btns = [[
        { 
            text: 'Отрыть',
            url: `https://t.me/${process.env.BOT_NAME}/${process.env.APP_NAME}`
        }
    ]]
    this.bot.command('start', (ctx) => ctx.reply('👋 iBookly поможет *найти классную фотостудию в МСК*', {
        'parse_mode': 'MarkdownV2',
        'reply_markup': {
            inline_keyboard: btns
        }

    }));
    // this.bot.command('help', (ctx) => ctx.reply('Покажи помощь? Вот тебе /start и всё!'));

    // Запускаем бота
    this.bot.start();
    console.log('Telegram бот запущен');
  }

  // Останавливаем бота при завершении модуля
  async onModuleDestroy() {
    await this.bot.stop();
    console.log('Telegram бот остановлен');
  }

  // Метод для отправки сообщений (пример API)
  async sendMessage(chatId: string | number, text: string) {
    await this.bot.api.sendMessage(chatId, text);
  }
}