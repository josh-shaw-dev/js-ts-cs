"use strict";
class Instrument {
    _name;
    get name() {
        return this._name;
    }
    _price;
    get price() {
        return this._price;
    }
    _country;
    get country() {
        return this._country;
    }
    constructor(name, price, country) {
        this._name = name;
        this._price = price;
        this._country = country;
    }
    async GetNoticationMessage() {
        // Exception Handling
        try {
            const msg = `${this._name} costs ${this._price} per unit! You can find them in ${this._country}`;
            return Promise.resolve(msg);
        }
        catch (err) {
            console.log(`Something bad happened ${err}`);
            throw err;
        }
    }
}
class App {
    async run() {
        // Types dont have to be so verbose this is more of an example
        const uber = new Instrument("Uber", 20.58, "US");
        const chorus = new Instrument("Chrous", 10000.58, "NZ");
        // List initialization
        const instruments = [uber, chorus];
        for (const instrument of instruments) {
            // Destructuring
            const { name } = instrument;
            // Async/Await
            const message = await instrument.GetNoticationMessage();
            console.log(`We hold ${name}\n${message}`);
        }
    }
}
const app = new App();
(async () => await app.run())();
