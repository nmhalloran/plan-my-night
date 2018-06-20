const axios = require('axios');


let newSearch = {};

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchform')
  document.addEventListener('submit', e => {
    newSearch = searchInput(searchForm);
    return newSearch;
  })
  function searchInput(form) {
      return {
        location: form[0].value,
        term: form[1].value
      }
  }
})

export const searchTerms = () => {
  return newSearch;
}
