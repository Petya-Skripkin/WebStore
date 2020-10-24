import React from 'react';
import Highlight from 'react-highlight';

import { storiesOf } from '@storybook/react';

import Total from '../../../src/components/total';

const TotalDemo = () => {
  return (
    <Total 
      num= {2}
      sum= {12300}
      onClick= {() => console.log('hello')}
    />
  )
}

storiesOf("Components/dataDisplay", module).add(
  "Total",
  () => (
    <div>
      <h1>Default</h1>
      <TotalDemo />
      <br />
      <br />
      <Highlight className="javascript">
        {`
          <Total
            num= {2}
            sum= {12300}
            onClick= {() => console.log('hello')}
          />
        `}
      </Highlight>
    </div>
  ),
  {
    info: {
      propTables: [Total],
      propTablesExclude: [Highlight, TotalDemo]
    }
  }
)