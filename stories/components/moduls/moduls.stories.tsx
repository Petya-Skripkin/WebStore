import React from "react";
import Highlight from "react-highlight";

import { storiesOf } from "@storybook/react";

import Modal from "../../../src/components/modal";

const ModalDemo = () => { 
  const [modalAddress, setModalAddress] = React.useState(true);

  return <Modal
    isOpen={modalAddress}
    onClose={setModalAddress}
    Children={<p>
      <h1>Рубашка</h1>
      <div>А вот так это делается просто берешь и делаешь
и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно</div>
    </p>}
  />;
};

storiesOf("Components/Modals", module).add(
  "Modal",
  () => (
    <div>
      <h1>Default</h1>
      <ModalDemo />
      <br />
      <br />
      <Highlight className="javascript">
        {`
          <Modal
          isOpen={modalAddress}
          onClose={setModalAddress}
          Children={<p>
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
      propTables: [Modal],
      propTablesExclude: [Highlight, ModalDemo]
    }
  }
);
