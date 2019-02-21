const initialState = {
  markedDate: {}
}

const calendarReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_DATE_NOW':
      return {...state, markedDate: action.payload}
    default:
      return state;
  }
};

export default calendarReducer;