$(document).ready(function(){

  $(".link_expected").click(function(){
	$(".content_toggle").load("expected_features.html");
	$(".fadeout").fadeOut('slow');
  });
  
  $(".link_idea").click(function(){
	$(".content_toggle").load("idea_pool.html");
	$(".fadeout").fadeOut('slow');
  });
  
  $(".link_team").click(function(){
	$(".content_toggle").load("team_member.html");
	$(".fadeout").fadeOut('slow');
  });
  
  	$(".link_contact").click(function(){
	$(".content_toggle").load("contact_us.html");
	$(".fadeout").fadeOut('slow');
  });
  //按下導覽列，網站內容切換
});

