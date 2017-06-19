import { FlightOptionEntity, FlightSegmentEntity } from '../model/flightOptionsShape';
import { FlightInfoModel } from '../model/flightInformationModel';
import FlightOptionsMockData from '../mockData/flightOptionsMockData';
import * as _ from 'underscore';
import CarrierMockData from '../mockData/carrierMockData';


class FlightOptionsAPI {
  //This would be performed on the server in a real app. Just stubbing in.
  private _clone(item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
  };

  // Just return a copy of the mock data
  getAllFlights(): Array<FlightOptionEntity> {
    return this._clone(FlightOptionsMockData);
  }

  getAllFlightDetails(originCode: string, destCode: string): Array<FlightInfoModel> {
    let flightInfoObject: FlightInfoModel;
    let flightInfoArray = new Array<FlightInfoModel>();
    FlightOptionsMockData.map((flight: FlightOptionEntity) => {
      flightInfoObject = new FlightInfoModel();

      let carrierName = _.findWhere(CarrierMockData, { "Id": flight.CarrierId }).Name;
      flightInfoObject.carrierName = carrierName;

      if (flight.OutboundJourney != null) {
        if (this.matchRoute(originCode, destCode, flight.OutboundJourney.Segments)) {
          flightInfoObject.originCode = originCode;
          flightInfoObject.destCode = destCode;
          flight.OutboundJourney.Segments.map((seg: FlightSegmentEntity) => {
            flightInfoObject.flightDetails.push(seg);
          })
          flightInfoArray.push(flightInfoObject);
        }
      }

      if (flight.InboundJourney != null) {
        if (this.matchRoute(originCode, destCode, flight.InboundJourney.Segments)) {
          flightInfoObject = new FlightInfoModel();
          flightInfoObject.originCode = originCode;
          flightInfoObject.destCode = destCode;
          flightInfoObject.carrierName = carrierName;
          flight.InboundJourney.Segments.map((seg: FlightSegmentEntity) => {
            flightInfoObject.flightDetails.push(seg);
          })
          flightInfoArray.push(flightInfoObject);
        }
      }
    });
    return flightInfoArray;
  }


  matchRoute(originCode: string, destCode: string, segments: FlightSegmentEntity[]): boolean {
    if (_.first(segments).OriginCode == originCode && _.last(segments).DestinationCode == destCode) {
      return true;
    }
    return false;
  }
}

export const flightOptionsAPI = new FlightOptionsAPI();
