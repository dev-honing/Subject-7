// src/Component/Container.tsx

// 함수형 컴포넌트 Container 생성
const Container = () => {
  return (
    <div id="container">
      <div className="content-introduce">
        <h1>변호녕 소개</h1>
        <div className="introduce"></div>
      </div>
      <div className="content-forte">
        <h2>변호녕 장점</h2>
        <div className="forte"></div>
      </div>
    </div>
  );
};

export default Container;
