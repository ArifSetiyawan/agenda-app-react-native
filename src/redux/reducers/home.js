const initialState = {
  markedDate: {},
  dateNow: '',
  modalVisible: false,
  modal: '',
  selectedDate: '',
  events: [],
  modalVisibleInEventList: false
}

const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_DATE_NOW':
      return {...state, markedDate: action.payload.markedDate, dateNow: action.payload.date}
    case 'SET_MODAL_VISIBLE':
      return {...state, modalVisible: action.payload.visible, modal: action.payload.modal, selectedDate: action.payload.date}
    case 'SET_MODAL_VISIBLE_IN_EVENT_LIST':
      return {...state, modalVisibleInEventList: action.payload.visible, selectedDate: action.payload.date}
    case 'ADD_EVENT':
      return {...state, events: [...state.events, action.payload], markedDate: {...state.markedDate, [action.payload.date]: {marked: true}}}
    default:
      return state;
  }
};

export default homeReducer;