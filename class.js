(function() {

	'use strict';

    function Base() {

    	this.init.apply(this, arguments);
    }

    Base.prototype.init = function(config) {

    	console.log('Base: init');
    }
    Base.prototype.destroy = function() {

    	console.log('Base: destroy');
    }

    var Class = {
		create: function(obj) {
			var Fn = null;
			if(typeof Object.create === undefined) {
				Fn = new Function();
				Fn.prototype = obj.prototype;
				return new Fn;
			} else {
				Fn = Object.create(obj.prototype);
				return Fn;
			}
		},
		extend: function(obj, proto) {
			var superclass = this.create(obj.constructor);
			for(var prop in proto) {
				if (proto.hasOwnProperty(prop)) {
					if(prop === 'constructor') continue;
					obj[prop] = proto[prop];
				}
			}
			obj.constructor = proto.constructor;
			obj.constructor.superclass = superclass;
			return obj;
		}
	}

   	window.Fry = { Base:Base, Class:Class };

})();