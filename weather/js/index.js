//Docs at http://simpleweatherjs.com
// Docs at http://simpleweatherjs.com
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
} else {
  console.log("not a mobile device");
 }

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
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

      $("#weather").html(html);
      $("#search").attr("placeholder", weather.city + ", " +weather.region);

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
