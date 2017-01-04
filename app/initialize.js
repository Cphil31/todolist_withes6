document.addEventListener('DOMContentLoaded', () => {
  //do your setup here


var $ = require('jquery');

$('#ajout').on('click', ()=>{
	var recup = $('#recup').val();
	var affiche = $('#affiche').append(recup+ "</br>" );

	event.preventDefault(affiche);
});
})
