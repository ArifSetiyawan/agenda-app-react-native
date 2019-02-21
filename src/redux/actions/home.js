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

export {
  getDateNow,
  setModalVisible
}