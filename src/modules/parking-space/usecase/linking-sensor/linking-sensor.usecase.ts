import UsecaseInterface from '../../../@shared/usecase/usecase.interface';
import ParkingSpaceBrokerGateway from '../../gateway/parking-space.broker.gateway';
import { LinkingSensorInputDTO } from './linking-sensor.dto';

export default class LinkingSensorUsecase implements UsecaseInterface {
  constructor(private readonly parkingSpaceBroker: ParkingSpaceBrokerGateway) {}

  async execute(input: LinkingSensorInputDTO): Promise<void> {
    await this.parkingSpaceBroker.publish('linking-sensor', input);
  }
}
