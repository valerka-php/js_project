const questions = [
    '1. Где дети ищут подарки утром 1 января?',
    '2. Что из перечисленного пирог?',
    '3. Провожают, как известно, по уму, а как встречают?',
    '4. Как называют мелководный бассейн, предназначенный для детей?',
    '5. Что, по словам кота Бегемота, он делал, когда его пришли арестовывать?',
    '6. Бочонок с каким числом в русском лото принято называть «топориками»?',
    '7. Что из перечисленного название концертного зала, а не стадиона?',
    '8. В каком фильме Бен Аффлек был не только исполнителем главной роли, но и режиссёром?',
    '9. Как не называется ни одна из глав романа Лермонтова «Герой нашего времени»?',
    '10. Что норвежцы дарят на Новый год в качестве символа тепла и счастья?',
    '11. Где впервые была произнесена фраза «Не в силе Бог, а в правде», ставшей впоследствии крылатой?',
    '12. Как называется психологический эффект, который несколько лет назад открыли американские ученые?',
    '13. Какой предмет стал причиной смерти французского композитора Жан-Батиста Люлли?',
    '14. Что не умеют делать ящерицы гекконы? ',
]

const asnwers = [
    ['под ёлкой','под палкой','под скалкой','под мухой'],
    ['кусака','закаляка','забияка','кулебяка'],
    [],

]


const currentAnswer = ['под ёлкой', 'кулебяка',]

let count = 0;
let countAnswer = 0;

// const answers = [
//      ['под ёлкой','под палкой','под скалкой','под мухой']
// ]
// console.log(answers[0]);

// function question(count){
//     document.querySelector('.question').innerHTML = questions[count];
// }
// question(0);




function answer(answer){

    document.querySelector('.timer').innerHTML = 60;
    let value = document.querySelector('.answer1').innerHTML;
    let value2 = document.querySelector('.answer2').innerHTML;
    let value3 = document.querySelector('.answer3').innerHTML;
    let value4 = document.querySelector('.answer4').innerHTML;
    // console.log(typeof(value));
    if (value || value2 || value3 || value4){
        for (let key of currentAnswer){
            if (key === currentAnswer[count]){
                // console.log('DA')
            }else {
                // console.log('NEA')
            }
        }
    }
    // console.log(value);

}




function start(){
    document.querySelector('.question').innerHTML = questions[count];
    document.querySelector('.answer1').innerHTML = asnwers[count][0];
    document.querySelector('.answer2').innerHTML = asnwers[count][1];
    document.querySelector('.answer3').innerHTML = asnwers[count][2];
    document.querySelector('.answer4').innerHTML = asnwers[count][3];

    // здесь я пытался циклом вывести ответы в список но они списком выпадали.
    // Пока что только перезаписывают первый элемент списка =)
    // for (i = 0 ; i <= 3 ; i++){
    //    document.querySelector('.answer').innerHTML = asnwers[count][i];
    // }

    setInterval(timer,1000);
}
function timer(){
    let count = +document.querySelector('.timer').textContent;
    if (count >= 1 ){
        count--;
        document.querySelector('.timer').innerHTML = count;
        // console.log(count)
    }else {
        clearInterval(timer);
    }
}



