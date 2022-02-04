

// var bitcoin = require('bitcoinjs-lib') // v4.x.x
const bitcoinMessage = require('bitcoinjs-message')

var message;
var address;
var signature;
var result;

$("form#signature_verify").submit(function() {
	message = document.getElementById("message").value;
	address = document.getElementById("address").value;
	signature = document.getElementById("signature").value;

	// DEBUG
	alert( "Vérification de Message = "+message+" + Adresse = "+address+" + Signature = "+signature );

	result = bitcoinMessage.verify(message, address, signature);

	// DEBUG
	alert( result );
});
