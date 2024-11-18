import Id from '../../../@shared/domain/value-object/id.value-object';
import ParkingSpace from '../../domain/parking-space.entity';
import OccupyParkingSpaceUsecase from './occupy-parking-space.usecase';

const MockRepository = () => ({
  save: jest.fn().mockReturnValue(
    Promise.resolve(
      new ParkingSpace({
        id: new Id('1'),
        name: 'test',
        sensorID: '1',
        carID: '1',
      })
    )
  ),
  find: jest.fn().mockReturnValue(
    Promise.resolve(
      new ParkingSpace({
        id: new Id('1'),
        name: 'test',
        sensorID: '1',
        carID: null,
      })
    )
  ),
  findAll: jest.fn(),
  delete: jest.fn(),
});

describe('Occupy Usecase unit tests', () => {
  it('should occupy parking space', async () => {
    const parkingSpaceRepository = MockRepository();
    const usecase = new OccupyParkingSpaceUsecase(parkingSpaceRepository);
    const input = {
      id: '1',
      carID: '1',
    };
    const result = await usecase.execute(input);

    expect(parkingSpaceRepository.save).toHaveBeenCalled();
    expect(result.id).toBeDefined();
    expect(result.name).toBe('test');
    expect(result.sensorID).toBe('1');
    expect(result.carID).toBe('1');
  });
});
