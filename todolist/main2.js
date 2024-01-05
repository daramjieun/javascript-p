// 화면에 Element 추가하기
const wrap = document.createElement('header');
wrap.classList = "wrap";
document.body.appendChild(wrap);

const h1 = document.createElement('h1');
h1.textContent = 'TO DO LIST';
wrap.appendChild(h1);

const input = document.createElement('input');
input.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        if (input.value !== '') {
            // 목록 전체를 감싸는 div
            const div = document.createElement('div');
            document.body.appendChild(div);
    
            // 체크박스
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            div.appendChild(checkbox);
            // 3. checkbox 체크되면 목록 줄긋기, 해제하면 원래대로
            // if...else문 또는 조건부 연산자 활용
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    span.style.textDecoration ='line-through';
                } else {
                    span.style.textDecoration ='';
                }
            })

            // 목록 내용
            const span = document.createElement('span');
            // addButton 클릭하면 span에 input.value 넣기
            span.textContent = input.value;
            // 3. 할 일 추가된 시점에 input.value 내부 비워주기
            // 3. input 자동 포커스
            input.value = '';
            input.focus();
            div.appendChild(span);
    
            // 제거하기 버튼
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제하기';
            deleteButton.addEventListener('click', () => {
                div.parentNode.removeChild(div);
            });
            div.appendChild(deleteButton);
        }
    }
})

wrap.appendChild(input);

const addButton = document.createElement('button');
addButton.textContent = '추가';
wrap.appendChild(addButton);

// 2. 추가하기 버튼 클릭하면 목록 생성
addButton.addEventListener('click', () => {
    // input에 value가 빈값이 아니면 코드 실행, 빈값이면 코드 실행 X
    if (input.value !== '') {
        // 목록 전체를 감싸는 div
        const div = document.createElement('div');
        document.body.appendChild(div);

        // 체크박스
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        div.appendChild(checkbox);
        // 3. checkbox 체크되면 목록 줄긋기, 해제하면 원래대로
        // if...else문 또는 조건부 연산자 활용
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                div.style.textDecoration ='line-through';
            } else {
                div.style.textDecoration ='';
            }
        })

        // 목록 내용
        const span = document.createElement('span');
        // addButton 클릭하면 span에 input.value 넣기
        span.textContent = input.value;
        // 3. 할 일 추가된 시점에 input.value 내부 비워주기
        // 3. input 자동 포커스
        input.value = '';
        input.focus();
        div.appendChild(span);

        // 제거하기 버튼
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '제거하기';
        deleteButton.addEventListener('click', () => {
            div.parentNode.removeChild(div);
        });
        div.appendChild(deleteButton);
        }
    })
