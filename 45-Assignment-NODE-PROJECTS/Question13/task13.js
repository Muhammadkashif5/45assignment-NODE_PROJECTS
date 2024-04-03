// Use a list of favorite mode of transportation & print a series of statements about these items,
var favoriteTransportation = [];
favoriteTransportation.push(['motorcycle', 'Yamaha YBR']);
favoriteTransportation.push(['car', 'Suzuki']);
favoriteTransportation.push(['bicycle', 'Mavic']);
favoriteTransportation.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    console.log("I would like to own a ".concat(brand, " ").concat(transport, "."));
});
