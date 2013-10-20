/**
 * HandlerController
 *
 * @module        :: Controller
 * @description    :: Contains logic for handling requests.
 */

module.exports = {

    /**
     * /handler/notfound
     */
    notfound: function (req, res) {

        var prim = req.param('unknownRoute');
        var sec = req.param('secondary');
        var fs = require('fs');
        if (sec === undefined) {
            var fc = fs.existsSync(__dirname + '/../../views/' + prim + '.jade');
            var view = prim;
        }
        else {
            var fc = fs.existsSync(__dirname + '/../../views/' + prim + '/' + sec + '.jade');
            var view = prim + '/' + sec;
        }
        if (fc) {
            res.render(view);
        }
        else {
            res.render('404');
        }
    }

};
