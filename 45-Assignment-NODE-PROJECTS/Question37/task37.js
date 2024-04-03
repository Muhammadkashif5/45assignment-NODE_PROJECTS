// Modify the function 
function makeshirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    return console.log("Size: ".concat(size, ", Message: '").concat(message, "'"));
}
// Large shirt with default message 
makeshirt();
// Medium shirt with default message
makeshirt('Medium');
// Custom size with a different message 
makeshirt('Small', 'Hello, TypeScript!');
