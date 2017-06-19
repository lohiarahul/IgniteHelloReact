import { FlightSegmentEntity } from './flightOptionsShape';


export class FlightInfoModel {
    carrierName?: string;
    originCode?: string;
    destCode?: string;
    flightDetails: FlightSegmentEntity[];

    constructor() {
        this.carrierName = "";
        this.originCode = "";
        this.destCode = "";
        this.flightDetails = new Array<FlightSegmentEntity>();
    }
}