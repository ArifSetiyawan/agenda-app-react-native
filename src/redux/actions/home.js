const getDateNow = (date) => ({
  type: 'GET_DATE_NOW',
  payload: {
    [date]: {
      selected: true
    }
  }
});

const setModalVisible = (visible,modal = '') => ({
  type: 'SET_MODAL_VISIBLE',
  payload: {
    visible,
    modal
  }
})

export {
  getDateNow,
  setModalVisible
}