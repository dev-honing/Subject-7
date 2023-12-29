// main.js

// li 태그를 동적으로 생성하는 함수
function createLi(name) {
  // index에 접근
  const index = document.getElementById("index");
  // li 태그를 생성
  const liElement = document.createElement("li");
  // li 태그에 학생 이름 추가
  liElement.textContent = name;
  // 생성한 li 태그를 index에 자식 요소로 추가
  index.appendChild(liElement);
}
