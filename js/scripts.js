function setHeightHomeContainer() {
  var homeImgH = $('.home-top-img').innerHeight();
  var homeHeaderH = $('.home-top-img header').innerHeight();
  var contentH = homeImgH - homeHeaderH;
  $('.home-top-img-content').css('height', contentH);
  $('.black-box, .cta').show();
}
setHeightHomeContainer();

function setHeightSubpageContainer() {
  var subpageImgH = $('.subpage-top-img').innerHeight();
  var subpageHeaderH = $('.subpage-top-img header').innerHeight();
  var subcontentH = subpageImgH - subpageHeaderH;
  $('.subpage-top-img-content').css('height', subcontentH);
  $('.black-box, .cta').show();
}
setHeightSubpageContainer();


function MeetTeamMembers() {
  var teamMemberPicH = $('.team-members img').innerHeight();
  $('.team-members').css('height', teamMemberPicH);
}
MeetTeamMembers();

$('.team-members').hover(
	function() {
    $(this).find('.team-member-container').fadeIn();
  },
  function(){
    $(this).find('.team-member-container').fadeOut();
  }
);

//Hide Shows features page
$(function() {
  $("#HP-btn").click(function() {
    $(this).addClass("active");
    $('.load-harness-content1').show().addClass('animated bounceInRight');
    $('.load-harness-content2, .load-harness-content3').hide()
    $('#DE-btn ,#ST-btn').removeClass("active");
  });

  $("#DE-btn").click(function() { 
    $(this).addClass("active");  
    $('.load-harness-content2').show().addClass('animated bounceInRight');
    $('.load-harness-content1, .load-harness-content3').hide()
    $('#HP-btn ,#ST-btn').removeClass("active");   
  });


  $("#ST-btn").click(function() { 
    $(this).addClass("active");  
    $('.load-harness-content3').show().addClass('animated bounceInRight');
    $('.load-harness-content1, .load-harness-content2').hide()
    $('#HP-btn ,#DE-btn').removeClass("active");   
  });
});



//RESIZE WINDOW

$( window ).resize(function() {
  setHeightHomeContainer();
  setHeightSubpageContainer();
  MeetTeamMembers();
});
