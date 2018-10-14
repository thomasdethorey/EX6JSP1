function ex6(){
  var first = document.getElementById("firstNumber").value; // récupération de la première variable que l'on a tapé dans la page html
  var second = document.getElementById("secondNumber").value;

  if(isNaN(first) || isNaN(second)){ // OU logique
    alert('Erreur!');
    } else {
      alert("Reste de la division : " + (first % second)); // % renvoi le reste de la division entre les variables first et second
}
}
