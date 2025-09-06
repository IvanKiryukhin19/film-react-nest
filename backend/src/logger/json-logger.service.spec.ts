import { JsonLogger } from './json-logger.service'; // путь к вашему логгеру

describe('JsonLogger', () => {
  let logger: JsonLogger;

  beforeEach(() => {
    logger = new JsonLogger();
  });

  it('should format log message correctly', () => {
    // Создаем шпион для метода console.log
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Вызываем метод логирования
    logger.log('Logger test');

    // Проверяем, что сообщение было отформатировано правильно
    expect(spy).toHaveBeenCalledWith(
      JSON.stringify({
        level: 'log',
        message: 'Logger test',
        optionalParams: [],
      }),
    );

    // Восстанавливаем оригинальный метод console.log
    spy.mockRestore();
  });
});
