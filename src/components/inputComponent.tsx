import * as React from 'react';
import { FlightOptionEntity, FlightJourneyEntity, FlightSegmentEntity } from '../model/flightOptionsShape';
import '../styles/app.css';

declare var _: any;

export interface State {
    allOrigins: string[];
    allDestinations: string[];

}

export interface Props {
    FlightOptionEntity: FlightOptionEntity[];
}

export class InputComponent extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    public componentWillMount() {
        this.setState({
            allOrigins: this.getAllDistinctOrigins(),
            allDestinations: this.getAllDistinctDestinations()
        })
    }

    getAllDistinctDestinations(): string[] {
        let allDest: string[] = [];
        this.props.FlightOptionEntity.map((flightOptions: FlightOptionEntity, i: any) => {
            if (flightOptions.OutboundJourney != null) {
                allDest.push(flightOptions.OutboundJourney.Segments[flightOptions.OutboundJourney.Segments.length - 1]
                    .DestinationCode);
            }
            if (flightOptions.InboundJourney != null) {
                allDest.push(flightOptions.InboundJourney.Segments[flightOptions.InboundJourney.Segments.length - 1]
                    .DestinationCode);
            }
        })
        return _.uniq(allDest);
    }

    getAllDistinctOrigins(): string[] {
        let allOri: string[] = [];
        this.props.FlightOptionEntity.map((flightOptions: FlightOptionEntity, i: any) => {
            if (flightOptions.OutboundJourney != null) {
                allOri.push(flightOptions.OutboundJourney.Segments[0].OriginCode);
            }
            if (flightOptions.InboundJourney != null) {
                allOri.push(flightOptions.InboundJourney.Segments[0].OriginCode);
            }
        })
        return _.uniq(allOri);
    }

    render() {
        return (
            <div>
                <select name="Origins">
                    {
                        this.state.allOrigins.map((origin: string, i: any) => {
                            return <option key={i} value={origin}>{origin}</option>;
                        })
                    }
                </select>
                <select name="Destinations">
                    {
                        this.state.allDestinations.map((destination: string, i: any) => {
                            return <option key={i} value={destination}>{destination}</option>;
                        })
                    }
                </select>
            </div>
        );
    }
}
