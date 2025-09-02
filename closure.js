function deductLifeCounter(studentName) {
  let life = 3;

  return () => {
    if (life > 0) {
      life--;
      console.log(`${studentName}, you lost a life. Life remaining: ${life}`);
    } else {
      console.log(`${studentName}, your life is over! No life left!`);
    }
  };
}

const rasel = deductLifeCounter("rasel");
const shaid = deductLifeCounter("shaid");
const sheikh = deductLifeCounter("sheikh");
rasel(); // Use  first life
rasel(); // Use  second life
rasel(); // Use  third life
rasel(); // Use  third life
console.log("----");
console.log("----");
shaid(); // use first life
shaid(); // use second life
console.log("----");
console.log("----");
sheikh(); // use first life
shaid(); //use shaid life
shaid(); //use shaid life
