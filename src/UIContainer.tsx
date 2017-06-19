import * as React from 'react';
import { CarrierEntity, FlightOptionEntity, FlightSegmentEntity } from './model/flightOptionsShape';
import { FlightInfoModel } from './model/flightInformationModel';
import { flightOptionsAPI } from './api/flightOptionsAPI';
import { CarrierComponent } from './components/carrierComponent';
import { InputComponent } from './components/inputComponent';
import './styles/app.css'

interface Props extends React.Props<UIContainer> {
}

interface State {
  toFlightInfo: FlightInfoModel[],
  froFlightInfo: FlightInfoModel[]
}

export class UIContainer extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = {
      toFlightInfo: [],
      froFlightInfo: []
    };
  }


  public componentWillMount() {
    //The origin and the destination code can be supplied via user input. InputComponent not used in the application
    this.setState({
      toFlightInfo: flightOptionsAPI.getAllFlightDetails("BNE", "NAN"),
      froFlightInfo: flightOptionsAPI.getAllFlightDetails("NAN", "BNE")
    },
      function () {
        console.log("Data loaded");
      })
  }

  public render() {

    return (
      <div className="container-fluid">
        <h1>Ignite Travel Group</h1>
        <div className="row">
          <div className="col-md-offset-3 col-md-3 col-xs-offset-3 col-xs-3 col-ms-offset-3 col-ms-3 col-lg-offset-3 col-lg-3  borders " >
            <CarrierComponent flightInfo={this.state.toFlightInfo} />
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3 borders ">
            <CarrierComponent flightInfo={this.state.froFlightInfo} />
          </div>
        </div>
      </div>
    );
  }
}
