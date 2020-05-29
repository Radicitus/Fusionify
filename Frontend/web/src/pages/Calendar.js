import React, {Component} from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';


class CalendarPage extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })
    onClickDay = date => this.setState(new Date(2017, 0, 1))

    render() {
        return (
            <div id="Cal">
            <Calendar onChange={this.onChange} onClickDay={this.onClickDay} value={this.state.date} />
        </div>

    );
    }
}


export default CalendarPage;