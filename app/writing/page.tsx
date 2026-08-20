import { ARTICLES, Article } from "@/app/portfolio-data";
import "@/app/writing/writing.css";
import { SectionLabel } from "../components/SectionLabel";

export default function Page() {
  return (
    <>
      <section className="section-padding section-hero">
        <div className="layout-container">

          <div className="grid-2col grid-2col--spaced">
            <h1 className="heading-hero">
              Writing
            </h1>

            <p className="body-lede body-lede--end text-highlight">
              Explore my writing and publications in computer science and UX.
            </p>
          </div>

          <SectionLabel>Papers</SectionLabel>

          <div className="list-panel">
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

function ArticleRow({ article: a}: ArticleRowProps) {
  return (
      <a href={a.url} target="_blank" rel="noopener noreferrer" className="writing-row">
        <div className="writing-row-left">
          <span className="writing-row-date">{a.date}</span>
          <h3 className="writing-row-title">{a.title}</h3>
        </div>

        <span className="writing-row-time">{a.readTime}</span>

        <span className="writing-row-arrow row-arrow">&gt;</span>
      </a>
  );
}
