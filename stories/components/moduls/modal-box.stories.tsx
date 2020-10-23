import React from "react";
import Highlight from "react-highlight";

import { storiesOf } from "@storybook/react";

import ModalBox from "../../../src/components/modal-box";

storiesOf("Components/ModalBoxs", module).add(
  "ModalBox",
  () => (
    <div>
      <Highlight className="javascript">
        {`
          <ModalBox
            path= "/modal"
            parentPath= "/"
            Component={<p>
              <h1>Рубашка</h1>
              <div>А вот так это делается просто берешь и делаешь
                и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно
              </div>
            </p>}
          />
      `}
      </Highlight>
    </div>
  ),
  {
    info: {
      propTables: [ModalBox],
      propTablesExclude: [Highlight]
    }
  }
);
