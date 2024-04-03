// Function 
const make_shirt = (size: string, message: string): void => {
    console.log(`Size: ${size}, Message: '${message}'`);
}


// Call the function with size & message variables.
let size: string = 'medium';
let message: string = 'TypeSrript Insights';
make_shirt(size, message);


// Directly call the function 
make_shirt('Medium', 'TypeScript Insights with Kashif')