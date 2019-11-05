// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.
// https://bitbucket.org/booleancareers/ex-hamburger-menu-base
// La soluzione Base, concerne il fatto di non toccare html e css del repo di partenza
// ma fare quello che dobbiamo seguendo quindi la logica implementata da chi ha fatto quell’intefaccia.



	$(document).ready(function(){

    $(".header-right > a").click(function(){
      $(".hamburger-menu").show();
    })

    $(".close").click(function(){
      $(".hamburger-menu").hide();
    })

	});
