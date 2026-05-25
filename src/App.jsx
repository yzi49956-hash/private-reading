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

像河流底下没冲走的石头。
`,
  },

  {
    title: "别回头",
    content: `
“别回头。”

她其实听见了。

但她还是回头了。

于是整个世界开始倒退。
`,
  },

  {
    title: "河流",
    content: `
时间像河流。

不是因为它流动。

而是因为你永远无法踏进同一段水里。
`,
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);

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