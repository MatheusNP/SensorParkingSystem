import UsecaseInterface from '../../../@shared/usecase/usecase.interface';
import {
  OccupyParkingSpaceInputDTO,
  OccupyParkingSpaceOutputDTO,
} from './occupy-parking-space.dto';
import ParkingSpacePersistenseGateway from '../../gateway/parking-space.persistense.gateway';

export default class OccupyParkingSpaceUsecase implements UsecaseInterface {
  constructor(private readonly parkingSpaceRepository: ParkingSpacePersistenseGateway) {}

  async execute(input: OccupyParkingSpaceInputDTO): Promise<OccupyParkingSpaceOutputDTO> {
    const parkingSpace = await this.parkingSpaceRepository.find(input.id);

    if (!parkingSpace) {
      throw new Error('Parking space not found');
    }

    parkingSpace.occupy(input.carID);

    const result = await this.parkingSpaceRepository.save(parkingSpace);

    return {
      id: result.id.id,
      name: result.name,
      sensorID: result.sensorID,
      carID: result.carID,
    };
  }
}
