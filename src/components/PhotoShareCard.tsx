type PhotoShareCardProps = {
  title: string;
  description: string;
  url: string;
  onEmptyLink: () => void;
};

export function PhotoShareCard({ title, description, url, onEmptyLink }: PhotoShareCardProps) {
  const open = () => {
    if (!url) {
      onEmptyLink();
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="photo-card">
      <div>
        <span className="photo-card__icon" aria-hidden="true">
          ◌
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button type="button" className="button button--light" onClick={open} aria-label={`${title} 사진 보러가기`}>
        사진 보러가기
      </button>
    </article>
  );
}
