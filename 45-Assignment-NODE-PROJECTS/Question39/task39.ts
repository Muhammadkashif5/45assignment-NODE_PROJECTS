// Function 
const city_country = (city: string, country: string): string => {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs 
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Cairo', 'Egypt'));
console.log(city_country('Bejing', 'China'));