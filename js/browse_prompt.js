$(document).ready(function() {
  // Wrap every letter in a span
  $('.animation-wrapper .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline({loop: false})
    .add({
      targets: '.animation-wrapper .line',
      translateX: [0,$(".ml11 .letters").width()],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
    targets: '.animation-wrapper .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  }).add({
    targets: '.browse_prompt .explore-btn',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  });
});