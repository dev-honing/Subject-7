// src/Component/Container/Container.tsx

import "./Container.css";
import Index from "./Index/Index";
import Content from "./Content/Content";

const Container = () => {
  return <div id="container">
    <Index />
    <div className="divider"></div>
    <Content />
  </div>;
};

export default Container;
