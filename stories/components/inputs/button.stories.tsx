import React from 'react';
import Highlight from 'react-highlight';

import { storiesOf } from '@storybook/react';

import Button from '../../../src/components/button';

const ButtonDemo = () => {
  return (
    <Button onClick= {() => console.log("hello")}>Войти</Button>
  )
}

storiesOf("Components/Inputs", module).add(
  "Button",
  () => (
    <div>
      <h1>Default</h1>
      <ButtonDemo />
      <br />
      <br />
      <Highlight className="javascript">
        {`
          <Button onclick= {console.log('hello')}>Войти</Button>
        />
      `}
      </Highlight>
    </div>
  ),
  {
    info: {
      propTables: [Button],
      propTablesExclude: [Highlight, ButtonDemo]
    }
  }
)