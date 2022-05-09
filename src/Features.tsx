export type FeatureItemProps = {
  imagePath: string;
  title: string;
  description: string;
}

function FeatureItem({ imagePath, title, description}: FeatureItemProps) {
  return (
    <div className="feature-item">
      <div className="image">
        <img src={imagePath}/>
      </div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  )
}

type FeatureRowProps = { items: FeatureItemProps[] }

function FeaturesRow({ items }: FeatureRowProps) {
  return (
    <div className="features-row-wrapper">
      {items.map(i => <FeatureItem imagePath={i.imagePath} title={i.title} description={i.description}/>)}
    </div>
  );
}

export { FeaturesRow, FeatureItem };
