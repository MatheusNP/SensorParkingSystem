import UsecaseInterface from '../../../@shared/usecase/usecase.interface';
import ParkingSpaceBrokerGateway from '../../gateway/parking-space.broker.gateway';
import { UnlinkingSensorInputDTO } from './unlinking-sensor.dto';

export default class UnlinkingSensorUsecase implements UsecaseInterface {
  constructor(private readonly parkingSpaceBroker: ParkingSpaceBrokerGateway) {}

  async execute(input: UnlinkingSensorInputDTO): Promise<void> {
    await this.parkingSpaceBroker.publish('unlinking-sensor', input);
  }
}
