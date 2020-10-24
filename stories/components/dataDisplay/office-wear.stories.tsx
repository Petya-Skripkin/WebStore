import React from 'react';
import Highlight from 'react-highlight';

import { storiesOf } from '@storybook/react';

import OfficeWear from '../../../src/components/office-wear';

const OfficeWearDemo = () => {
  return (
    <OfficeWear 
      image= "./boots.png"
      title= "Офисная одежда"
      menu= {[
        {
          link: "#",
          title: "Брюки"
        },
        {
          link: "#",
          title: "Верхняя одежда"
        },
        {
          link: "#",
          title: "Джемперы"
        },
      ]}
      onClick= {() => console.log("hello")}
    />
  )
}

storiesOf("Components/dataDisplay", module).add(
  "OfficeWear",
  () => (
    <div>
      <h1>Default</h1>
      <OfficeWearDemo />
      <br />
      <br />
      <Highlight className="javascript">
        {`
          <OfficeWear 
          image= "./boots.png"
          title= "Офисная одежда"
          menu= {[
            {
              link: "#",
              title: "Брюки"
            },
            {
              link: "#",
              title: "Верхняя одежда"
            },
            {
              link: "#",
              title: "Джемперы"
            },
          ]}
          onClick= {() => console.log("hello")}
        />
        `}
      </Highlight>
    </div>
  ),
  {
    info: {
      propTables: [OfficeWear],
      propTablesExclude: [Highlight, OfficeWearDemo]
    }
  }
)