$(document).ready(main);


function main(){

	
	function clickValider() {

		var recup = $('input').val();



		if (recup === 10) {
			alert("gagné!");
		}

		else {

			alert("perdu!");
		}


	}

	$('button').click(function() {
		clickValider();

	});

}
