import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { makeButtons, drinkByFirstLetter, drinkLinks } from './scripts.js';


$(document).ready(function(){


  $('.letters').html(makeButtons());


  $('.letters').click(function(event){
    event.preventDefault();
    debugger;
    drinkByFirstLetter(event.target.id).then(function(response){
      let body = JSON.parse(response);
      $(".dranks").html(drinkLinks(body));
    });
  });

});
