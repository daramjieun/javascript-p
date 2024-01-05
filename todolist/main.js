'use strict';

// 4. 코드 중복 제거
const addTodo = () => {
    if (input.value !== '') {
        const div = document.createElement('div');
        document.body.appendChild(div);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', (event) => {
            div.style.textDecoration = event.target.checked ? 'line-through' : '';
        })
        div.appendChild(checkbox);

        const span = document.createElement('span');
        span.textContent = input.value;
        input.value = '';
        input.focus();
        div.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '제거하기';
        // 3. 제거하기 버튼 누르면 목록에서 지우기
        deleteButton.addEventListener('click', () => {
            div.parentNode.removeChild(div);
        })
        div.appendChild(deleteButton);
    }
}

// 화면에 Element 추가하기
const h1 = document.createElement('h1');
h1.textContent = "할 일 목록";
document.body.appendChild(h1);

const input = document.createElement('input');
input.addEventListener('keyup', (event) => {
    // 3. 엔터키로 추가
    if (event.key === "Enter") {
        addTodo();
    }
})
document.body.appendChild(input);

const addButton = document.createElement('button');
addButton.textContent = "추가하기"; 
document.body.appendChild(addButton);

//1.추가하기 버튼 누르면 추가되는 할 일 목록 만들기
addButton.addEventListener('click', () => {
    addTodo();
})
