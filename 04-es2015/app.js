let favoriteCityId = "Rome";
console.log(favoriteCityId);
favoriteCityId = "Paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
// citiesId = [];
// console.log(citiesId);
citiesId.push('tokyo');
console.log(citiesId);

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}
let weather = getWeather(favoriteCityId);
console.log(weather);

let { city, temperature } = weather;
console.log(city);
console.log(temperature);

let [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip {

    get price() {
        return this._price;
    }
    set price(newprice) {
        this._price = newprice;
    }

    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    toString() {
        return "Trip {" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this._price + "}";
    }
    static getDefaultTrip(
        id = "rio-de-janeiro",
        name = "Rio de Janeiro",
        imageUrl = "img/rio-de-janeiro.jpg") {

        return new Trip(id, name, imageUrl);
    }
}
let parisTrip = new Trip("paris", "Paris", "img/parisId.jpg");
parisTrip.price = 100;
console.log(parisTrip.toString());
console.log(parisTrip.name);

let defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }

    toString() {
        return "Free" + super.toString();
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());


class TripService {
    constructor() {
        this.Trips = new Set([
            new Trip('paris', 'Paris', 'img/paris.jpg'),
            new Trip('nantes', 'Nantes', 'img/nanges.jpg'),
            new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')]);
    }
    findByName(tripName) {
        return new Promise((resolve, refect) => {
            setTimeout(() => {
                let foundTrip;
                let trip = this.Trips.forEach(t => {
                    if (t.name === tripName) {
                        foundTrip = t;
                    }
                })
                if (foundTrip) {
                    resolve(foundTrip);
                }
                else {
                    refect('No trip with name ' + tripName);
                }
            }, 2000);
        });
    }
}

class PriceService {
    constructor() {
        this.prices = new Map([
            ["paris", 100],
            ["rio-de-janeiro", 800]
        ]);
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, refect) => {
            setTimeout(() => {
                let foundPrice = this.prices.get(tripId);
                if (foundPrice) {
                    resolve(foundPrice);
                }
                else {
                    refect('No price for trip id ' + tripId);
                }
            }, 3000);
        });
    }
}


let tripService = new TripService();
let priceService = new PriceService();
tripService.findByName("Paris")
    .then(trip => console.log("Trip found :", trip))
    .catch(error => console.log(error));
tripService.findByName("Toulouse")
    .then(trip => console.log("Trip found :", trip))
    .catch(error => console.log(error));
priceService.findPriceByTripId("rio-de-janeiro")
    .then(price => console.log("Price found :", price))
    .catch(error => console.log(error));
tripService.findByName("Nantes")
    .then(trip => priceService.findPriceByTripId(trip.id))
    .then(price => console.log("Price found :", price))
    .catch(error => console.log(error));