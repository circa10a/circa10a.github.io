var elem = document.querySelector('.lamp-js-switch');
var init = new Switchery(elem, { color: '#00E676', size: 'large' });
var lampchangeCheckbox = document.querySelector('.lamp-js-switch');
lampchangeCheckbox.onchange = function() {
  if (lampchangeCheckbox.checked){
    console.log("php would go here");
} else {
  console.log("php would go here");
  }
};
