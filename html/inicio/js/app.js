var check=document.querySelector(".ckeck");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="../es/idiomaes.html";
    }else{
        location.href="../idioma.html";
    }
}