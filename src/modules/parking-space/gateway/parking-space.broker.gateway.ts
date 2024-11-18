export default interface ParkingSpaceBrokerGateway {
  publish(queue: string, message: any): Promise<void>;
  consume(queue: string, callback: (message: any) => void): Promise<void>;
}
