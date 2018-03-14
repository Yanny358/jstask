$(document).ready(function(){
  var euro;
  var usdRate;
  var gbpRate;
  
  const key = "4a201bd0902dcf3e3991e35be6698930"
  $.ajax({
    url: 'http://data.fixer.io/api/latest?access_key=' + key,
    dataType: 'jsonp',
    success: function(json) {
      usdRate = json.rates.USD;
      gbpRate = json.rates.GBP;
      
    }

  });
      

  $('input').on('keyup',function(){
    var user = $('#user').val();
    var result = $('result').val();
    user= parseInt(user);
  $('#result').val(user);
  
  function convert() {
    if (user == result){
      var result = $('#user');
    }
    else if (user == "EUR" && result =="USD")  {
      var result = $('#user' * usdRate);
    }
    else if(user =="USD" && result =="EUR") {
      var result = $('#user' / usdRate);
    }
    else if(user =="EUR" && result =="GBP") {
      var result = $('#user' * gbpRate);
    }
    else if(user == "GBP" && result =="EUR") {
      var result = $('#user' / gbpRate);
    }
    $("#user").change(function(){
      euro = $("#user").val();
      convert();
    });
    $("#from").change(function(){
        convert();
    });
    $("#to").change(function(){
        convert();
    });
  
  };
  });
  
  });