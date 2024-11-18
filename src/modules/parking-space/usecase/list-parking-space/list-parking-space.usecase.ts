import UsecaseInterface from '../../../@shared/usecase/usecase.interface';
import ParkingSpacePersistenseGateway from '../../gateway/parking-space.persistense.gateway';
import { ListParkingSpaceOutputDTO } from './list-parking-space.dto';

export default class ListParkingSpaceUsecase implements UsecaseInterface {
  constructor(private readonly parkingSpaceRepository: ParkingSpacePersistenseGateway) {}

  async execute(): Promise<ListParkingSpaceOutputDTO> {
    const result = await this.parkingSpaceRepository.findAll();
    return {
      parkingSpaces: result.map((parkingSpace) => {
        return {
          id: parkingSpace.id.id,
          name: parkingSpace.name,
          sensorID: parkingSpace.sensorID,
          carID: parkingSpace.carID,
        };
      }),
    };
  }
}
