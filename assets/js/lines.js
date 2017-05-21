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
  	document.getElementById("nav1").style.paddingLeft = "0px";
    document.getElementById("nav2").style.paddingLeft = "0px";
  } else {
    document.getElementById("nav1").style.paddingLeft = "25px";
    document.getElementById("nav2").style.paddingLeft = "11px";
   }
