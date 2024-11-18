import ParkingSpace from '../domain/parking-space.entity';

export default interface ParkingSpacePersistenseGateway {
  save(input: ParkingSpace): Promise<ParkingSpace>;
  find(id: string): Promise<ParkingSpace | null>;
  findAll(): Promise<ParkingSpace[] | null>;
  delete(id: string): Promise<void>;
}
