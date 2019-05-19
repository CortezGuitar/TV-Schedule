import React, { Component } from 'react';
import axios from 'axios';

import TvshowItem from '../TvshowItem';

class TvshowPage extends Component {
  state = { data: [], start: 0, limit: 10 };

  componentDidMount() {
    const { date } = this.props.match.params;
    axios
      .get(`http://api.tvmaze.com/schedule?country=US&date=${date}`)
      .then(data => this.setState({ data: data.data }));
  }

  displayDate = () => {
    const { date } = this.props.match.params;
    const newDate = new Date(date);

    return newDate.toLocaleDateString('en-GB', {
      month: 'long',
      year: 'numeric',
      day: 'numeric'
    });
  };

  renderItems = (items, start, limit) => {
    return items
      .slice(start, limit)
      .map(item => (
        <TvshowItem
          key={item.id}
          title={item.show.name}
          premiered={item.show.premiered}
          image={item.show.image}
          season={item.season}
          episode={item.number}
        />
      ));
  };

  render() {
    if (this.state.data) {
      const { data, start, limit } = this.state;
      return (
        <div>
          <h5 style={{ padding: '0.5rem', textAlign: 'center', margin: '0' }}>
            {this.displayDate()}
          </h5>
          {data && this.renderItems(data, start, limit)}
          <div className="p-2">
            {limit < data.length ? (
              <button
                type="button"
                className="btn btn-block btn-outline-secondary"
                onClick={() => {
                  this.setState({ limit: this.state.limit + 10 });
                }}
              >
                Show More <i className="fas fa-chevron-down" />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-block btn-outline-secondary"
                onClick={() => {
                  this.setState({ limit: 10 });
                  window.scrollTo(0, 0);
                }}
              >
                Back to Top <i className="fas fa-chevron-up" />
              </button>
            )}
          </div>
        </div>
      );
    }
  }
}

export default TvshowPage;
