const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      name: "characters",
      message: "What text should go inside of the svg (at most 3 characters)?",
      validate: function (answer) {
        if (answer.length > 3) {
          return "Text must be 3 characters or less";
        }
        return true;
      },
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color (color keyword or hexadecimal):",
      },
      {
        type: "list",
        name: "shape",
        message: "Choose a shape for the logo:",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color (color keyword or hexadecimal):",
      },
  ])
  .then((answers) => {
    console.log(answers);
  });