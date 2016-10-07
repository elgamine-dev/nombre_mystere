$(document).ready(main);

// Fonction principale
function main(){
	console.log('hello')
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.
	var tentative;
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.
	var mystere; 
	// = (parseInt(Math.random()* 50),10);

	function demarrerPartie (){
		tentative = 3;
		$('#tentative').text(tentative);
		
		mystere = Math.floor(Math.random() * 50);
		console.log(mystere);
	}

		demarrerPartie()
		
		$('button').click(function() {
			clickValider();

		});

	function clickValider() {

		var input = parseInt($('input').val(),10); 

		if (partieGagnee()) {
			alert('Gagne!');
			demarrerPartie();

		} else if (partiePerdue()) {
			alert('Perdu');
			demarrerPartie();

		} else if(input > mystere){
			alert('Perdu , votre nombre est trop grand!');
			tentative --;
			$('#tentative').text(tentative);

		} else {
			alert('Perdu, votre nombre est trop petit!');
			tentative --;
			$('#tentative').text(tentative);
		}


		function partieGagnee() {
			return input === mystere;
		}


		function partiePerdue() {
			return tentative === 0;

		}

		// else if (mystere === 0) {
		}
		// 	alert('Perdu');
	}	




	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'

		// Récupérer le contenu de mon input

		// Comparer ce contenu au nombre mystère.
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
				*/

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit

			// Dans les cas où c'est perdu, diminuer le nombre de tentatives

			// Actualiser la zone html affichant le nombre de tentatives

			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 		*/

	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
		*/








































































































































