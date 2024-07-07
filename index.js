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

    let shape;
    switch (answers.shape) {
      case "Circle":
        shape = new Circle();
        break;
      case "Triangle":
        shape = new Triangle();
        break;
      case "Square":
        shape = new Square();
        break;
    }

    shape.setColor(answers.shapeColor);

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${
    answers.textColor
  }" font-size="40">${answers.characters}</text>
</svg>`;

    fs.writeFileSync("./examples/logo.svg", svgContent);
    console.log("Generated logo.svg");
  });
