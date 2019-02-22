const initialState = {
  markedDate: {},
  dateNow: '',
  modalVisible: false,
  modal: '',
  selectedDate: '',
  event: []
}

const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_DATE_NOW':
      return {...state, markedDate: action.payload.markedDate, dateNow: action.payload.date}
    case 'SET_MODAL_VISIBLE':
      return {...state, modalVisible: action.payload.visible, modal: action.payload.modal, selectedDate: action.payload.date}
    case 'ADD_EVENT':
      return {...state, event: [...state.event, action.payload], markedDate: {...state.markedDate, [action.payload.date]: {marked: true}}}
    default:
      return state;
  }
};

export default homeReducer;