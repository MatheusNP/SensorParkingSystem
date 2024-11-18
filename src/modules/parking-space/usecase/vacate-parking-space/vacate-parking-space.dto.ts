export interface VacateParkingSpaceInputDTO {
  id: string;
}

export interface VacateParkingSpaceOutputDTO {
  id: string;
  name: string;
  sensorID: string;
  carID: string | null;
}
