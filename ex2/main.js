var paragraphe = document.getElementById('monParagraphe');
var colorPicker = document.getElementById('colorPicker');
var fontSize = document.getElementById('fontSize');
var fontFamily = document.getElementById('fontFamily');

colorPicker.addEventListener('change', function() {
  paragraphe.style.color = colorPicker.value;
});

fontSize.addEventListener('change', function() {
  paragraphe.style.fontSize = fontSize.value + 'px';
});

fontFamily.addEventListener('change', function() {
  paragraphe.style.fontFamily = fontFamily.value;
});