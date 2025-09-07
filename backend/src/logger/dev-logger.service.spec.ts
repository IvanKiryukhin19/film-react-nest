import { DevLogger } from './dev-logger.service'; // путь к вашему логгеру

describe('DevLogger', () => {
  let logger: DevLogger;

  beforeEach(() => {
    logger = new DevLogger();
  });

  it('should format log message correctly', () => {
    // Создаем шпион для метода console.log
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Вызываем метод логирования
    logger.log('Logger test');

    // Проверяем, что сообщение было отформатировано правильно
    expect(spy).toHaveBeenCalledWith('Logger test', 'DevLogger');

    // Восстанавливаем оригинальный метод console.log
    spy.mockRestore();
  });
});
