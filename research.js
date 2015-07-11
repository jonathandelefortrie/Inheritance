(function() {

    var Car = function(brand) {
        this.brand = brand;
        this.fuel = 'gazoline';
        this.setBrand = function(brand) {
            this.brand = brand;
        };
    };

    Car.prototype.engine = '4 stroke';

    var Bike = function(modele) {
        this.modele = modele;
        this.brand = 'Kawazaki';
        this.engine = '2 stroke';
    };

    Bike.prototype.wheel = 2;

    var Bicycle = function() {

    };

    var car = new Car('Renault');
    var bike = new Bike('YZ');

    bike.__proto__ = Car.prototype /* car */ ; // Inheritance by __proto__ -- This instance will loose is prototype -- Can be inherited by prototype and by instance
    bike.fuel = 'petrol'; // This overide only the object instance itself

    console.log('proto : __proto__', car.__proto__); // Prototype [[prototype]] of the instance
    console.log('proto : prototype', Car.prototype); // Prototype of the Class "Function constructor"

    var bicycleOne = Object.create(Bike.prototype); // ES5 inheritance
    var bicycleTwo = inherit(Bike.prototype); // Polyfill method inheritance

    console.log('car', car);
    console.log('bike', bike, bike.wheel);
    console.log('bicycle one use Object.create', bicycleOne, bicycleOne.wheel);
    console.log('bicycle two use inherit', bicycleTwo, bicycleTwo.wheel);

    Car.prototype.getBrand = function() {
        return this.brand;
    }

    console.log('Get brand after all for car is ', car.getBrand());
    console.log('Get brand after all for bike is ', bike.getBrand());

    function inherit(obj) {
        var Fn = new Function();
        Fn.prototype = obj;
        return new Fn;
    }

})();
