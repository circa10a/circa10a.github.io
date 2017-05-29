//Docs at http://simpleweatherjs.com
// Docs at http://simpleweatherjs.com

//Variable to determine if device is mobile
var isMobile = {
   Android: function() {
       return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function() {
       return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function() {
       return navigator.userAgent.match(/iPhone|iPod/i);
   },
   Opera: function() {
       return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function() {
       return navigator.userAgent.match(/IEMobile/i);
   },
   any: function() {
       return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
   }
};

if(isMobile.any()) {
  $("#search").hide();
  $("#button").hide();
  $("h2").css("font-size","100px");
} else {
  console.log("not a mobile device");
 }

//Show full screen overlay when getting location
navigator.geolocation.getCurrentPosition(function(position) {
  $.LoadingOverlay("show");
  loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
});

$(document).ready(function() {
  loadWeather(); //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      //Add breaks for mobile view
      if(isMobile.any()) {
      html = '<h2 id="temp">'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>'+'<br/>';
      html += '<li class="currently">'+weather.currently+'</li>'+'<br/>';;
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
      
      $("#weather").html(html);
      $("#search").attr("placeholder", weather.city + ", " +weather.region);

      $("#temp").css("font-size","200px");
      $('li').css("font-size", "75px");
      $('li').css("margin-bottom", "50px");
      $('li').css("border-style", "solid");
      $('li').css("background", "black");
      $('li').css("color", "white");

    } else {
      html = '<h2 id="temp">'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
      $("#weather").html(html);
      $("#search").attr("placeholder", weather.city + ", " +weather.region);
    }
      //remove full screen overlay when weather has loaded
      $.LoadingOverlay("hide");
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}


$("#button").click(function() {
  $.simpleWeather({
    location: $("#search").val(),
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
