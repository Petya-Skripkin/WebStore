import React from 'react';
import Highlight from 'react-highlight';

import { storiesOf } from '@storybook/react';

import Search from '../../../src/components/search';

const SearchDemo = () => {
  return (
    <Search onChange= {() => console.log("hello")} />
  )
}

storiesOf("Components/Inputs", module).add(
  "Search",
  () => (
    <div>
      <h1>Default</h1>
      <SearchDemo />
      <br />
      <br />
      <Highlight className="javascript">
        {`
          <Search onChange= {() => console.log("hello")} />
        />
      `}
      </Highlight>
    </div>
  ),
  {
    info: {
      propTables: [Search],
      propTablesExclude: [Highlight, SearchDemo]
    }
  }
)