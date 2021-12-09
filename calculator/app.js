
function insert(num){
    document.querySelector('.out').value = document.querySelector('.out').value + num;
}

function clean(){
    document.querySelector('.out').value = '';
}

function back(){
    let back = document.querySelector('.out').value ;
    document.querySelector('.out').value = back.substring(0,back.length-1)
}

function result(){
    let result = document.querySelector('.out').value ;
    if (result ){
        document.querySelector('.out').value = eval(result);
    }
}

function percent(){
    document.querySelector('.out').value = +document.querySelector('.out').value / 10;
}