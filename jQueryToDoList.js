$(document).ready(function() {
  /**
   * Toggles "done" class on <li> element
   */
  let lineThrough = function(e) {
    $(e.target.parentElement).toggleClass('done')
  }
  /**
   * Delete element when delete link clicked
   */
  let deleteListItem = function(e) {
    e.preventDefault()
    $(e.target.parentElement).remove()
  }
  /**
   * Adds new list item to <ul>
   */
  const addListItem = function(e) {
    e.preventDefault()
    const text = $('input').val()
    // rest here...
    let $ulElement = $('.today-list')
    let $liElement = $('<li>')
    $liElement.on('click', lineThrough)
    let $spanElement = $('<span>')
    $spanElement.text(text)
    let $aElement = $('<a>')
    $aElement.addClass('delete')
    $aElement.text('Delete')
    $aElement.on('click', deleteListItem)
    $liElement.append($spanElement, $aElement)
    $ulElement.append($liElement)
  }
  // add listener for add
  $('.add-item').on('click', addListItem)
})