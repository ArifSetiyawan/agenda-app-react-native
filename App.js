import React, { Component } from 'react';
import { View } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul.','Aug','Sep','Oct','Nov','Dec'],
  dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
};

LocaleConfig.defaultLocale = 'fr';

class App extends Component {

  render() {
    return (
      <View>
        <CalendarList
          horizontal={true}
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          pagingEnabled={true}
        />
      </View>
    );
  }
}

export default App;