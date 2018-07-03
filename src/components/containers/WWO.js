import Base from './Base';
import axios from 'axios';

class WWU extends Base {
  constructor(props) {
    super(props);
    this.state.info = {
      site: 'World Weather Online',
      key: 'aefaf85fb3af48eb967132405180902'
    };
  }

  load(props) {
    axios.get(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${this.state.info.key}&q=${props.selected.lat},${props.selected.lng}&format=json`)
      .then(({data}) => {
        //console.log(data);

        let input = {
          temp: data.data.current_condition[0].temp_C,
          humidity: data.data.current_condition[0].humidity,
          wind_kph: data.data.current_condition[0].windspeedKmph,
          wind_degree: data.data.current_condition[0].winddirDegree,
          description: data.data.current_condition[0].weatherDesc[0].value,
          last_updated: data.data.current_condition[0].observation_time
        };

        let partDay = input.last_updated[6],
            calc = input.last_updated.slice(0, 2);

        if (partDay === 'P') {
          calc = +calc + 12;
        }

        calc = +calc + 2;

        if (calc < 10) {
          calc = '0' + calc;
        } else if (calc === 24 || calc === 25 || calc === 26) {
          calc -= 24;
        }

        input.last_updated = calc + input.last_updated.slice(2, 5);

        this.setState({
          data: input
        });
        this.props.onLoadData(input);
      });
  }
}

export default WWU;
