import { TskvLogger } from './tskv-logger.service'; // путь к вашему логгеру

describe('TskvLogger', () => {
  let logger: TskvLogger;
  let timestamp: string;

  beforeEach(() => {
    logger = new TskvLogger();
  });

  it('should format log message correctly', () => {
    // Создаем шпион для метода console.log
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Вызываем метод логирования

    logger.log('Logger test');
    const calls = spy.mock.calls[0][0];
    timestamp = calls.split('\t')[0];

    // Проверяем, что сообщение было отформатировано правильно
    expect(spy).toHaveBeenCalledWith(
      `${timestamp}\tlevel=log\tmessage=Logger test\toptionalParams=[]`,
    ); // замените на ожидаемое форматированное сообщение

    // Восстанавливаем оригинальный метод console.log
    spy.mockRestore();
  });
});
