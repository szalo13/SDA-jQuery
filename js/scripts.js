(function() {

  /**
    CLICK, DOUBLE CLICK
  **/
  $('.--click').on('click', function () {
    $(this).addClass('fill');
  });

  $('.--dblclick').on('dblclick', function () {
    $(this).addClass('fill');
  });

  /**
    HOVER
    .hover(handlerIn, handlerOut);
  **/
  $('.--hover').hover(function () {
    $(this).addClass('fill');
  }, function () {
    $(this).removeClass('fill');
  });

  /**
    MOUSE DOWN, MOUSE UP
  **/
  $('.--mousedown').on('mousedown', function() {
    $(this).addClass('fill');
  });

  $('.--mouseup').on('mouseup', function() {
    $(this).removeClass('fill');
  });

  /**
    MOUSE ENTER, MOUSE LEAVE
  **/
  $('.--mouseenter').on('mouseenter', function() {
    $(this).addClass('fill');
  });

  $('.--mouseleave').on('mouseleave', function() {
    $(this).removeClass('fill');
  });

  /**
    FOCUS, BLUR, CHANGE
  **/
  $('.--focus').on('focus', function() {
    $(this).parent().addClass('fill');
  });

  $('.--blur').on('blur', function() {
    $(this).parent().removeClass('fill');
  });

  $('.--change').change(function() {
    $(this).parent().toggleClass('fill');
  });
})();
