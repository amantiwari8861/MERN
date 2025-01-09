
const mongoose = require('mongoose');

const testMongoose = () => {


    mongoose.connect(process.env.MONGO_URI);

    const Cat = mongoose.model('Cat', { name: String });

    const kitty = new Cat({ name: 'Liala' });
    kitty.save().then(() => console.log('meow'));
}
// Mongoose provides a straight-forward, schema-based solution to model your
module.exports = testMongoose