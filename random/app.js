document.querySelector('button').onclick = myClick ;

function myClick(){
    let min = +document.querySelector('.min').value;
    let max = +document.querySelector('.max').value;
    let count = +document.querySelector('.count').value;

    // console.log(min,max,nums);

    let randomNum = [];

    for (i = 0; i < count; i++){
        let num = Math.floor(Math.random() * ((max + 1) - min)) + min ;
        randomNum.push(num);
    }

    document.querySelector('.out').innerHTML = randomNum;

}