import * as React from 'react';
import { FlightInfoModel } from '../model/flightInformationModel';
import { FlightSegmentEntity } from '../model/flightOptionsShape';
import '../styles/app.css';
import CodeToCityMap from '../constants/mapper'
import * as moment from '../../node_modules/moment/moment'
import * as _ from 'underscore';

export const CarrierComponent = (props: { flightInfo: FlightInfoModel[] }) => {

    return (

        <table>
            <thead>
                <tr>
                    <th>
                        <h3> {CodeToCityMap[props.flightInfo[0].originCode]} to {CodeToCityMap[props.flightInfo[0].destCode]}</h3>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {
                            props.flightInfo.map((flight: FlightInfoModel, i: any) =>
                                <div className="rcorners" key={i + 2}>{flight.carrierName}
                                    <br key={i + 3} />
                                    <b key={i + 4}>{moment(_.first(flight.flightDetails).DepartureDate).format('hh:mm A')}</b>
                                    &nbsp;to&nbsp;
                                        <b key={i + 5}>{moment(_.last(flight.flightDetails).ArrivalDate).format('hh:mm A')}</b>
                                    <br key={i + 6} />

                                    {_.first(flight.flightDetails).OriginCode}
                                    {
                                        flight.flightDetails.map((seg, i: any) =>
                                            <span key={i + 8}>
                                                <span className="tooltip1" title={"✈  " + createDurationString(seg.FlightDuration, "")}>
                                                    <span title="">&nbsp;→&nbsp;</span>
                                                </span>
                                                {seg.StopOverDuration > 0 &&
                                                    <span className="tooltip1" title={createDurationString(seg.StopOverDuration, " stopover")}>
                                                        <span title=""> {seg.DestinationCode}</span>
                                                    </span>
                                                }
                                                {
                                                    seg.StopOverDuration <= 0 &&
                                                    <span> {seg.DestinationCode}</span>
                                                }
                                            </span>
                                        )
                                    }
                                    <br />
                                    <b key={i + 10}>
                                        {
                                            createDurationString(_.reduce(flight.flightDetails,
                                                function (memo, seg) { return memo + seg.FlightDuration + seg.StopOverDuration; },
                                                0), "")
                                        }

                                    </b>
                                    <br />

                                </div>
                            )
                        }
                    </td>
                </tr>
            </tbody>
        </table>


    );
}
function createDurationString(duration: number, suffix: string): string {
    if (duration < 1) {
        return "";
    }
    let formattedDuration: string;
    let hours: number = Math.floor(duration / 60);
    let minutes: number = duration % 60;
    return formattedDuration = hours + " h " + minutes + " m " + suffix;
}

