(function(){
  var windowSize = $(window).outerHeight(),
      documentSize = $('body').outerHeight() - windowSize,
      progressLine = $('.progress-line .line'),
      percent = 100;

  function changeProgress() {
    var actualPosition = $('body').scrollTop(),
        progress = actualPosition / documentSize * percent;
        progressLine.css('width', progress + '%');
  };

  $(window).on('scroll', function () {
    changeProgress();
  });
})();
