$('.projects a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;

    $('.projects').remove();
    $('.work').load(url + ' html').hide().fadeIn('slow');
})