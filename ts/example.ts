class Instrument
{
    private _name: string;
    public get name(): string {
        return this._name;
    }
    private _price: number;
    public get price(): number {
        return this._price;
    }
    private _country: string;
    public get country(): string {
        return this._country;
    }        

    constructor(
        name: string,
        price: number,
        country: string) {
        this._name = name;
        this._price = price;
        this._country = country;
    }

    public async GetNoticationMessage(): Promise<string>
    {
        // Exception Handling
        try
        {
            const msg = `${this._name} costs ${this._price} per unit! You can find them in ${this._country}`;
            return Promise.resolve(msg);
        }
        catch (err)
        {
            console.log(`Something bad happened ${err}`);
            throw err;
        }
    }
}

class App {
    public async run(): Promise<void>
    {
        // Types dont have to be so verbose this is more of an example
        const uber: Instrument = new Instrument("Uber", 20.58, "US");
        const chorus: Instrument = new Instrument("Chrous", 10000.58, "NZ");
        
        // List initialization
        const instruments: Instrument[] = [uber, chorus];
        for (const instrument of instruments) {
            // Destructuring
            const { name } = instrument;

            // Async/Await
            const message: string = await instrument.GetNoticationMessage();

            console.log(`We hold ${name}\n${message}`);
        }
    }
}

const app = new App();
(async () => await app.run())();