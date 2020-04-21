import React from 'react';
import axios from 'axios';

class Home extends React.Component {

  componentDidMount() {
    axios.get('http://starlord.hackerearth.com/gamesext')
    .then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div>
        <header>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default Home;