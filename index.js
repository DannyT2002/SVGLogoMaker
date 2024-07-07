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
  ]);