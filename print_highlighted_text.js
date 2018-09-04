var text = "";
function gText(e) {

if (window.getSelection){
    text = window.getSelection().toString();
    console.log(text)
}
}
document.onmouseup = gText;
if (!document.all) document.captureEvents(Event.MOUSEUP);
