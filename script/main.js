// Sélection des elements HTML "page"
var div = document.querySelector('.exo');
var form = document.querySelector('#select');
var button = document.querySelector('.bouton');

// Chargement des données et création des divisions (fetch + appel de fonctions)
fetch('https://api.citybik.es/v2/networks/bicloo').then(function(res) {
	return res.json().then(function(data) {

		for (var i=0 ; i<data.network.stations.length ; i++){

		  var where = document.createElement('option');
			where.value = i;
		  where.innerHTML = data.network.stations[i].extra.address;

			if (data.network.stations[i].free_bikes < data.network.stations[i].extra.slots/2){
				where.classList.add('ou');

			};
			form.appendChild(where);

	  };

		button.addEventListener('click', function(){
			var x = form.selectedIndex;
			var infosupp = document.createElement('p');
			infosupp.classList.add('voila');
			infosupp.innerHTML = '<strong>Informations :</strong><br/>Status : ' + data.network.stations[x].extra.status +'<br/>Vélos disponibles : ' + data.network.stations[x].free_bikes + '/' + data.network.stations[x].extra.slots;
			div.appendChild(infosupp);
		});
		// function select_selectedIndex(){
		//   var oSelect = document.getElementById("select");
		//   console.log(oSelect.selectedIndex);
		// }
// ça c'est ton test qui n'a pas fonctionné, tu sais celui pour se passer de ton affreux bouton...
	});

});

var threshold = 200;
// treshold = seuil / Prononciation = trèsheuld
var header = document.querySelector('#header');
window.addEventListener('scroll', function(event){
	if (window.scrollY > threshold){
		header.classList.add('scrolled');
	}else{
		header.classList.remove('scrolled');
	};
});


//afficher mon burgermenu
var manav = document.querySelector('#what');
var monburger = document.querySelector('.burger');
monburger.addEventListener('click', function(event){
	manav.classList.toggle('visible');
	console.log("connard");
});
