import UnlinkingSensorUsecase from './unlinking-sensor.usecase';

const MockBroker = () => ({
  publish: jest.fn(),
  consume: jest.fn(),
});

describe('UnlinkingSensorUsecase', () => {
  it('should request unlinking a sensor from a parking space', async () => {
    const parkingSpaceBroker = MockBroker();
    const usecase = new UnlinkingSensorUsecase(parkingSpaceBroker);

    await usecase.execute({
      id: '1',
    });

    expect(parkingSpaceBroker.publish).toHaveBeenCalledTimes(1);
  });
});
