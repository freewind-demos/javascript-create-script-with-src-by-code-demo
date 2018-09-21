const script = document.createElement('script')
script.src = './node_modules/jquery/dist/jquery.js'
script.onload = mycode
document.body.appendChild(script);

function mycode() {
    alert($('#main').text())
}