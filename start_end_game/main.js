/* 1. 사용자가 전달한 값을 어딘가에 저장해야 한다.
저장하지 않으면 프로그램은 금방 그 값을 잊어버리기 때문이다.
Number()를 사용하여 문자열을 숫자열로 형변환*/
const number = Number(prompt('몇 명이 참가하나요?'));
/* 1. 첫 번째 버튼 태그 하나 가져오기*/
const $button = document.querySelector('button');
/* 1. HTML 입력창 가져와서 태그를 저장하는 변수에 저장 */
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
/* 2. 제시어를 저장할 변수를 만든다.(데이터)
    저장도 하고, 단어를 입력할 때마다 바뀌므로 미리 let 변수를 만든다.
    선언할 때 아무런 값을 넣지 않았으니 word는 undefined가 된다.
    **** undefinde는 if문 안에 들어가면 false로 취급되고,
    !word는 true로 취급된다. ****
    첫 단어를 입력한 참가자인지 코드로 판단해야 한다. 첫 단어를
    말한 참가자인지 아닌지를 알려면 첫 단어가 무엇인지 기억해야 한다.
    그래야 첫 단어도 저장하고, 그다음 단어와도 비교해서 판단할 수 있으니까
    따라서 처음 시작할 때 단어를 저장할 변수를 만들고 빈 값으로 놔둔다.*/
let word; // 2. 제시어
let newWord; // 2. 새로 입력한 단어

/* 코드를 순서도대로 보기 좋게 정렬한다. 기본적으로 위에서 아래로 순서대로 실행*/

/* 2. 입력 버튼을 누르면 두 개로 나눠진다.
    제시어가 비어있거나, 비어있지 않거나*/
const onClickButton = () => {
    if(!word) { // 제시어가 비어 있는가?
        // 항상 데이터(변수)를 바꿔주고 화면도 바꿔줘야 한다. (짝을 이뤄야 함)
        word = newWord; // 비어있다. 입력한 단어가 제시어가 된다.
        $word.textContent = word;   // 화면에 제시어 표시, span에 word(제시어) 넣어준다.
        const order = Number($order.textContent); // 현재 순서, 잠깐 저장(변수에)
        if (order + 1 > number) {   // 맞다면 1로
            $order.textContent = 1; // textContent 문자열로 자동 형변환
        } else {
            $order.textContent = order + 1; // 틀리다면 현재순서 + 1
        }
        $input.value = '';  // 화면 바꿔주고, input의 value를 빈값으로 바꿔준다./ 대부분 사용자 입력창이 value다.
        $input.focus(); // 입력창을 비우고 자동으로 커서를 둔다.
    } else {
        // 비어 있지 않다.
        if(word[word.length - 1] === newWord[0]) {  // 올바른가? (제시어의 끝글자와 새로운 단어의 첫 번째 자리)
            // 프로그래밍에서 겹치는 부분이 있으면 좋지 않다. 우선은 이렇게 작성
            word = newWord; 
            $word.textContent = word;
            const order = Number($order.textContent);
            if (order + 1 > number) {
                $order.textContent = 1; // textContent 문자열로 자동 형변환
            } else {
                $order.textContent = order + 1;
            }
            $input.value = '';  // 화면 바꿔주고, input의 value를 빈값으로 바꿔준다./ 대부분 사용자 입력창이 value다.
            $input.focus(); // 입력창을 비우고 자동으로 커서를 둔다.
        } else {    // 올바르지 않은가?
            alert('올바르지 않은 단어입니다.');
            $input.value = '';  // 화면 바꿔주고, input의 value를 빈값으로 바꿔준다./ 대부분 사용자 입력창이 value다.
            $input.focus(); // 입력창을 비우고 자동으로 커서를 둔다.
        }
    }
};

/* 2. 앞에서 먼저 let newWord; 변수를 만들어 놓는다.
    새로 입력된 단어의 값이 newWord 변수에 저장된다.
    입력한 단어를 input 이벤트 안에서 newWord 변수에 저장하면 된다.*/
const onInput = (event) => {
    newWord = event.target.value;
};

// button 클릭시 이벤트 리스너 실행
$button.addEventListener('click', onClickButton);
// input 입력시 이벤트 리스너 실행
$input.addEventListener('input', onInput);

