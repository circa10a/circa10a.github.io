var elem = document.querySelector('.mirror-js-switch');
var init = new Switchery(elem, { color: '#00E676', size: 'large' });
var mirrorchangeCheckbox = document.querySelector('.mirror-js-switch');
mirrorchangeCheckbox.onchange = function() {
  if (mirrorchangeCheckbox.checked){
    console.log("php would go here");
} else {
    console.log("php would go here");
  }
};
