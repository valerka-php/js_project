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
    ['под ёлкой', 'под палкой', 'под скалкой', 'под мухой'],
    ['кусака', 'закаляка', 'забияка', 'кулебяка'],
    ['по одёжке', 'по сберкнижке', 'по прописке', 'по рекомендации'],
    ['утятник', 'лягушатник', 'селёдочник', 'тюленник'],
    ['починял примус', 'чистил обувь', 'варил кашу', 'играл в шахматы'],
    ['11', '69', '77', '88'],
    ['Камп Ноу', 'Альберт-холл', 'Сан-Сиро', 'Энфилд'],
    ['Операция «Арго»', 'Операция «Трест»', 'Операция «Святой Януарий»', 'Операция «Ы»'],
    ['Княжна Мэри»', '«Бэла»', '«Княгиня Лиговская»', '«Максим Максимыч»'],
    ['дрова', 'свечи', 'спички', 'пледы'],
    ['в Новгороде', 'в фильме «Брат 2»', 'в Белом Море', 'в соборе Парижской Богоматери'],
    ['оконной рамы', 'закрытой фрамуги', 'дверного проёма', 'туалетного крючка'],
    ['дирижёрская трость', 'струна рояля', 'гусиное перо', 'смычок скрипки'],
    ['ловить рыбу', 'ходить по потолку', 'менять цвет', 'петь'],
]
const currentAnswer = ['под ёлкой', 'кулебяка', 'по одёжке', 'лягушатник', 'починял примус', '77', 'Альберт-холл',
    'Операция «Арго»', '«Княгиня Лиговская»', 'спички', 'в Новгороде', 'дверного проёма', 'дирижёрская трость', 'ловить рыбу']

let count = 0;
let answer = 14;
let win = 0;

const parent1 = document.querySelector('.answerTable1').children;
const parent2 = document.querySelector('.answerTable2').children;


function checkAnswer(val) {
    let value;
    switch (val) {
        case 1:
            value = document.querySelector('.answer1').innerHTML;
            break;
        case 2:
            value = document.querySelector('.answer2').innerHTML;
            break;
        case 3:
            value = document.querySelector('.answer3').innerHTML;
            break;
        case 4:
            value = document.querySelector('.answer4').innerHTML;
            break;
    }

    // console.log(typeof(value));
    // console.log(count);
    // console.log(value);
    if (value === currentAnswer[count]) {
        if (currentAnswer[count] !== 'ловить рыбу'){

            let children = document.querySelector('.answer').children;
            let i;
            for (i = 0; i < children.length; i++) {
                children[i].style.visibility = "visible";
                children[i].style.backgroundColor = "white";
            }

            if (count === 4){
                win = 5000;
            }else if(count === 9) {
                win = 100000;
            }

            count++;
            // console.log(count);
            document.querySelector('.timer').innerHTML = '30';
            document.querySelector('.question').innerHTML = questions[count];

            document.querySelector('.answer1').innerHTML = asnwers[count][0];
            document.querySelector('.answer2').innerHTML = asnwers[count][1];
            document.querySelector('.answer3').innerHTML = asnwers[count][2];
            document.querySelector('.answer4').innerHTML = asnwers[count][3];


            parent1[answer-count].style.backgroundColor = 'green';
            parent2[answer-count].style.backgroundColor = 'green';
            // console.log(value);
        }else {
            document.querySelector('.question').innerHTML = 'Ты выиграл =)';
            document.querySelector('.win').innerHTML = 'Забрать приз !';
            document.querySelector('.timer').innerHTML = '';
            document.querySelector('.answer1').innerHTML = '';
            document.querySelector('.answer2').innerHTML = '';
            document.querySelector('.answer3').innerHTML = '';
            document.querySelector('.answer4').innerHTML = '';
            document.querySelector('.start').innerHTML = '';
        }
        // console.log(count);
    }else {
        for (i = 13; i > 0; i--){
            // console.log(i);
            if (i === 4 || i === 9 ){
                parent1[i].style.backgroundColor = 'darkorange';
                parent2[i].style.backgroundColor = 'darkorange';
            }else {
                parent1[i].style.backgroundColor = 'white';
                parent2[i].style.backgroundColor = 'white';
            }
        }

        document.querySelector('.question').innerHTML = 'Ууупс ты проиграл =/ и твой выиграш ' + win;
        document.querySelector('.start').innerHTML = 'Сыграть еще';
        document.querySelector('.timer').innerHTML = '';
        document.querySelector('.answer1').innerHTML = '';
        document.querySelector('.answer2').innerHTML = '';
        document.querySelector('.answer3').innerHTML = '';
        document.querySelector('.answer4').innerHTML = '';


        document.querySelector('.timer').innerHTML = '';
        clearInterval(setTimer);
        count = 0;
    }
}




function callFriend(){
    let answer = document.querySelector('.answer');
    let num = Math.floor(Math.random() * 4);

    // console.log(num);
    answer.children[num].style.backgroundColor = 'yellow';
    document.querySelector('.callFriend').style.display = 'none';
}
function fiftyFifty(){
    let correctAnswerNum;
    let text = document.querySelector('.answer').children;
    for (i = 0; i < 4; i++){
        let checkText = text[i].textContent
        // console.log(ty)
        for(value of currentAnswer){
            if (checkText === value){
                correctAnswerNum = i;
            }
        }
    }

    let num1;
    let num2;

    while (num1 === undefined && num2 === undefined){
        let randNum1 = Math.floor(Math.random() * 4);
        let randNum2 = Math.floor(Math.random() * 4);
        if (randNum1 !== randNum2){
            if (randNum1 !== correctAnswerNum && randNum2 !== correctAnswerNum ){
               num1 = randNum1;
               num2 = randNum2;
            }
        }
    }

    // console.log(correctAnswer);
    console.log(num1);
    console.log(num2);

    // element.style.visibility = 'hidden';      // Hide
    // element.style.visibility = 'visible';     // Show
    let tableAnswer = document.querySelector('.answer');

    tableAnswer.children[num1].style.visibility = 'hidden';
    tableAnswer.children[num2].style.visibility = 'hidden';
    document.querySelector('.fifty').style.display = 'none';
}

function getCorrectAnswer(){
    let text = document.querySelector('.answer').children;
    for (i = 0; i < 4; i++){
        let checkText = text[i].textContent
        // console.log(ty)
        for(value of currentAnswer){
            if (checkText === value){
                document.querySelector('.answer').children[i].style.backgroundColor = 'yellow';
            }
        }
    }

}



function setStart() {
    document.querySelector('.timer').innerHTML = 30;

    document.querySelector('.start').innerHTML = 'Start';

    document.querySelector('.question').innerHTML = questions[count];
    document.querySelector('.answer1').innerHTML = asnwers[count][0];
    document.querySelector('.answer2').innerHTML = asnwers[count][1];
    document.querySelector('.answer3').innerHTML = asnwers[count][2];
    document.querySelector('.answer4').innerHTML = asnwers[count][3];

}

setInterval(setTimer, 1000);
function setTimer() {
    let count = +document.querySelector('.timer').textContent;
    if (count >= 1) {
        count--;
        document.querySelector('.timer').innerHTML = count;
        // console.log(count)
    } else {
        clearInterval(setTimer);
    }
}



