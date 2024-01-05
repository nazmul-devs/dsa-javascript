const string = "This is my string";

const reverse = (str) => {
  if (!str || typeof str !== "string") {
    console.error("Invalid input");
  }

  const arrStr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    arrStr.push(str[i]);
  }

  console.log(arrStr.join(""));
};

const reverse2 = (str) => {
  console.log(str.split("").reverse().join(""));
};

// console.log([...string]);

const reverse3 = (str) => console.log([...str].reverse().join(""));

reverse(string);
reverse2(string);
reverse3(string);
