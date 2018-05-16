const mongoose = require('mongoose');

module.exports = {
    connectTo: function (database = 'jekmAuth', host = 'localhost') {
        return mongoose.connect(`mongodb://${host}/${database}`);
    }
};