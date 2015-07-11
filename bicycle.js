(function() {

    'use strict';

    var Base = Fry.Base;
    var Class = Fry.Class;

    function Bicycle() {

        Bicycle.superclass.constructor.apply(this, arguments);
    }

    Bicycle.prototype = Class.extend(Class.create(Base), {

        constructor: Bicycle,

        init: function(config) {

            console.log('Bicycle: init :', config);
        },

        hello: function() {

            console.log('Bicycle: hello');
        },

        destroy: function() {

            console.log('Bicycle: destroy');
        }

    });

    Fry.Bicycle = Bicycle;

})();