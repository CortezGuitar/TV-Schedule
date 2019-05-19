import React, { Component } from 'react';
import Calendar from 'react-calendar';

import './HomePage.css';

class HomePage extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  onClickDayHandler = value => {
    const usaDate = value.getTime();
    const utcDate = new Date(usaDate + 180 * 60 * 1000);
    const date = utcDate.toISOString().substring(0, 10);

    this.props.history.push(`/tv-show/${date}`);
  };

  render() {
    return (
      <div>
        <div className="HomePage-main">
          <img
            src="https://abeon-hosting.com/images/old-tv-cliparts-19.jpg"
            alt="tv show"
            className="HomePage-main-img"
          />
          <p className="HomePage-main-text">
            For a list of TV shows, please select the desired month and day.
          </p>
        </div>
        <div>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            locale="en"
            onClickDay={this.onClickDayHandler}
            calendarType="ISO 8601"
            minDetail="year"
            navigationLabel={({ date }) =>
              `${date.toLocaleDateString('en-GB', {
                month: 'long'
              })}`
            }
            nextLabel={<i className="fas fa-chevron-right" />}
            prevLabel={<i className="fas fa-chevron-left" />}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
