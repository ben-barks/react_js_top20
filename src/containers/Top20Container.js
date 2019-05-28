import React, {Component} from 'react';
import Song from '../components/Song';

class Top20Container extends Component{
  constructor(props){
    super(props);
    this.state = {
      top20songs: [],
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({top20songs: data})
    });

    request.send();
  }

  render(){
    return(
      <div>
      <h1>Top 20 Songs</h1>
      <Song songsList={this.state.top20songs}/>
      </div>
    );
  }
}

export default Top20Container;
