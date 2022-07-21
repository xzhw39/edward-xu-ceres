const { User } = require('../models');

const userData = [{
        username: 'Dobby',
        password: 'Dob_z'

    },
    {
        username: 'Winky',
        password: 'winks'
    },
    {
        username: 'Kreacher',
        password: 'kreach'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;