var $ = jQuery = require('jquery');
var ethersign = require('ether-sign');
var eth_utils = require('ethereumjs-util');


console.log("booting browserify stuff")


$(document).ready(function(){


  $(".btn-generate").on('click',function(){


    try {
      var new_challenge = ethersign.generateEllipticCurveChallengeDigest( );

      console.log(new_challenge)

      $(".result-challenge").html(new_challenge.toString('hex'));

      }
      catch (e) {
           console.error(e);
           $(".result-challenge").html(e.toString())
      }

  });

  $(".btn-verify").on('click',function(){

    var signature = $('.input-signature').first().val();
    var challenge = $('.input-challenge-verify').first().val();
    console.log(signature)
    console.log(challenge)
    try {

      var pub_key = ethersign.getPublicKeyFromEllipticCurveSignature(challenge,signature);
      var address_at_pub_key = eth_utils.addHexPrefix(eth_utils.pubToAddress(pub_key).toString('hex'))
      $(".result-public-address").html(address_at_pub_key.toString('hex'))

      }
      catch (e) {
           console.error(e);
           $(".result-public-address").html( e.toString())
      }

  });
});
