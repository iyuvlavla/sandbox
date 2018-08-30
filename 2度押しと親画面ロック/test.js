let uclick = false;

function upload(){
if(uclick){
    alert('只今処理中です。');
    console.log('loading now');
    return;
}else{
    uclick = true;
    document.styleSheets.item(0).cssRules.item(0).style.setProperty('background-Color','rgb(112, 110, 107)')
    console.log('upload start');
    let form = document.createElement('form');
    form.setAttribute("action", "/upload");
    form.setAttribute("method", "post");
    form.style.display = "none";
    document.body.appendChild(form);
    
    form.submit();
    }
}

function dlOpen(){

    let openWindow = window.open('popsample.html','sub','width=350, height=150');
    
    let windowlock = document.createElement('div');
    windowlock.setAttribute("id", "lock");
    document.body.appendChild(windowlock);
    
    let interval = setInterval(function(){
        if(!openWindow || openWindow.closed){
            document.body.removeChild(document.getElementById('lock'));
            clearInterval(interval);
        }
    },500);
}
