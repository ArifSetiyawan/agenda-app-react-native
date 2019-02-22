import React, { Component } from 'react';
import { LocaleConfig, Calendar, CalendarList } from 'react-native-calendars';
import { connect } from 'react-redux';

import { getDateNow, setModalVisible } from '../redux/actions/home';

LocaleConfig.locales['fr'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul.','Aug','Sep','Oct','Nov','Dec'],
  dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
};

LocaleConfig.defaultLocale = 'fr';

class CalendarComponent extends Component {

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
    this.props.dispatch(getDateNow(this.getFormatDateNow()))
  }

  handleDayPress(day){
    this.props.dispatch(setModalVisible(true,'listEvents',day))
  }

  render() {
    return (
      <CalendarList
        onDayPress={(day) => this.handleDayPress(day.dateString)}
        markedDates={this.props.home.markedDate}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps)(CalendarComponent);