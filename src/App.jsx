import { useState } from "react";
import "./style.css";

const articles = [
  {
    title: "凌晨三点半",
    content: `
窗外有鸟叫。

我突然想起很久以前的旧游戏存档。

有些东西明明已经删除了，
却还是会在某一天突然弹出来。
`,
  },

  {
    title: "别回头",
    content: `
“别回头。”

她其实听见了。

但她还是回头了。
`,
  },
];

export default function App() {
  const [entered, setEntered] = useState(false);
  const [current, setCurrent] = useState(0);

  /* 开场页 */

  if (!entered) {
    return (
      <div
        className="intro"
        onClick={() => setEntered(true)}
      >
        <div className="intro-text">
          不要回头
        </div>

        <div className="intro-tip">
          click to enter
        </div>
      </div>
    );
  }

  /* 正式页面 */

  return (
    <div className="layout">
      <aside className="sidebar">
        <h1 className="logo">Astrid Archive</h1>

        {articles.map((article, index) => (
          <div
            key={index}
            className={`menu-item ${
              current === index ? "active" : ""
            }`}
            onClick={() => setCurrent(index)}
          >
            {article.title}
          </div>
        ))}
      </aside>

      <main className="content">
        <div className="content-inner">
          <h2>{articles[current].title}</h2>

          <div className="article">
            {articles[current].content}
          </div>
        </div>
      </main>
    </div>
  );
}