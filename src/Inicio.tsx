import { Fragment } from 'react';

import LogoRow from './LogoRow';
import BoldTextContainer from './BoldTextContainer';
import { FeaturesRow, FeatureItemProps } from './Features';

type InicioProps = {
  workflowImagePath: string;
  paragraphs: string[];
  features: FeatureItemProps[];
  benefits: { title: string, paragraphs: string[] };
}

function Inicio({ paragraphs, features, benefits, workflowImagePath }: InicioProps) {
  return (
    <Fragment>
      <LogoRow imagePath={workflowImagePath} />
      <BoldTextContainer paragraphs={paragraphs}/>
      <FeaturesRow items={features} />
      <BoldTextContainer title={benefits.title} paragraphs={benefits.paragraphs}/>
    </Fragment>
  );
}

export default Inicio;
