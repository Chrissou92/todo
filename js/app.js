// créer un bouton (unicode u00D7 pour la croix ) pour fermer une tache
var myNodelist = document.getElementsByTagName('LI');
var task;
for (task = 0; task < myNodelist.length; task++) {
  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[task].appendChild(span);
}

// au clic masque l'element fermé
var close = document.getElementsByClassName('close');

for (task = 0; task < close.length; task++) {
  close[task].onclick = function() {
    var div = this.parentElement;
    div.style.display = 'none';
  };
}

// ajoute check sur une tache
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// ajoute un nouvel élément en cliquant sur add, envoie un message d'erreur si rien dans le champ
function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('myInput').value;
  var label = document.createTextNode(inputValue);
  li.appendChild(label);
  if (inputValue === '') {
    alert('Vous devez écrire une tâche !!');
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  document.getElementById('myInput').value = '';

  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (task = 0; task < close.length; task++) {
    close[task].onclick = function() {
      var div = this.parentElement;
      div.style.display = 'none';
    };
  }
}
