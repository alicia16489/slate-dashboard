// socket is globalized by sails
console.log("here");
socket.get('/echo',{
    message: 'hi there!'
}, function (response) {
    // response === {success: true, message: 'hi there!'}
    console.log(response);
});