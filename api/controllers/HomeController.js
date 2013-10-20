/**
 * HomeController
 *
 * @module        :: Controller
 * @description    :: Contains logic for handling requests.
 */

module.exports = {

    /**
     * /home/index
     */
    index: function (req, res) {
        // This will render the view:
        // C:\Users\Hirumi\PhpstormProjects\node\slate-dashboard/views/home/index.jade
        res.view();
    }
};
