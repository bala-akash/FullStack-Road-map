function logger() {
  console.log("Hi My name is Akash");
}

//invoke a function
logger();

function cutFruits(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruits(apples);
  const orangePieces = cutFruits(oranges);
  const juice = `juice with ${applePieces} piece of apples & ${orangePieces} piece of oranges`;
  return juice;
}
const juice = fruitProcessor(5, 0);
const appleOrangeJuice = fruitProcessor(5, 4);

console.log(juice);
console.log(appleOrangeJuice);

function updateTime() {
  const today = new Date();
  const date = today.getDate();
  const day = today.getDay();
  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = today.getMonth();
  const year = today.getFullYear();
  let hour = today.getHours();
  const minute = today.getMinutes();
  const seconds = today.getSeconds();

  const currentDay = "Today is : " + dayList[day] + ".";
  console.log(currentDay);

  const prepand = hour >= 12 ? "PM" : "AM";
  hour = hour >= 12 ? hour - 12 : hour;
  const currentTime = `${hour} ${prepand} : ${minute} : ${seconds}`;
  console.log(currentTime);
  document.getElementById("time").textContent = currentTime;
}
setInterval(updateTime, 1000);

const today = new Date();
const mm =
  today.getMonth() + 1 < 10
    ? "0" + (today.getMonth() + 1)
    : today.getMonth() + 1;
const dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
const yyyy = today.getFullYear();

const firstModel = mm + "-" + dd + "-" + yyyy;
const secondModel = mm + "/" + dd + "/" + yyyy;
const thirdModel = dd + "-" + mm + "-" + yyyy;
const fourthModel = dd + "/" + mm + "/" + yyyy;

document.getElementById("date1").textContent = firstModel;
document.querySelector(".date2").textContent = secondModel;
document.querySelector(".date3").textContent = thirdModel;
document.querySelector(".date4").textContent = fourthModel;
