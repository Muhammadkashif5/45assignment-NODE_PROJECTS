// Function 
function describe_city(city: string, country: string = 'Unkown Country'): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities.
describe_city('Karachi', 'Pakistan');
describe_city('Istanbul');
describe_city('Jakarta', 'Indonesia');