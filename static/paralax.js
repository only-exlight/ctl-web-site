let body = doc.getElementsByTagName('body');

window.onmousemove = function(e){
    body.item(0).style.backgroundPosition = e.clientX/20 * (-1) + 'px ' + e.clientY/20 * (-1) +'px';
}