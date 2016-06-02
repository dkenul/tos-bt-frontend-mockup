(function() {
  $('.bosses > li').click(function() {
    $($(this).children()[1]).toggle();
  })

  $('#search').on('input', function() {
    Array.prototype.slice.call($('.bosses > li')).forEach(function(el) {
      var seg = $(this).val().toLowerCase();
      var target = $($(el).children()[0]).children()[1].textContent.toLowerCase();
      target.includes(seg) ? $(el).show() : $(el).hide()
    }.bind(this))
  })
})()
