// Modify the function 
function makeshirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    return console.log(`Size: ${size}, Message: '${message}'`);
}

// Large shirt with default message 
makeshirt();

// Medium shirt with default message
makeshirt('Medium');

// Custom size with a different message 
makeshirt('Small', 'Hello, TypeScript!');