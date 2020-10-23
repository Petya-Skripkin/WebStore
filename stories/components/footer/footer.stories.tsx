import React from 'react';
import Highlight from 'react-highlight';

import { storiesOf } from '@storybook/react';

import Footer from '../../../src/components/footer';

const FooterDemo = () => {
  return (
    <Footer
      logo="./recents.png"
      sotialNetwork={[
        {
          link: "#",
          iconName: "./WhatsApp.png"
        },
        {
          link: "#",
          iconName: "./Facebook.png"
        },
        {
          link: "#",
          iconName: "./YouTube.png"
        }
      ]}
      num="+7 (708) 380 - 70 - 09"
    />
  )
}

storiesOf("Components/Footer", module).add(
  "Footer",
  () => (
    <div>
      <h1>Default</h1>
      <FooterDemo />
      <br />
      <br />
      <Highlight className="javascript">
        {`
          <Footer 
            logo= "./recents.png"
            sotialNetwork= {[
              {
                link: "#",
                iconName: "./WhatsApp.png"
              },
              {
                link: "#",
                iconName: "./Facebook.png"
              },
              {
                link: "#",
                iconName: "./YouTube.png"
              }
            ]}
            num= "+7 (708) 380 - 70 - 09"
          />
        `}
      </Highlight>
    </div>
  )
)