import React from 'react';

import { Basket, Modal } from '../../components';

const Home = () => {

  const [count, setCount] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(false);

  return (
    <>
      <Basket
        close={close}
        img="./shirt.png"
        title="Рубашка"
        day="2 дня"
        price="2 500 тг"
        count={count} 
        onPlus={() => setCount(count + 1)}
        onMinus={() => setCount(count > 0 ? count - 1 : count)}
        onOpenModalWindow={() => setOpen(!open)}
        onClose={() => setClose(!close)}
      />
      <Modal
        isOpen={open}
        onClose={() => setOpen(!open)}
        Children={
          <>
            <h1>Рубашка</h1>
            <div>А вот так это делается просто берешь и делаешь
и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно</div>
          </>
        }
      />
    </>
  )
}

export default Home;