import AggregateRoot from '../../@shared/domain/entity/aggregate-root.interface';
import BaseEntity from '../../@shared/domain/entity/base.entity';
import Id from '../../@shared/domain/value-object/id.value-object';

type ParkingSpaceProps = {
  id?: Id;
  name: string;
  sensorID?: string;
  carID?: string;
  synchronizing?: boolean;
};

export default class ParkingSpace extends BaseEntity implements AggregateRoot {
  private _name: string;
  private _sensorID: string | null;
  private _carID: string | null;
  private _synchronizing: boolean;

  constructor(props: ParkingSpaceProps) {
    super(props.id);
    this._name = props.name;
    this._sensorID = props.sensorID || null;
    this._carID = props.carID || null;
    this._synchronizing = props.synchronizing || false;
  }

  get name() {
    return this._name;
  }

  get sensorID() {
    return this._sensorID;
  }

  get carID() {
    return this._carID;
  }

  get synchronizing() {
    return this._synchronizing;
  }

  occupy(carID: string) {
    if (!this.isLinked()) {
      throw new Error('Parking space is not linked');
    }

    if (this._carID !== null) {
      throw new Error('Parking space is already occupied');
    }

    this._carID = carID;
  }

  vacate() {
    if (!this.isLinked()) {
      throw new Error('Parking space is not linked');
    }

    this._carID = null;
  }

  isLinked(): boolean {
    return this._sensorID !== null;
  }

  linkingValidation() {}
}
