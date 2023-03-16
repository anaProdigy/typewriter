const sentence = "hello there from lighthouse labs";

const typewriter = () => {
  let delay = 0;

  for (const char of sentence) {
    // avoid automatically adding an extra "newline character" at the end each time

    setTimeout(() => {
      // print the char here
      process.stdout.write(char);


    }, delay); // <= 1s delay to make it noticeable. Can dial it down later.

    delay += 100;


  }
  setTimeout(() => {
    console.log("\n");
  }, delay);

};
typewriter(sentence);
