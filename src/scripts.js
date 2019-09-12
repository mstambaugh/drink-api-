export function drinkByFirstLetter(letter) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=` + letter;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));

      }
    }
    request.open("GET", url, true);
    request.send();


  });
}

export function drinkFromId(id) {
  return new Promise(function(resolve, request){
    let request = new XMLHttpRequest();
    let url = ``;

    request.onload = function() {
      if (this.status === 200){
        resolve(request.reponse);
      } else {
        reject(Error(request.statusText)):
      }
    }
    request.open("GET", url, true);
    request.send();
  });

}

export function makeButtons() {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let output = "";
  alphabet.forEach(function(letter) {
    output += '<button id=' + letter + '>' + letter + '</button>';
  });
  return output;
}


export function drinkLinks(dranks) {
let output = "";
for(let i = 0; i < dranks.drinks.length; i++){
  output += "<li id =" + dranks.drinks[i].idDrink + ">" + dranks.drinks[i].strDrink + "</li>";
}
 let fullOut = "<ul>" + output + "</ul>";
 return fullOut;
}
