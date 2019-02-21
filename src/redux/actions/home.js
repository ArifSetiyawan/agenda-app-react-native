const getDateNow = (date) => ({
  type: 'GET_DATE_NOW',
  payload: {
    [date]: {
      selected: true
    }
  }
});

const setModalVisible = (visible) => ({
  type: 'SET_MODAL_VISIBLE',
  payload: visible
})

export {
  getDateNow,
  setModalVisible
}