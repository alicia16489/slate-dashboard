/**
 * Users
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

//var bcrypt = require('bcrypt');

module.exports = {
    tableName: 'users',
    attributes: {
        login: {
            type: 'STRING',
            max: 45,
            required: true
        },
        email: {
            type: 'STRING',
            max: 45,
            required: true
        },
        password: {
            type: 'string',
            minLength: 6,
            required: true,
            columnName: 'encrypted_password'
        }

    }
};
