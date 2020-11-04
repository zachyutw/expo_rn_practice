const faker = require('faker');
const _ = require('lodash');
const fs = require('fs');
const FPG = require('fake-product-generator');
const { v4: uuidv4 } = require('uuid');
const rs = FPG(5); // creates a million products!

const VENDERS_NUMBER = 3;
const venders = [];

class MockVender {
    constructor(props) {
        this.id = uuidv4();
        this.name = faker.company.companyName();
        this.description = faker.company.catchPhraseDescriptor();
    }
}

class MockSupplier {
    constructor(props) {
        this.id = uuidv4();
        this.name = faker.company.companyName();
    }
}

class MockProductDetail {
    constructor(props) {}
}

class MockProduct {
    constructor(props) {
        this.part_number = uuidv4();
        this.name = faker.name.firstName();
        this.description = faker.company.catchPhraseDescriptor();
        this.supplier = props.supplier;
        this.vender = props.vender.name;
        this.vendor_part_number = props.vender.part_number;
        this.vendor_description = props.vender.description;
        this.price = faker.commerce.price(5, 10000);
        this.category = props.category;
    }
}

// console.log(venders);

const ws = fs.createWriteStream('./assets/data/products.json');
rs.pipe(ws);
