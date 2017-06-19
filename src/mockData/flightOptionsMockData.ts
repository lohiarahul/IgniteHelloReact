import { FlightOptionEntity } from '../model/flightOptionsShape';

var FlightOptionMockData: FlightOptionEntity[] = JSON.parse(
  `[
    {
      "CarrierId": 8,
      "CarrierCode": "FJ",
      "AdultSaleTotal": 474.4,
      "ChildSaleTotal": 221.9,
      "InfantInLapSaleTotal": 23.25,
      "OutboundJourney": {
        "Key": "RSPCLA50_FJ920",
        "Cabin": 30,
        "FareBasisCode": "RSPCLA50",
        "BookingClass": "R",
        "Availability": 4,
        "Segments": [
          {
            "CarrierCode": "FJ",
            "FlightNo": "920",
            "Aircraft": "Boeing 737",
            "OriginCode": "BNE",
            "DestinationCode": "NAN",
            "DepartureDate": "2017-02-24T11:15:00.0000000+10:00",
            "ArrivalDate": "2017-02-24T16:50:00.0000000+12:00",
            "FlightDuration": 215,
            "StopOverDuration": 0
          }
        ]
      }
    },
    {
      "CarrierId": 1,
      "CarrierCode": "VA",
      "AdultSaleTotal": 516.67,
      "ChildSaleTotal": 193.97,
      "InfantInLapSaleTotal": 26,
      "OutboundJourney": {
        "Key": "TZGPARS2_VA175",
        "Cabin": 30,
        "FareBasisCode": "TZGPARS2",
        "BookingClass": "T",
        "Availability": 7,
        "Segments": [
          {
            "CarrierCode": "VA",
            "FlightNo": "175",
            "Aircraft": "Boeing 737",
            "OriginCode": "BNE",
            "DestinationCode": "NAN",
            "DepartureDate": "2017-02-24T09:20:00.0000000+10:00",
            "ArrivalDate": "2017-02-24T15:00:00.0000000+12:00",
            "FlightDuration": 220,
            "StopOverDuration": 0
          }
        ]
      },
      "InboundJourney": {
        "Key": "TZGPARS2_VA184_VA309",
        "Cabin": 30,
        "FareBasisCode": "TZGPARS2",
        "BookingClass": "T",
        "Availability": 7,
        "Segments": [
          {
            "CarrierCode": "VA",
            "FlightNo": "184",
            "Aircraft": "Boeing 737",
            "OriginCode": "NAN",
            "DestinationCode": "MEL",
            "DepartureDate": "2017-03-04T16:35:00.0000000+12:00",
            "ArrivalDate": "2017-03-04T21:10:00.0000000+11:00",
            "FlightDuration": 335,
            "StopOverDuration": 590
          },
          {
            "CarrierCode": "VA",
            "FlightNo": "309",
            "Aircraft": "Embraer RJ-190",
            "OriginCode": "MEL",
            "DestinationCode": "BNE",
            "DepartureDate": "2017-03-05T07:00:00.0000000+11:00",
            "ArrivalDate": "2017-03-05T08:10:00.0000000+10:00",
            "FlightDuration": 130,
            "StopOverDuration": 0
          }
        ]
      }
    },
    {
      "CarrierId": 1,
      "CarrierCode": "VA",
      "AdultSaleTotal": 523.6,
      "ChildSaleTotal": 190.9,
      "InfantInLapSaleTotal": 28,
      "OutboundJourney": {
        "Key": "TZGPARS2_VA175",
        "Cabin": 30,
        "FareBasisCode": "TZGPARS2",
        "BookingClass": "T",
        "Availability": 7,
        "Segments": [
          {
            "CarrierCode": "VA",
            "FlightNo": "175",
            "Aircraft": "Boeing 737",
            "OriginCode": "BNE",
            "DestinationCode": "NAN",
            "DepartureDate": "2017-02-24T09:20:00.0000000+10:00",
            "ArrivalDate": "2017-02-24T15:00:00.0000000+12:00",
            "FlightDuration": 220,
            "StopOverDuration": 0
          }
        ]
      },
      "InboundJourney": {
        "Key": "QZGPARS2_VA176",
        "Cabin": 30,
        "FareBasisCode": "QZGPARS2",
        "BookingClass": "Q",
        "Availability": 7,
        "Segments": [
          {
            "CarrierCode": "VA",
            "FlightNo": "176",
            "Aircraft": "Boeing 737",
            "OriginCode": "NAN",
            "DestinationCode": "BNE",
            "DepartureDate": "2017-03-04T15:45:00.0000000+12:00",
            "ArrivalDate": "2017-03-04T17:55:00.0000000+10:00",
            "FlightDuration": 250,
            "StopOverDuration": 0
          }
        ]
      }
    },
    {
      "CarrierId": 2,
      "CarrierCode": "JQ",
      "AdultSaleTotal": 661.69,
      "ChildSaleTotal": 389.99,
      "InfantInLapSaleTotal": 30,
      "OutboundJourney": {
        "Key": "HLOW_JQ811_FJ910",
        "Cabin": 30,
        "FareBasisCode": "HLOW",
        "BookingClass": "H",
        "Availability": 4,
        "Segments": [
          {
            "CarrierCode": "JQ",
            "FlightNo": "811",
            "Aircraft": "Airbus A320",
            "OriginCode": "BNE",
            "DestinationCode": "SYD",
            "DepartureDate": "2017-02-24T06:55:00.0000000+10:00",
            "ArrivalDate": "2017-02-24T09:30:00.0000000+11:00",
            "FlightDuration": 95,
            "StopOverDuration": 255
          },
          {
            "CarrierCode": "FJ",
            "FlightNo": "910",
            "Aircraft": "Airbus A330",
            "OriginCode": "SYD",
            "DestinationCode": "NAN",
            "DepartureDate": "2017-02-24T13:45:00.0000000+11:00",
            "ArrivalDate": "2017-02-24T18:40:00.0000000+12:00",
            "FlightDuration": 235,
            "StopOverDuration": 0
          }
        ]
      },
      "InboundJourney": {
        "Key": "RSPCLA50_FJ923",
        "Cabin": 30,
        "FareBasisCode": "RSPCLA50",
        "BookingClass": "R",
        "Availability": 4,
        "Segments": [
          {
            "CarrierCode": "FJ",
            "FlightNo": "923",
            "Aircraft": "Boeing 737",
            "OriginCode": "NAN",
            "DestinationCode": "BNE",
            "DepartureDate": "2017-03-04T20:40:00.0000000+12:00",
            "ArrivalDate": "2017-03-04T22:40:00.0000000+10:00",
            "FlightDuration": 240,
            "StopOverDuration": 0
          }
        ]
      }
    },
    {
      "CarrierId": 2,
      "CarrierCode": "JQ",
      "AdultSaleTotal": 661.69,
      "ChildSaleTotal": 389.99,
      "InfantInLapSaleTotal": 30,
      "OutboundJourney": {
        "Key": "HLOW_JQ813_FJ910",
        "Cabin": 30,
        "FareBasisCode": "HLOW",
        "BookingClass": "H",
        "Availability": 4,
        "Segments": [
          {
            "CarrierCode": "JQ",
            "FlightNo": "813",
            "Aircraft": "Airbus A321",
            "OriginCode": "BNE",
            "DestinationCode": "SYD",
            "DepartureDate": "2017-02-24T07:20:00.0000000+10:00",
            "ArrivalDate": "2017-02-24T09:55:00.0000000+11:00",
            "FlightDuration": 95,
            "StopOverDuration": 230
          },
          {
            "CarrierCode": "FJ",
            "FlightNo": "910",
            "Aircraft": "Airbus A330",
            "OriginCode": "SYD",
            "DestinationCode": "NAN",
            "DepartureDate": "2017-02-24T13:45:00.0000000+11:00",
            "ArrivalDate": "2017-02-24T18:40:00.0000000+12:00",
            "FlightDuration": 235,
            "StopOverDuration": 0
          }
        ]
      },
      "InboundJourney": {
        "Key": "RSPCLA50_FJ923",
        "Cabin": 30,
        "FareBasisCode": "RSPCLA50",
        "BookingClass": "R",
        "Availability": 4,
        "Segments": [
          {
            "CarrierCode": "FJ",
            "FlightNo": "923",
            "Aircraft": "Boeing 737",
            "OriginCode": "NAN",
            "DestinationCode": "BNE",
            "DepartureDate": "2017-03-04T20:40:00.0000000+12:00",
            "ArrivalDate": "2017-03-04T22:40:00.0000000+10:00",
            "FlightDuration": 240,
            "StopOverDuration": 0
          }
        ]
      }
    },
    {
      "CarrierId": 8,
      "CarrierCode": "FJ",
      "AdultSaleTotal": 749.45,
      "ChildSaleTotal": 432.78,
      "InfantInLapSaleTotal": 48.36,
      "OutboundJourney": {
        "Key": "RSPCLA50_FJ920",
        "Cabin": 30,
        "FareBasisCode": "RSPCLA50",
        "BookingClass": "R",
        "Availability": 4,
        "Segments": [
          {
            "CarrierCode": "FJ",
            "FlightNo": "920",
            "Aircraft": "Boeing 737",
            "OriginCode": "BNE",
            "DestinationCode": "NAN",
            "DepartureDate": "2017-02-24T11:15:00.0000000+10:00",
            "ArrivalDate": "2017-02-24T16:50:00.0000000+12:00",
            "FlightDuration": 215,
            "StopOverDuration": 0
          }
        ]
      },
      "InboundJourney": {
        "Key": "VBULAS_FJ911_QF530",
        "Cabin": 30,
        "FareBasisCode": "VBULAS",
        "BookingClass": "V",
        "Availability": 7,
        "Segments": [
          {
            "CarrierCode": "FJ",
            "FlightNo": "911",
            "Aircraft": "Airbus A330",
            "OriginCode": "NAN",
            "DestinationCode": "SYD",
            "DepartureDate": "2017-03-04T09:00:00.0000000+12:00",
            "ArrivalDate": "2017-03-04T12:30:00.0000000+11:00",
            "FlightDuration": 270,
            "StopOverDuration": 90
          },
          {
            "CarrierCode": "QF",
            "FlightNo": "530",
            "Aircraft": "Boeing 737",
            "OriginCode": "SYD",
            "DestinationCode": "BNE",
            "DepartureDate": "2017-03-04T14:00:00.0000000+11:00",
            "ArrivalDate": "2017-03-04T14:30:00.0000000+10:00",
            "FlightDuration": 90,
            "StopOverDuration": 0
          }
        ]
      }
    },
    {
      "CarrierId": 8,
      "CarrierCode": "FJ",
      "AdultSaleTotal": 749.45,
      "ChildSaleTotal": 432.78,
      "InfantInLapSaleTotal": 48.36,
      "OutboundJourney": {
        "Key": "RSPCLA50_FJ920",
        "Cabin": 30,
        "FareBasisCode": "RSPCLA50",
        "BookingClass": "R",
        "Availability": 4,
        "Segments": [
          {
            "CarrierCode": "FJ",
            "FlightNo": "920",
            "Aircraft": "Boeing 737",
            "OriginCode": "BNE",
            "DestinationCode": "NAN",
            "DepartureDate": "2017-02-24T11:15:00.0000000+10:00",
            "ArrivalDate": "2017-02-24T16:50:00.0000000+12:00",
            "FlightDuration": 215,
            "StopOverDuration": 0
          }
        ]
      },
      "InboundJourney": {
        "Key": "VBULAS_FJ911_QF532",
        "Cabin": 30,
        "FareBasisCode": "VBULAS",
        "BookingClass": "V",
        "Availability": 7,
        "Segments": [
          {
            "CarrierCode": "FJ",
            "FlightNo": "911",
            "Aircraft": "Airbus A330",
            "OriginCode": "NAN",
            "DestinationCode": "SYD",
            "DepartureDate": "2017-03-04T09:00:00.0000000+12:00",
            "ArrivalDate": "2017-03-04T12:30:00.0000000+11:00",
            "FlightDuration": 270,
            "StopOverDuration": 150
          },
          {
            "CarrierCode": "QF",
            "FlightNo": "532",
            "Aircraft": "Boeing 737",
            "OriginCode": "SYD",
            "DestinationCode": "BNE",
            "DepartureDate": "2017-03-04T15:00:00.0000000+11:00",
            "ArrivalDate": "2017-03-04T15:30:00.0000000+10:00",
            "FlightDuration": 90,
            "StopOverDuration": 0
          }
        ]
      }
    },
    {
      "CarrierId": 9,
      "CarrierCode": "QF",
      "AdultSaleTotal": 791.31,
      "ChildSaleTotal": 465.61,
      "InfantInLapSaleTotal": 52,
      "OutboundJourney": {
        "Key": "VBULAS_QF515_FJ910",
        "Cabin": 30,
        "FareBasisCode": "VBULAS",
        "BookingClass": "O",
        "Availability": 7,
        "Segments": [
          {
            "CarrierCode": "QF",
            "FlightNo": "515",
            "Aircraft": "Boeing 737",
            "OriginCode": "BNE",
            "DestinationCode": "SYD",
            "DepartureDate": "2017-02-24T08:35:00.0000000+10:00",
            "ArrivalDate": "2017-02-24T11:10:00.0000000+11:00",
            "FlightDuration": 95,
            "StopOverDuration": 155
          },
          {
            "CarrierCode": "FJ",
            "FlightNo": "910",
            "Aircraft": "Airbus A330",
            "OriginCode": "SYD",
            "DestinationCode": "NAN",
            "DepartureDate": "2017-02-24T13:45:00.0000000+11:00",
            "ArrivalDate": "2017-02-24T18:40:00.0000000+12:00",
            "FlightDuration": 235,
            "StopOverDuration": 0
          }
        ]
      },
      "InboundJourney": {
        "Key": "RSPCLA50_FJ923",
        "Cabin": 30,
        "FareBasisCode": "RSPCLA50",
        "BookingClass": "R",
        "Availability": 4,
        "Segments": [
          {
            "CarrierCode": "FJ",
            "FlightNo": "923",
            "Aircraft": "Boeing 737",
            "OriginCode": "NAN",
            "DestinationCode": "BNE",
            "DepartureDate": "2017-03-04T20:40:00.0000000+12:00",
            "ArrivalDate": "2017-03-04T22:40:00.0000000+10:00",
            "FlightDuration": 240,
            "StopOverDuration": 0
          }
        ]
      }
    },
    {
      "CarrierId": 9,
      "CarrierCode": "QF",
      "AdultSaleTotal": 791.31,
      "ChildSaleTotal": 465.61,
      "InfantInLapSaleTotal": 52,
      "OutboundJourney": {
        "Key": "VBULAS_QF519_FJ910",
        "Cabin": 30,
        "FareBasisCode": "VBULAS",
        "BookingClass": "O",
        "Availability": 6,
        "Segments": [
          {
            "CarrierCode": "QF",
            "FlightNo": "519",
            "Aircraft": "Boeing 737",
            "OriginCode": "BNE",
            "DestinationCode": "SYD",
            "DepartureDate": "2017-02-24T09:35:00.0000000+10:00",
            "ArrivalDate": "2017-02-24T12:10:00.0000000+11:00",
            "FlightDuration": 95,
            "StopOverDuration": 95
          },
          {
            "CarrierCode": "FJ",
            "FlightNo": "910",
            "Aircraft": "Airbus A330",
            "OriginCode": "SYD",
            "DestinationCode": "NAN",
            "DepartureDate": "2017-02-24T13:45:00.0000000+11:00",
            "ArrivalDate": "2017-02-24T18:40:00.0000000+12:00",
            "FlightDuration": 235,
            "StopOverDuration": 0
          }
        ]
      },
      "InboundJourney": {
        "Key": "RSPCLA50_FJ923",
        "Cabin": 30,
        "FareBasisCode": "RSPCLA50",
        "BookingClass": "R",
        "Availability": 4,
        "Segments": [
          {
            "CarrierCode": "FJ",
            "FlightNo": "923",
            "Aircraft": "Boeing 737",
            "OriginCode": "NAN",
            "DestinationCode": "BNE",
            "DepartureDate": "2017-03-04T20:40:00.0000000+12:00",
            "ArrivalDate": "2017-03-04T22:40:00.0000000+10:00",
            "FlightDuration": 240,
            "StopOverDuration": 0
          }
        ]
      }
    },
    {
      "CarrierId": 9,
      "CarrierCode": "QF",
      "AdultSaleTotal": 791.31,
      "ChildSaleTotal": 465.61,
      "InfantInLapSaleTotal": 52,
      "OutboundJourney": {
        "Key": "VBULAS_QF517_FJ910",
        "Cabin": 30,
        "FareBasisCode": "VBULAS",
        "BookingClass": "O",
        "Availability": 7,
        "Segments": [
          {
            "CarrierCode": "QF",
            "FlightNo": "517",
            "Aircraft": "Boeing 737",
            "OriginCode": "BNE",
            "DestinationCode": "SYD",
            "DepartureDate": "2017-02-24T09:05:00.0000000+10:00",
            "ArrivalDate": "2017-02-24T11:40:00.0000000+11:00",
            "FlightDuration": 95,
            "StopOverDuration": 125
          },
          {
            "CarrierCode": "FJ",
            "FlightNo": "910",
            "Aircraft": "Airbus A330",
            "OriginCode": "SYD",
            "DestinationCode": "NAN",
            "DepartureDate": "2017-02-24T13:45:00.0000000+11:00",
            "ArrivalDate": "2017-02-24T18:40:00.0000000+12:00",
            "FlightDuration": 235,
            "StopOverDuration": 0
          }
        ]
      },
      "InboundJourney": {
        "Key": "RSPCLA50_FJ923",
        "Cabin": 30,
        "FareBasisCode": "RSPCLA50",
        "BookingClass": "R",
        "Availability": 4,
        "Segments": [
          {
            "CarrierCode": "FJ",
            "FlightNo": "923",
            "Aircraft": "Boeing 737",
            "OriginCode": "NAN",
            "DestinationCode": "BNE",
            "DepartureDate": "2017-03-04T20:40:00.0000000+12:00",
            "ArrivalDate": "2017-03-04T22:40:00.0000000+10:00",
            "FlightDuration": 240,
            "StopOverDuration": 0
          }
        ]
      }
    },
    {
      "CarrierId": 9,
      "CarrierCode": "QF",
      "AdultSaleTotal": 959.6,
      "ChildSaleTotal": 585.9,
      "InfantInLapSaleTotal": 71,
      "OutboundJourney": {
        "Key": "SSFAU_QF397",
        "Cabin": 30,
        "FareBasisCode": "SSFAU",
        "BookingClass": "S",
        "Availability": 9,
        "Segments": [
          {
            "CarrierCode": "QF",
            "FlightNo": "397",
            "Aircraft": "Boeing 737",
            "OriginCode": "BNE",
            "DestinationCode": "NAN",
            "DepartureDate": "2017-02-24T11:15:00.0000000+10:00",
            "ArrivalDate": "2017-02-24T16:50:00.0000000+12:00",
            "FlightDuration": 215,
            "StopOverDuration": 0
          }
        ]
      },
      "InboundJourney": {
        "Key": "SSFAU_QF348",
        "Cabin": 30,
        "FareBasisCode": "SSFAU",
        "BookingClass": "S",
        "Availability": 9,
        "Segments": [
          {
            "CarrierCode": "QF",
            "FlightNo": "348",
            "Aircraft": "Boeing 737",
            "OriginCode": "NAN",
            "DestinationCode": "BNE",
            "DepartureDate": "2017-03-04T20:40:00.0000000+12:00",
            "ArrivalDate": "2017-03-04T22:40:00.0000000+10:00",
            "FlightDuration": 240,
            "StopOverDuration": 0
          }
        ]
      }
    }
  ]`);;

export default FlightOptionMockData;
