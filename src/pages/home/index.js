import React, { Fragment, Component } from 'react';
import City from './../../components/City';
import Search from './../../components/Search';

const database = require('./../../data/base-min.json');
const ScrollArea = require('react-scrollbar').default;

class Home extends Component {
  state = {
    search: ""
  }

  onSearch(event, search) {
    this.setState({search});
  }

  getData() {
    return database.filter(item => {
      return item.name.toLowerCase().match(this.state.search.toLowerCase());
    });
  }

  render() {
    return (
      <Fragment>
        <div className="page-search">
          <div className="logo"></div>
          <Search value={this.state.search} onSearch={this.onSearch.bind(this)}/>
        </div>
        <div className="page-home">
          <ScrollArea
            speed={0.8}
            className="home__scroll"
            contentClassName="content"
            horizontal={false}
          >
            <div className="page-city">
              {this.getData.call(this).map((item) =>
                  <City key={item.name} item={item}/>
              )}
            </div>
          </ScrollArea>
        </div>
      </Fragment>
    );
  }
}

export default Home;
