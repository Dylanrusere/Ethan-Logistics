
// Counter Section
let targetNumber1 = 99;
let targetNumber2 = 149;
let targetNumber3 = 4;
let counter1 = 40;
let counter2 = 100;
let counter3 = 0;
let counterElement1 = document.getElementById("counter_clients");
let counterElement2 = document.getElementById("counter_deliveries");
let counterElement3 = document.getElementById("counter_countries_covered");

function incrementCounter1() {
    counter1++;
    counterElement1.textContent = counter1;

    if (counter1 <= targetNumber1) {
      setTimeout(incrementCounter1, 50);
    }
  }

  function incrementCounter2() {
    counter2++;
    counterElement2.textContent = counter2;

    if (counter2 <= targetNumber2) {
      setTimeout(incrementCounter2, 50);
    }
  }

  function incrementCounter3() {
    counter3++;
    counterElement3.textContent = counter3;

    if (counter3 <= targetNumber3) {
      setTimeout(incrementCounter3, 500);
    }
  }

incrementCounter1();
incrementCounter2();
incrementCounter3();