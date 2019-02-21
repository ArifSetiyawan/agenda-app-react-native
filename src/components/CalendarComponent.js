import React, { Component } from 'react';
import { LocaleConfig, Calendar } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul.','Aug','Sep','Oct','Nov','Dec'],
  dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
};

LocaleConfig.defaultLocale = 'fr';

class CalendarComponent extends Component {

  constructor(){
    super()
    this.state = {
      markedDate: {}
    }
  }

  getFormatDateNow(){
    let date = new Date()
    date = date.toLocaleDateString('id')
    date = date.split('/')
    let getDate = date[0]
    if(getDate.length===1){
      getDate= `0${getDate}`
    }
    let getMonth = date[1]
    if(getMonth.length===1){
      getMonth= `0${getMonth}`
    }
    const getYear = date[2]
    return `${getYear}-${getMonth}-${getDate}`
  }

  componentDidMount() {
    this.setState({
      markedDate:{
        [this.getFormatDateNow()]: {selected: true}
      }
    })
  }

  render() {
    return (
      <Calendar
        onDayPress={(day) => this.handleDayPress(day.dateString)}
        markedDates={this.state.markedDate}
      />
    );
  }
}

export default CalendarComponent;