const fs = require("fs");

const name = "K-HotDog";
const description = "K-HotDog, made by DogDogHot";
const imageURL =
  "ipfs://QmQ8FEi3brWZtRWH16Lxsc7LmYrLcUBoUKywxYDL66Q5MX/meat.jpeg";
const total = 5;

try {
  for (let i = 1; i <= total; i++) {
    let json = {
      name: name + "#" + i,
      description,
      imageURL,
      attributes: [
        {
          level: "Unknown",
          value: "Unknown",
        },
      ],
    };

    fs.writeFile(`json/${i}.json`, JSON.stringify(json), "utf8", (e) => e);
  }
  console.log("complete!");
} catch (error) {
  console.log(error);
}
