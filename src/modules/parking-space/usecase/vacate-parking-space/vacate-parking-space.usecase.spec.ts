import Id from '../../../@shared/domain/value-object/id.value-object';
import ParkingSpace from '../../domain/parking-space.entity';
import VacateParkingSpaceUsecase from './vacate-parking-space.usecase';

const MockRepository = () => ({
  save: jest.fn().mockReturnValue(
    Promise.resolve(
      new ParkingSpace({
        id: new Id('1'),
        name: 'test',
        sensorID: '1',
        carID: null,
      })
    )
  ),
  find: jest.fn().mockReturnValue(
    Promise.resolve(
      new ParkingSpace({
        id: new Id('1'),
        name: 'test',
        sensorID: '1',
        carID: '1',
      })
    )
  ),
  findAll: jest.fn(),
  delete: jest.fn(),
});

describe('Vacate Usecase unit tests', () => {
  it('should vacate parking space', async () => {
    const parkingSpaceRepository = MockRepository();
    const usecase = new VacateParkingSpaceUsecase(parkingSpaceRepository);
    const input = {
      id: '1',
    };
    const result = await usecase.execute(input);

    expect(parkingSpaceRepository.save).toHaveBeenCalled();
    expect(result.id).toBeDefined();
    expect(result.name).toBe('test');
    expect(result.sensorID).toBe('1');
    expect(result.carID).toBeNull();
  });
});
