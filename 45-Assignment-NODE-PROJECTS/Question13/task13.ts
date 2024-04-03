// Use a list of favorite mode of transportation & print a series of statements about these items,

let favoriteTransportation: Array<[transport: string, brand: string]> = []

favoriteTransportation.push(['motorcycle', 'Yamaha YBR'])
favoriteTransportation.push(['car', 'Suzuki'])
favoriteTransportation.push(['bicycle', 'Mavic'])

favoriteTransportation.forEach(([transport, brand]) =>
{console.log(`I would like to own a ${brand} ${transport}.`)}
)