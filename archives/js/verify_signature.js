

// var bitcoin = require('bitcoinjs-lib'); // v4.x.x
// var bitcoinMessage = require('bitcoinjs-message');

$("form#signature_verify").submit(function() {
	var message = document.getElementById("message").value;
	const address = document.getElementById("address").value;
	const signature = document.getElementById("signature").value;

	// DEBUG
	alert( "Vérification de Message = "+message+" + Adresse = "+address+" + Signature = "+signature );

	// message = bs58.encode(Buffer.from(message, 'hex'));


	try {
	  const result = btcMsgVerifier.verifyMessage(address,signature,message);

	  if (result) {
	    alert("La vérification confirme que la signature est valide. ✅ ");
	  }
	  else {
		alert("La vérification indique que la signature N'est Pas valide.");
	  }
	}
	catch (err) {
	  alert(err);
	}
});
