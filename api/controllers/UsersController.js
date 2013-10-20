/**
 * UsersController
 *
 * @module        :: Controller
 * @description    :: Contains logic for handling requests.
 */

module.exports = {

    signup: function (req, res) {
        console.log("coucou");
        Users.create({
            login: 'Mike',
            email: 'mike@gmail.com',
            password: 'kawasaki1'
        }).done(function(err, user) {

                // Error handling
                if (err) {
                    return console.log(err);

                    // The User was created successfully!
                }else {
                    console.log("User created:", user);
                }
            });
    },

    signin: function(req, res){

    }

};
