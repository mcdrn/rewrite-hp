$('.scroll-anime').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('active');
    }
  });
  