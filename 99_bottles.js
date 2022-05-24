function bottleSong() {
  // Write your code here!
  for (let i=99; i>2; i--) {
    let answer = ""
    answer += i
    console.log(answer + " bottles of beer on the wall, " + answer + " bottles of beer. Take one down and pass it around, " + (answer - 1) + " bottles of beer on the wall.")
  }

  console.log("2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.")
  
};

bottleSong();
