import { Fragment } from 'react';
import { FeaturesRow, FeatureItemProps } from './Features';

type ServicosProps = {
  features: FeatureItemProps[];
}

function Servicos({ features }: ServicosProps) {
  return (
    <Fragment>
      <FeaturesRow items={features} />
    </Fragment>
  );
}

export default Servicos;

