import { Fragment } from 'react';

import BoldTextContainer from './BoldTextContainer';

type QuemSomosProps = {
  paragraphs: string[];
}

function QuemSomos({ paragraphs }: QuemSomosProps) {
  return (
    <Fragment>
      <BoldTextContainer paragraphs={paragraphs}/>
    </Fragment>
  );
}

export default QuemSomos;
