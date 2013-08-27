$(document).ready(function(){

$('.link_web_structure').click(function(){
	$('.replace').load('project_intro.html #web_structure',function () {
		console.log('loading success'); //Ddbug用
		$("#web_structure").show('slow');
   });
 });
 
 $('.link_user_permission').click(function(){
	$('.replace').load('project_intro.html #user_permission',function () {
		console.log('loading success'); //Ddbug用
		$("#user_permission").show('slow');
   });
 });
 
 });
 