import Base from './Base';
import axios from 'axios';

class Open extends Base {
  constructor(props) {
    super(props);
    this.state.info = {
      site: 'OpenWeather',
      key: ['5fbf2d5bb1ffe0f4f72cacb24232754b', 'ff4c359a0daebb85920ed39af4b4ca20'],
      index: 0
    };
  }

  load(props) {
    if (this.state.info.index === this.state.info.key.length) {
      return false;
    }

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.selected.lat}&lon=${props.selected.lng}&APPID=${this.state.info.key[this.state.info.index]}&units=metric`)
      .then(({data}) => {
        //console.log(data);
        
        let input = {
          temp: data.main.temp,
          humidity: data.main.humidity,
          wind_mps: data.wind.speed,
          wind_degree: data.wind.deg,
          description: data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1)
        };

        this.setState({
          data: input
        });
        this.props.onLoadData(input);
      })
      .catch(error => {
        //console.log('catch is working')
        //debugger
        this.setState({
          index: this.state.info.index++
         },
         this.load.bind(this, props)
       );
     });
  }
}

export default Open;
