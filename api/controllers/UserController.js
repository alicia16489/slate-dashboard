/**
 * UsersController
 *
 * @module        :: Controller
 * @description    :: Contains logic for handling requests.
 */

module.exports = {

    signup: function (req, res) {
        var post = req.body;
        User.create({
            login: post.login,
            email: post.email,
            password: post.password
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
