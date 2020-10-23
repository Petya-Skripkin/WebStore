import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Basket, Modal, Search, ModalBox, Footer } from '../../components';

const Home = () => {

  const [count, setCount] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(false);

  return (
    <>
      <BrowserRouter>
        <ModalBox path="/modal"
          parentPath="/"
          Component={
            <p>
              <h1>Рубашка</h1>
              <div>А вот так это делается просто берешь и делаешь
              и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно
            </div>
            </p>
          }
        />
      </BrowserRouter>
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
      <Search
        onChange={() => console.log('gg')}
      />
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
    </>
  )
}

export default Home;