// JavaScript Document

$(document).ready(function (e){
	document.addEventListener ("deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
			navigator.notification. alert("Deslizo a la izquierda", function(){"Aplicacion 7" ,"Aceptar"
			});
$('#derecha').on("swipeleft",function(){
	navigator.notification. confirm("¿Que quieres hacer?", function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(1);
			case 1:
			navigator.notification.vibrate(1000);
			break;:
		}
	}, "Aplicacion7","Beep, Vibrar,Cancelar");
});
		},false):
	});