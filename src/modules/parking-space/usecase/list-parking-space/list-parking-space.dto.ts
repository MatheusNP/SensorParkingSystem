export interface ListParkingSpaceInputDTO {}

export interface ListParkingSpaceOutputDTO {
  parkingSpaces: {
    id: string;
    name: string;
    sensorID: string | null;
    carID: string | null;
  }[];
}
