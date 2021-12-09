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
    ['по одёжке','по сберкнижке','по прописке','по рекомендации'],
    ['утятник','лягушатник','селёдочник','тюленник'],
    ['починял примус','чистил обувь','варил кашу','играл в шахматы'],
    ['11','69','77','88'],
    ['Камп Ноу','Альберт-холл','Сан-Сиро','Энфилд'],
    ['Операция «Арго»','Операция «Трест»','Операция «Святой Януарий»','Операция «Ы»'],
    ['Княжна Мэри»','«Бэла»','«Княгиня Лиговская»','«Максим Максимыч»'],
    ['дрова','свечи','спички','пледы'],
    ['в Новгороде','в фильме «Брат 2»','в Белом Море','в соборе Парижской Богоматери'],
    ['оконной рамы','закрытой фрамуги','дверного проёма','туалетного крючка'],
    ['дирижёрская трость','струна рояля','гусиное перо','смычок скрипки'],
    ['ловить рыбу','ходить по потолку','менять цвет','петь'],
]

const currentAnswer = ['под ёлкой', 'кулебяка','по одёжке','лягушатник','починял примус','77','Альберт-холл',
    'Операция «Арго»','«Княгиня Лиговская»','спички','в Новгороде','дверного проёма','дирижёрская трость','ловить рыбу']

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




function answer(val){
    document.querySelector('.timer').innerHTML = 60;

    let value;

    if (val === 1){
         value = document.querySelector('.answer1').innerHTML;
    }else if (val === 2){
         value = document.querySelector('.answer2').innerHTML;
    }else if (val === 3){
        value = document.querySelector('.answer3').innerHTML;
    }else if (val === 4){
        value = document.querySelector('.answer4').innerHTML;
    }

    // console.log(typeof(value));
    // console.log(count);

    if (value){
        for (let key of currentAnswer){
            for (i = 0; i < currentAnswer.length ; i++){
                if (value === key){
                    // console.log('DA')
                    count++;
                    document.querySelector('.question').innerHTML = questions[count];
                    document.querySelector('.answer1').innerHTML = asnwers[count][0];
                    document.querySelector('.answer2').innerHTML = asnwers[count][1];
                    document.querySelector('.answer3').innerHTML = asnwers[count][2];
                    document.querySelector('.answer4').innerHTML = asnwers[count][3];
                    break;
                }else {
                    // console.log('NEA')
                    break;
                }
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



