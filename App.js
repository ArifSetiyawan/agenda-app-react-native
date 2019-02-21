import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LocaleConfig, Calendar } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul.','Aug','Sep','Oct','Nov','Dec'],
  dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
};

LocaleConfig.defaultLocale = 'fr';

class App extends Component {
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

  handleDayPress(day){
    this.setState({
      markedDate:{
        [day]: {selected: true},
        [this.getFormatDateNow()]: {selected: true}
      }
    })
  }

  render() {
    return (
      <View>
        <Calendar
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          onDayPress={(day) => this.handleDayPress(day.dateString)}
          markedDates={this.state.markedDate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;