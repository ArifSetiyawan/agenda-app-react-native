const getDateNow = (date) => ({
  type: 'GET_DATE_NOW',
  payload: {
    [date]: {
      selected: true
    }
  }
});

export {
  getDateNow
}