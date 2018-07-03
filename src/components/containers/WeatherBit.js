import Base from './Base';
import axios from 'axios';

class WeatherBit extends Base {
  constructor(props) {
    super(props);
    this.state.info = {
      site: 'WeatherBit',
      key: '29c40fa855b0495eb9474c87bdbd2790'
    };
  }

  load(props) {
    axios.get(`https://api.weatherbit.io/v2.0/current?lat=${props.selected.lat}&lon=${props.selected.lng}&key=${this.state.info.key}`)
      .then(({data}) => {
        //console.log(data);

        let input = {
          temp: data.data[0].temp,
          humidity: data.data[0].rh,
          wind_mps: data.data[0].wind_spd,
          description: data.data[0].weather.description,
          wind_degree: data.data[0].wind_dir,
          last_updated: data.data[0].ob_time.slice(-5)
        };
        this.setState({
          data: input
        });
        this.props.onLoadData(input);
      });
  }
}

export default WeatherBit;
