import Id from '../../../@shared/domain/value-object/id.value-object';
import ParkingSpace from '../../domain/parking-space.entity';
import ListParkingSpaceUsecase from './list-parking-space.usecase';

const MockRepository = () => ({
  save: jest.fn(),
  find: jest.fn(),
  findAll: jest.fn().mockReturnValue(
    Promise.resolve([
      new ParkingSpace({
        id: new Id('1'),
        name: 'test 1',
      }),
      new ParkingSpace({
        id: new Id('2'),
        name: 'test 2',
        sensorID: 'b',
        carID: 'b',
      }),
    ])
  ),
  delete: jest.fn(),
});

describe('ListParkingSpace Usecase unit tests', () => {
  it('should list all parking spaces', async () => {
    const parkingSpaceRepository = MockRepository();
    const usecase = new ListParkingSpaceUsecase(parkingSpaceRepository);

    const result = await usecase.execute();

    expect(parkingSpaceRepository.findAll).toHaveBeenCalled();
    expect(result.parkingSpaces.length).toBe(2);
    expect(result.parkingSpaces[0].id).toBeDefined();
    expect(result.parkingSpaces[0].name).toBe('test 1');
    expect(result.parkingSpaces[0].sensorID).toBeNull();
    expect(result.parkingSpaces[0].carID).toBeNull();
    expect(result.parkingSpaces[1].id).toBeDefined();
    expect(result.parkingSpaces[1].name).toBe('test 2');
    expect(result.parkingSpaces[1].sensorID).toBe('b');
    expect(result.parkingSpaces[1].carID).toBe('b');
  });
});
