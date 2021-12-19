document.querySelector('button').onclick = myClick ;

function myClick(){
    let min = Number(document.querySelector('.min').value);
    let max = Number(document.querySelector('.max').value);
    let count = Number(document.querySelector('.count').value);


    // console.log(typeof min);
    // console.log(typeof max);
    // console.log(typeof count);

    if (typeof min !== 'number' && typeof max !== 'number' ){
        alert('Можно вводить только числа')
    }else {
        let randomNum = [];

        for (i = 0; i < count; i++){
            let num = Math.floor(Math.random() * ((max + 1) - min)) + min ;
            randomNum.push(num);
        }

        document.querySelector('.out').innerHTML = randomNum;
    }

    // console.log(min,max,nums);



}