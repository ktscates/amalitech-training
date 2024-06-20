document.addEventListener("DOMContentLoaded", () => {
  //Object Methods and this
  let Person = {
    name: "Peter",
    age: 30,
    greet: function () {
      console.log(
        `Hello, my name is ${this.name} and I'm ${this.age} years old.`
      );
    },
  };

  // Call greet() directly
  Person.greet();

  // Using call()
  Person.greet.call({ name: "Jane", age: 25 });

  // Using apply()
  Person.greet.apply({ name: "John", age: 40 });

  // Using bind()
  let bindGreet = Person.greet.bind({ name: "Charlie", age: 35 });
  bindGreet();

  //Event Handlers and this
  let button = document.getElementById("btn");

  // Event listener using a regular function
  button.addEventListener("click", function handleClick() {
    console.log(this.id);
    console.log(this.textContent);
  });

  // Event listener using an arrow function
  button.addEventListener("click", () => {
    console.log(this);
  });

  //Private Data with Closures and this
  function createCounter() {
    let count = 0;

    return {
      increment: function () {
        count++;
        console.log(`Count: ${count}`);
      },
      getCount: function () {
        return count;
      },
    };
  }

  let counter = createCounter();
  counter.increment();
  counter.increment();
  console.log(counter.getCount());

  //Reusable Component with Closure and this
  function createTimer(duration, id) {
    let remainingTime = duration;
    const el = document.getElementById(id);

    function updateTimer() {
      if (remainingTime >= 0) {
        el.textContent = remainingTime;
        remainingTime--;
      } else {
        clearInterval(interval);
        console.log("Timer finished!");
      }
    }

    const interval = setInterval(updateTimer, 1000);
  }

  createTimer(30, "timerDisplay");
});
