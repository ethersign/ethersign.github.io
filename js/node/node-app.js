var $ = jQuery = require('jquery');
var ethersign = require('ether-sign');


console.log("booting browserify stuff")


$(document).ready(function(){
  $(".btn-sign").on('click',function(){

    var private_key = $('.input-private-key').first().val();
    var challenge = $('.input-challenge').first().val();

    var sig = ethersign.signEllipticCurveChallenge(private_key,challenge)

    $(".input-response").html(sig)

    console.log('clicked btn');
  });
});
