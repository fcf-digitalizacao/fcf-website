type BoldTextContainerProps = { 
  title?: string;
  paragraphs: string[];
}

function BoldTextContainer({ paragraphs, title }: BoldTextContainerProps) {
  return (
    <div className="bold-text-container">
      {title ? <p className="title">{title}</p> : null}
      {paragraphs.map(p => <p>{p}</p>)}
    </div>
  );
}

export default BoldTextContainer;
