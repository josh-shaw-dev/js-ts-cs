App app = new();
await app.Run();

class Instrument(string name, decimal price, string country)
{
    public string Name { get; private set; } = name;

    public decimal Price { get; private set; } = price;

    public string Country { get; private set; } = country;

    // Classes support deconstruction though you need to set the ordering
    // Can be overloaded
    public void Deconstruct(out string name, out decimal price, out string country)
    {
        name = Name;
        price = Price;
        country = Country;
    }

    public async Task<string> GetNotificationMessage()
    {
        // Exception Handling
        try
        {
            string msg = $"{Name} costs {Price} per unit! You can find them in {Country}";
            return await Task.FromResult(msg);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Something bad happened ${ex}");
            throw;
        }
    }
}

class App {
    public async Task Run() 
    {
        Instrument uber = new("Uber", 20.58m, "US");
        Instrument chorus = new("Chrous", 10000.58m, "NZ");
        
        // List initialization
        List<Instrument> instruments = [uber, chorus];
        foreach (Instrument instrument in instruments) {
            // Destructuring
            var (name, _, _) = instrument;

            // Async/Await
            string message = await instrument.GetNotificationMessage();

            Console.WriteLine($"We hold {name}\n{message}");
        }
    }
}
