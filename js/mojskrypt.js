function createData(obj) {

    var data = obj,
        _name = "Piotr";

    return {
        get: function(key) {
            return this[key];
        },
        set: function(key, value) {
            if(value && key) {
                this[key] = value;
            } else {
                this[key] = _name;
            }
        }
    };
}

var data = createData({});

data.set("name", "Janek");

console.log( data.get("name") );
