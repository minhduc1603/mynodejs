const ConverterCSVtoJSON = require("./src/ConverterCSVtoJSON.js");
const converter = new ConverterCSVtoJSON();
converter.convertFromFile("./customer-data.csv");
converter.writeToFile("customer-data.json");