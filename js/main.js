
$(document).ready(function() {
  if (!window.matchMedia("(max-width: 765px)").matches){
    anime.timeline({loop: false}).add({
      targets: '.nav-list-holder',
      //scaleY: [0,1],
      translateY: [-1 *$(".nav-list-holder").height(), 0],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 1500
    });
  }

  anime.timeline({loop: false}).add({
    targets: '.home-body .animated-title.line1',
    translateX: [$(".home-body .animated-title.line1").width(), 0],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1500
  });
  anime.timeline({loop: false}).add({
    targets: '.home-body .animated-title.line2',
    translateX: [-1 * $(".home-body .animated-title.line1").width(), 0],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1500
  });

  $('.nav-slide-btn').on('click', function(){
    $('body').toggleClass('expanded');
    // if ($('.main-menu').hasClass('expanded')){
    //   $('.expandable').css('margin-top', '100px');
    // } else {
    //   $('.expandable').css('margin-top', '0px');
    // }

  });

  $('.browse-confirm-btn').on('click', function () {
    $('.browse_prompt').fadeOut('fast', function () {
      $('.page-body').fadeIn('fast');
    });
  });

  $('#leads_form').on('submit', function (e){
    e.preventDefault();
    e.stopPropagation();

    var leadName = $("#lead_name").val();
    var leadEmail = $("#lead_email").val();
    var leadSubject = $("#lead_subject").val();
    var leadMessage = $("#lead_message").val();

    if (leadName.length && leadEmail.length && leadSubject.length && leadMessage.length) {

      var leadTimestamp = Math.floor(Date.now() / 1000);

      firebase.database().ref('leads').once('value', function(snapshot) {
         var totalLeads = snapshot.numChildren();
          totalLeads++;
          firebase.database().ref('leads').child(totalLeads).set({
            name: leadName,
            email: leadEmail,
            subject: leadSubject,
            message: leadMessage,
            timestamp: leadTimestamp
      });
      // $('.contact-form').hide();
      // $('.message-sent-success').show();
      //
        $('.contact-form').fadeOut('fast', function(){
          $('.thankyou').fadeIn('fast');
        });
       }, function(error) {
           console.log(error);
      });

    } else {
        alert('Please fill all the fields.');
    }

    return false;
  });

});