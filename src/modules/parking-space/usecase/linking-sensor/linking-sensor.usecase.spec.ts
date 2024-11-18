import LinkingSensorUsecase from './linking-sensor.usecase';

const MockBroker = () => ({
  publish: jest.fn(),
  consume: jest.fn(),
});

describe('LinkingSensorUsecase', () => {
  it('should linking a sensor to a parking space', async () => {
    const parkingSpaceBroker = MockBroker();
    const usecase = new LinkingSensorUsecase(parkingSpaceBroker);

    await usecase.execute({
      id: '1',
    });

    expect(parkingSpaceBroker.publish).toHaveBeenCalledTimes(1);
  });
});
