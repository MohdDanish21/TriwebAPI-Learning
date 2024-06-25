import FirstComponent from "./components/firstComponent";
import Backdrop from "./components/backdrop";
import {useState} from 'react';
function App() {
  const[modalOpen,setModalOpen]=useState(true);
  const modalCloseHandler=()=>{
    setModalOpen(false);
  }

  const openModalHandler=()=>{
    setModalOpen(true);
  }

  return (
    <div>
      <h1>Hey its my application</h1>
      {modalOpen?<FirstComponent owner="Azhar" reason="for demo" closeModal={modalCloseHandler}/>:null}
      {modalOpen?<Backdrop/>:null}
      <button onClick={openModalHandler}>open</button>
      
     
     
    </div>
  );
}

export default App;
