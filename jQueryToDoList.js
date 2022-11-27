$(document).ready(function() {
  /**
   * Toggles "done" class on <li> element
   */
  let lineThrough = function(e) {
    $(e.currentTarget).toggleClass('done')
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
    let $spanElement = $('<span>')
    $spanElement.text(text)
    let $aElement = $('<a>')
    $aElement.addClass('delete')
    $aElement.text('Delete')
    $liElement.append($spanElement, $aElement)
    $ulElement.append($liElement)
    $liElement.on('click', lineThrough)
    $aElement.on('click', deleteListItem)
  }
  // add listener for add
  $('.add-item').on('click', addListItem)
  $('li').on('click', lineThrough)
  $('.delete').on('click', deleteListItem)
})