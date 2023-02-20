var variable1 = 8;
var variable2 = 7;
var variable3 = 0;
var variable4 = "0";
var variable5 = "";
var variable6 = true;

if (variable1 > variable2) {
  console.log("if");
} else {
  console.log("else");
}

if (variable1 != variable2) {
  console.log("if");
} else {
  console.log("else");
}

if (variable1) {
  console.log("if");
} else {
  console.log("else");
}

if (variable1 === "8") {
  console.log("if");
} else {
  console.log("else");
}

if (variable1 == "8") {
  console.log("if");
} else {
  console.log("else");
}

if (!variable3) {
  console.log("if");
} else {
  console.log("else");
}

if (variable3 || variable5) {
  console.log("if");
} else {
  console.log("else");
}

if (variable1 && variable6) {
  console.log("if");
} else {
  console.log("else");
}

if (variable3 == variable4 && variable3 === variable4) {
  console.log("if");
} else {
  console.log("else");
}

if (
  (variable1 < variable2 && variable3 == variable4) ||
  (variable1 > variable2 && variable3 == variable4)
) {
  console.log("if");
} else {
  console.log("else");
}
