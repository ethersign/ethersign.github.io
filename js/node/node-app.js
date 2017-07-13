var $ = jQuery = require('jquery');
var ethersign = require('ether-sign');
var eth_utils = require('ethereumjs-util');

var sigUtil = require('eth-sig-util')
var Eth = require('ethjs')

var Web3 = require('web3')

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


  $(".web3-sign-button-container").hide();


  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      window.web3 = new Web3(web3.currentProvider);
    } else {
      console.log('No web3? You should consider trying MetaMask!')
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }


  if(typeof web3 != 'undefined' )
  {


      $(".web3-sign-button-container").show();
      $(".no-web3-found-container").hide();

    $(".eth-sign-button").on('click', function(event) {
      event.preventDefault();
      console.log('trying to sign')

        var msg = $('.input-challenge').first().val();

        var from = web3.eth.accounts[0]
          web3.eth.sign(from, msg, function (err, result) {
            if (err) return console.error(err)
            console.log('SIGNED:' + result)
          })

    });

  }



});
