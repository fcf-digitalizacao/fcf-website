import { Fragment } from 'react';

import BoldTextContainer from './BoldTextContainer';
import { FeaturesRow, FeatureItemProps } from './Features';

type InicioProps = {
  paragraphs: string[];
  features: FeatureItemProps[];
  benefits: { title: string, paragraphs: string[] };
}

function Inicio({ paragraphs, features, benefits }: InicioProps) {
  return (
    <Fragment>
      <BoldTextContainer paragraphs={paragraphs}/>
      <FeaturesRow items={features} />
      <BoldTextContainer title={benefits.title} paragraphs={benefits.paragraphs}/>
    </Fragment>
  );
}

export default Inicio;
