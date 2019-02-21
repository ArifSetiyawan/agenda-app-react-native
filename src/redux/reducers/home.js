const initialState = {
  markedDate: {},
  modalVisible: false,
  modal: ''
}

const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_DATE_NOW':
      return {...state, markedDate: action.payload}
    case 'SET_MODAL_VISIBLE':
      return {...state, modalVisible: action.payload.visible, modal: action.payload.modal}
    default:
      return state;
  }
};

export default homeReducer;