function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance < 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    return "No can do.";
  }
}

// condition ? "" : ""
function ternaryCheckCity(cityName) {
  return cityName === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(greeting) {
  switch (greeting) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    case "thanks for everything":
      return "Bye.";
    default:
      break;
  }
}
