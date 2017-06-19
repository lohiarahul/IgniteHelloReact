
enum FlightCabin {
  First = 1,
  Business = 20,
  Ecomomy = 30,
  EcomomyStandard = 40,
  EconomyPremium = 50
}

export class CarrierEntity {
  Id: number;
  Code: string;
  Name: string;

  constructor() {
    this.Id = -1;
    this.Code = "";
    this.Name = "";
  }
}

export class FlightOptionEntity {
  CarrierId?: number;
  CarrierCode?: string;

  AdultSaleTotal?: number;
  ChildSaleTotal?: number;
  InfantInLapSaleTotal?: number;

  OutboundJourney?: FlightJourneyEntity;
  InboundJourney?: FlightJourneyEntity;

  constructor() {
    this.CarrierId = -1;
    this.CarrierCode = "";
    this.AdultSaleTotal = -1;
    this.ChildSaleTotal = -1;
    this.InfantInLapSaleTotal = -1;
    this.OutboundJourney = null;
    this.InboundJourney = null;
  }
}

export class FlightJourneyEntity {
  Key: string;

  Cabin: FlightCabin;
  Availability: number;
  FareBasisCode: string;
  BookingClass: string;

  Segments: FlightSegmentEntity[];

  constructor() {
    this.Key = "";
    this.Cabin = null;
    this.Availability = -1;
    this.FareBasisCode = "";
    this.BookingClass = "";
    this.Segments = null;
  }
}

export class FlightSegmentEntity {
  CarrierCode: string;
  FlightNo: string;
  Aircraft: string;

  OriginCode: string;
  DestinationCode: string;

  DepartureDate: string;
  ArrivalDate: string;

  FlightDuration: number;
  StopOverDuration: number;

  constructor() {
    this.CarrierCode = "";
    this.FlightNo = "";
    this.Aircraft = "";
    this.OriginCode = "";
    this.DestinationCode = "";
    this.DepartureDate = "";
    this.ArrivalDate = "";
    this.FlightDuration = -1;
    this.StopOverDuration = -1;
  }

}


