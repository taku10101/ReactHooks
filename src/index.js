import  { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


//Contextで全体にデータを共有
const Info_Contxt={
  name:"tak",
  age:20
};
const Contxt= createContext(Info_Contxt);//データ格納

ReactDOM.createRoot(document.getElementById('root')).render(

  //中にあるコンポーネントにデータが共有できる
  <Contxt.Provider value={Info_Contxt}>
    <App />
  </Contxt.Provider>
);

export default Contxt;//createContextしたものを渡す
