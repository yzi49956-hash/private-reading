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
  const [stage, setStage] = useState("intro");
  const [current, setCurrent] = useState(null);

  /* 第一层 */

  if (stage === "intro") {
    return (
      <div className="intro">
        <div className="intro-title">
          不要回头
        </div>

        <button
          className="enter-button"
          onClick={() => setStage("archive")}
        >
          进入阅读
        </button>
      </div>
    );
  }

  /* 第二层 */

  if (stage === "archive") {
    return (
      <div className="archive">
        <div className="archive-inner">
          <div className="archive-title">
            Archive
          </div>

          {articles.map((article, index) => (
            <div
              key={index}
              className="archive-item"
              onClick={() => {
                setCurrent(index);
                setStage("reader");
              }}
            >
              {article.title}
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* 第三层 */

  return (
    <div className="reader">
      <div
        className="back"
        onClick={() => setStage("archive")}
      >
        ← 返回目录
      </div>

      <div className="reader-inner">
        <h1>{articles[current].title}</h1>

        <div className="article">
          {articles[current].content}
        </div>
      </div>
    </div>
  );
}