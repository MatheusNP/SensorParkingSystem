import UsecaseInterface from '../../../@shared/usecase/usecase.interface';
import {
  CreateParkingSpaceInputDTO,
  CreateParkingSpaceOutputDTO,
} from './create-parking-space.dto';
import ParkingSpacePersistenseGateway from '../../gateway/parking-space.persistense.gateway';
import ParkingSpace from '../../domain/parking-space.entity';

export default class CreateParkingSpaceUsecase implements UsecaseInterface {
  constructor(private readonly parkingSpaceRepository: ParkingSpacePersistenseGateway) {}

  async execute(input: CreateParkingSpaceInputDTO): Promise<CreateParkingSpaceOutputDTO> {
    const parkingSpace = new ParkingSpace({
      name: input.name,
    });

    const result = await this.parkingSpaceRepository.save(parkingSpace);

    return {
      id: result.id.id,
      name: result.name,
    };
  }
}
