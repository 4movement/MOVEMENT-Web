$(document).ready(function(){
  
  $(".link_project").click(function(){
	$(".replace").load("project_intro.html");
	$(".fadeout").fadeOut('slow');
  }); 
  
  $(".link_to_do").click(function(){
	$(".replace").load("to_do_list.html");
	$(".fadeout").fadeOut('slow');
  });
  
  $(".link_idea").click(function(){
	$(".replace").load("idea_pool.html");
	$(".fadeout").fadeOut('slow');
  });
  
  $(".link_team").click(function(){
	$(".replace").load("team_member.html");
	$(".fadeout").fadeOut('slow');
  });
  
  	$(".link_contact").click(function(){
	$(".replace").load("contact_us.html");
	$(".fadeout").fadeOut('slow');
  });
  //Ajax技術
});

