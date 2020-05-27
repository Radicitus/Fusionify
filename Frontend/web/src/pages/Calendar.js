import React, {Component} from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';


class CalendarPage extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div id="Cal">
            <Calendar onChange={this.onChange} value={this.state.date} />
        </div>

    );
    }
}


export default CalendarPage;