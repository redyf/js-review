// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newUsername = [];
const arrayForEach = array.forEach((user) => {
  newUsername.push(`${user.username}!`);
});

//Create an array using map that has all the usernames with a "? to each of the usernames
const arrayMap = array.map((user) => {
  return user.username + "?";
});

//Filter the array to only include users who are on team: red
const arrayFilter = array.filter((user) => {
  return user.team === "red";
});

//Find out the total score of all users using reduce
const arrayReduce = array.reduce((accumulator, user) => {
  return accumulator + user.score;
}, 0);
// Total score was 71

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
});

const makeMapPure = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});
console.log(answer);
