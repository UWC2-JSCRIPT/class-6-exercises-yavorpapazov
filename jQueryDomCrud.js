$(document).ready(function() {
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    let $a = $('<a>')
    $a.text('Buy Now!')
    $a.attr('id', 'cta')
    $('main').append($a)
    // Access (read) the data-color attribute of the <img>,
    // log to the console
    let $img = $('img')
    console.log($img.data('color'))
    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    let $li = $('li:nth-child(3)')
    $li.addClass('highlight')
    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $('p').remove()
    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $('#cta').on('click', function() {
        let $this = $(this)
        $this.remove()
        let $h3= $('<h3>')
        $h3.text('Added to cart')
        $('main').append($h3)
    })
})