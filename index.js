function scuberGreetingForFeet(someValue){
  let result;
  if (someValue <= 400) {
    result = "This one is on me!";
  }
  else if (someValue > 400 && someValue <= 2000 ) {
    result = 'That will be twenty bucks.';
  }
  else if (someValue > 2000 && someValue <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  }
  else if (someValue > 2500 ) {
    result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity(city){
  let result;
  if (city === "NYC") {
  result = "Ok, sounds good.";
  }
  else {
    result = "No go.";
  }
  return result;
}

function switchOnCharmFromTip(input){
  let result;
  switch(input) {
    case 'generous':
      result = "Thank you so much."
      break;
    case 'not as generous':
      result = "Thank you."
      break;
    default:
      result = "Bye."
      break;
  }
  return result;
}