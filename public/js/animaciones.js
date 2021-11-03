

function showDetail(id){
    let detail = document.getElementById(id);
    if(detail){
        detail.style.display = "block";
        detail.style.transition = "500ms"
    }
}


function hideDetail(id){
    let detail = document.getElementById(id);
    if(detail){
        detail.style.display = "none";
        detail.style.transition = "500ms"
    }
}
