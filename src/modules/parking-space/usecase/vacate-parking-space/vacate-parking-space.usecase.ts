import UsecaseInterface from '../../../@shared/usecase/usecase.interface';
import {
  VacateParkingSpaceInputDTO,
  VacateParkingSpaceOutputDTO,
} from './vacate-parking-space.dto';
import ParkingSpacePersistenseGateway from '../../gateway/parking-space.persistense.gateway';

export default class VacateParkingSpaceUsecase implements UsecaseInterface {
  constructor(private readonly parkingSpaceRepository: ParkingSpacePersistenseGateway) {}

  async execute(input: VacateParkingSpaceInputDTO): Promise<VacateParkingSpaceOutputDTO> {
    const parkingSpace = await this.parkingSpaceRepository.find(input.id);

    if (!parkingSpace) {
      throw new Error('Parking space not found');
    }

    parkingSpace.vacate();

    const result = await this.parkingSpaceRepository.save(parkingSpace);

    return {
      id: result.id.id,
      name: result.name,
      sensorID: result.sensorID,
      carID: result.carID,
    };
  }
}
