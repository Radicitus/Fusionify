import React, {Component} from 'react';
import SideBar from "../sidebar";
import logo from "../assets/fusion_logo.png";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class CalendarPage extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div id="Cal">
            <div id="page-wrap">
            <h1>conFUSION</h1>
            </div>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <h1>Calendar</h1>


            <Calendar onChange={this.onChange} value={this.state.date} />
        
        </div>

    );
    }
}




export default CalendarPage;