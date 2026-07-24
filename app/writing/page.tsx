import { ARTICLES, Article } from "@/app/portfolio-data";
import "@/app/pages.css";

export default function Page() {
  return (
    <>
      <section className="section-padding section-hero">
        <div className="layout-container">

          <div className="grid-2col grid-2col--spaced">
            <h1 className="writing-title">
              Writing
            </h1>

            <p className="body-lede body-lede--end">
              Some cool reading!
            </p>
          </div>

          <div>
            {ARTICLES.map((a, i) => (
              <ArticleRow key={a.id} article={a} last={i === ARTICLES.length - 1} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

interface ArticleRowProps {
  article: Article;
  last: boolean;
}

function ArticleRow({ article: a, last }: ArticleRowProps) {
  return (
    <a href="#" className={`writing-row ${last ? "writing-row--last" : ""}`}>
      <div className="writing-row-left">
        <span className="writing-row-date">{a.date}</span>
        <h3 className="writing-row-title">{a.title}</h3>
      </div>

      <div className="writing-row-right">
        <span className="writing-row-time">{a.readTime}</span>
        <span className="writing-row-arrow">↗</span>
      </div>
    </a>
  );
}
