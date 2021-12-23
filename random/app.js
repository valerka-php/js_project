document.querySelector('button').onclick = myClick ;

function myClick(){
    let min = +(document.querySelector('.min').value);
    let max = +(document.querySelector('.max').value);
    let count = +(document.querySelector('.count').value);


    // console.log(typeof min);
    // console.log(typeof max);
    // console.log(typeof count);

    let randomNum = [];

    if (min > max){
        alert('Минимальное число min быть меньше max')
    }else {

        for (i = 0; i < count; i++){
            let num = Math.floor(Math.random() * ((max + 1) - min)) + min ;
            randomNum.push(num);
        }

        document.querySelector('.out').innerHTML = randomNum;

        // console.log(min,max,nums);
    }






}