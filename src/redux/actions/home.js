const getDateNow = (date) => ({
  type: 'GET_DATE_NOW',
  payload: {
    markedDate: {
      [date]: {
        selected: true
      }
    },
    date
  }
});

const setModalVisible = (visible,modal = '',date) => ({
  type: 'SET_MODAL_VISIBLE',
  payload: {
    visible,
    modal,
    date
  }
})

const addEvent = (value,date) => ({
  type: 'ADD_EVENT',
  payload: {
    date,
    name: value.name,
    description: value.description
  }
})

export {
  getDateNow,
  setModalVisible,
  addEvent
}