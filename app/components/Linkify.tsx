const URL_PATTERN = /(https?:\/\/[^\s]+)/g;

export function Linkify({ text }: { text: string }) {
  const parts = text.split(URL_PATTERN);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i}>
            <a href={part} target="_blank" rel="noopener noreferrer" className="linkify-link">
              Link to project
            </a>.
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
