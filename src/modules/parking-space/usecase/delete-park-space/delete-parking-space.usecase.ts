import UsecaseInterface from '../../../@shared/usecase/usecase.interface';
import ParkingSpacePersistenseGateway from '../../gateway/parking-space.persistense.gateway';
import { DeleteParkingSpaceInputDTO } from './delete-park-space.dto';

export default class DeleteParkingSpaceUsecase implements UsecaseInterface {
  constructor(private readonly parkingSpaceRepository: ParkingSpacePersistenseGateway) {}

  async execute(input: DeleteParkingSpaceInputDTO): Promise<void> {
    const result = await this.parkingSpaceRepository.delete(input.id);
  }
}
