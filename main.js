// main.js

// li 태그를 동적으로 생성하는 함수
function createLi(name) {
  // index에 접근
  const index = document.getElementById("index");
  // li 태그를 생성
  const liElement = document.createElement("li");
  // li 태그에 학생 이름 추가
  liElement.textContent = name;

  // li 태그에 클릭 이벤트 추가
  liElement.addEventListener("click", () => {
    toggleLiStyles(liElement);
  });
  // 생성한 li 태그를 index에 자식 요소로 추가
  index.appendChild(liElement);
}

// li 태그를 index에 자식 요소로 추가하는 함수
function appendToIndex() {
  // 학생 이름 배열
  const studentName = [
    "김우진",
    "김현",
    "방승희",
    "변호녕",
    "소사무엘",
    "송영준",
    "신동현",
    "오승민",
    "유승민",
    "윤준현",
    "이민구",
    "이유안",
    "이채이",
    "정영식",
    "최성민",
    "최은철",
    "홍문기",
  ];

  // 각 학생 이름에 대해 createLi 함수를 호출해 li 태그 생성 및 이름 추가
  studentName.forEach((name) => createLi(name));
}

// index에 li 태그 추가
appendToIndex();

// li 태그의 스타일을 토글하는 함수
function toggleLiStyles(element) {
  // 클릭된 요소에 clicked 클래스를 추가/제거
  element.classList.toggle("clicked");
  
  // li 태그의 스타일을 동적으로 추가/제거
  // 색상
  element.style.color = element.classList.contains("clicked") ? "#353535" : "initial";
  // 폰트 크기
  element.style.fontSize = element.classList.contains("clicked") ? "12px" : "initial";
  // 폰트 굵기
  element.style.fontWeight = element.classList.contains("clicked") ? "400" : "initial";
}
