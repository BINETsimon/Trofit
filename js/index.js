setTimeout(loading, 2500);
function loading() {
    document.getElementById('loader').style.opacity = '0';
    document.getElementById('TchillySays').style.animation =' bubblepop 1s ease-out';
    document.getElementById('leftBuble').style.animation ='leftbubblepop 1s ease-out';
    slideMenu('MenuAcceuil');
    setTimeout(pop, 500);
}
function pop() {
  document.getElementById('loader').style.display ='none';
}

var BurgerCheck = true;
var previousId = 'MenuExercices';

function burger() {
    BurgerTile = [document.getElementById('B1'), document.getElementById('B2'), document.getElementById('B3')];
    BurgerBox = document.getElementById('burger');
    Menu = document.getElementById('Menu');
    menuLogo = document.getElementById('menuLogo');

    if (BurgerCheck == true) {
      for (index of BurgerTile) {
        index.style.backgroundColor = '#29201B';
      }
      BurgerTile[0].style.transform = 'rotate(45deg) translate(0px,15px)';
      BurgerTile[1].style.opacity = '0';
      BurgerTile[2].style.transform = 'rotate(-45deg) translate(0px,-15px)';
      BurgerBox.style.transform = 'rotate(90deg)';
      BurgerBox.style.position = "fixed";
      Menu.style.right = '0';
      menuLogo.style.opacity = '1';
      menuLogo.style.transition = 'opacity 0.3s ease-in';
      BurgerCheck = false;
    } else {
      for (index of BurgerTile) {
        index.style.backgroundColor = '#33FF68';
      }
      BurgerTile[0].style.transform = 'rotate(0deg) translate(0,0)';
      BurgerTile[1].style.opacity = '1';
      BurgerTile[2].style.transform = 'rotate(0deg) translate(0,0)';
      BurgerBox.style.transform = 'rotate(0deg)';
      BurgerBox.style.position = "static";
      Menu.style.right = '-100vw';
      menuLogo.style.opacity = '0';
      menuLogo.style.transition = 'opacity 0.3s ease-out';
      BurgerCheck = true;
    }
}

function slideMenu(id) {
  if (previousId != id) {
    var firstID = document.getElementById(id).style;
    var secondID = document.getElementById(previousId).style;
    var Title = document.getElementById('Title');
    var firstContainer = document.getElementById('container_'+id).style;
    var secondContainer = document.getElementById('container_'+previousId).style;

    if (id == 'MenuAcceuil'){Title.innerHTML = 'Trofit'; }
    if (id == 'MenuProfil'){Title.innerHTML = 'Profil'}
    if (id == 'MenuPlanning'){Title.innerHTML = 'Planning'}
    if (id == 'MenuExercices'){Title.innerHTML = 'Exercices'}
    if (id == 'MenuSucces'){Title.innerHTML = 'Succès'}
    
    firstID.fontWeight = '800';
    firstID.transform = 'scale(1.5)';
    secondID.fontWeight = 'normal';
    secondID.transform = 'scale(1)';
    firstContainer.display = 'flex';
    secondContainer.display = 'none';
    previousId = id;
  }
}

/* Profil */
var stateProfil = false;
function modifUtil() {
  var metre;
  if (!stateProfil){
    document.getElementById('infoUtil').style.display = 'none';
    document.getElementById('infoUtilmodif').style.display = 'flex';
    document.getElementById('modifierBtn').style.width = '70%';
    stateProfil = true;
  }else{
    var taille = document.getElementById('taille').value;
    var poids = document.getElementById('poids').value;
    if (taille != ""){
      document.getElementById('TailleValue').innerHTML = 'Taille : '+taille;
    }
    if (poids != ""){
      document.getElementById('PoidsValue').innerHTML = 'Poids : '+poids+'kg';
    }
    stateProfil = false;
    document.getElementById('infoUtil').style.display = 'flex';
    document.getElementById('infoUtilmodif').style.display = 'none';
    document.getElementById('modifierBtn').style.width = '20%';
  }
  
}

var preference = 1;
function changePref(pref) {
  var classExo = document.getElementsByClassName('preferenceExo');
  if (preference != pref) {
    classExo[pref].style.border = 'none';
    classExo[preference].style.border = '2px white solid';
    classExo[pref].style.backgroundColor = '#33FF68';
    classExo[preference].style.backgroundColor = 'transparent';
    classExo[pref].style.color = '#29201B';
    classExo[preference].style.color = 'white';
    preference = pref;
  }
}

changePref(0);

/* Planning */
var nbExoRestant = 3;
var plus = true;

function addNewExo(){
  if (plus) {
    var circle = document.getElementsByClassName('Backcircleplan');
    document.getElementById('cross').style.display= 'none';
    document.getElementById('plusCount').style.display= 'flex';
    document.getElementById('backplanning').style.display = 'block';
    circle[0].style.animation = 'exoPiece 1s ease forwards';
    circle[1].style.transform = 'translate(-200px, -300px)';
    circle[2].style.transform = 'translate(200px, -300px)';
    circle[1].style.animation = 'exoPiece 1s ease forwards';
    circle[2].style.animation = 'exoPiece 1s ease forwards';
    plus = false;
    setTimeout(popBack, 1100);
  }
}

function popBack(){
  document.getElementById('backplanning').style.display = 'none';
}

var days = [false, false, false, false, false, false, false];
function addDay(selectedDay){
  if (!plus){
    var circle = document.getElementsByClassName('circleplan');
    var dayinnb = 0;
    switch (selectedDay){     
      case 'dimanche':
        dayinnb++;
      case 'samedi':
        dayinnb++;
      case 'vendredi':
        dayinnb++;
      case 'jeudi':
        dayinnb++;
      case 'mercredi':
        dayinnb++;
      case 'mardi':
        dayinnb++;
      case 'lundi': 
        break;
    }
    
    if((days[dayinnb] == false) && (nbExoRestant > 0)){
      console.log(1);
      circle[dayinnb].style.display = "flex";
      nbExoRestant--;
      days[dayinnb] = true;
    } else if (days[dayinnb] == true){
      circle[dayinnb].style.display = "none";
      nbExoRestant++;
      days[dayinnb] = false;
    }
    document.getElementById('nombreExo').innerHTML = " x "+nbExoRestant;
  }else{
    /* animation ? */
  }
}

/* Succès */
var succesOpen = [false, false, false, false, false, false];
function openSucces(nb) {
  var succesInfo = document.getElementsByClassName('succes-info');
  if (succesOpen[nb] == false){
    succesInfo[nb].style.height = "auto";
    succesOpen[nb] = true;
  }else{
    succesInfo[nb].style.height = "0px";
    succesOpen[nb] = false;
  }
}