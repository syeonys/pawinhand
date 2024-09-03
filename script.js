


//statistics
$('li.main-menu').click(function () {
    $(this).find('ul.sub-menu').slideToggle()
    $(this).toggleClass('on')
})