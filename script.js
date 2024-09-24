
function generateQRCode() {
    var url = document.getElementById('url').value;
    if (url) {
        // Clear previous QR code
        var canvas = document.getElementById('qrcode');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Generate new QR code
        QRCode.toCanvas(canvas, url, function (error) {
            if (error) console.error(error);
            console.log('QR code generated!');
        });
    } else {
        alert('Please enter a URL');
    }
}
