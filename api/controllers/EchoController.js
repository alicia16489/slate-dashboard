/**
 * EchoController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

    index: function (req,res) {
        // Get the value of a parameter
        console.log(req.param);
        var param = req.param('message');

        // Send a JSON response
        res.json({
            success: true,
            message: param
        });
    }

};
