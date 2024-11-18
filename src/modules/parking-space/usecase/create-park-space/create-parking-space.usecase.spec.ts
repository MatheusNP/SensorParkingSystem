import Id from '../../../@shared/domain/value-object/id.value-object';
import ParkingSpace from '../../domain/parking-space.entity';
import { CreateParkingSpaceInputDTO } from './create-parking-space.dto';
import CreateParkingSpaceUsecase from './create-parking-space.usecase';

const parkingSpace = new ParkingSpace({
  id: new Id('1'),
  name: 'test',
});

const MockRepository = () => ({
  save: jest.fn().mockReturnValue(Promise.resolve(parkingSpace)),
  find: jest.fn(),
  findAll: jest.fn(),
  delete: jest.fn(),
});

describe('CreateParkingSpace Usecase unit tests', () => {
  it('should create a parking space', async () => {
    const parkingSpaceRepository = MockRepository();
    const usecase = new CreateParkingSpaceUsecase(parkingSpaceRepository);

    const input: CreateParkingSpaceInputDTO = {
      name: 'test',
    };

    const result = await usecase.execute(input);

    expect(parkingSpaceRepository.save).toHaveBeenCalled();
    expect(result.id).toBeDefined();
    expect(result.name).toBe(input.name);
  });
});
