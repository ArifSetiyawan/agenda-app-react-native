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

  getFormatDate(){
    const date = new Date()
    const getYears = date.getFullYear()
    const getMonth = date.getMonth()
    console.log(getMonth)
  }

  handleDayPress(day){
    this.getFormatDate()
  }

  render() {
    console.log(this.state.markedDate)
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