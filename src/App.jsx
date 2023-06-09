import { useEffect,useState,useContext,useRef, useReducer } from 'react';
import Contxt from "./index.js"
import styled from 'styled-components';//css in js

const reducer=(state,action)=>{
    //onclickのtypeを受け取る
    switch(action.type){
        //if文みたいなの　値の更新
        case "increment":
            return state +1;

        case "decrement":
            return state-1;
        default:
            return state;
    }
}

const App = () => {
    //データが変更された時に再レンダリングを行うため
    const[counts,setCounts]=useState(0);

    //useContext　一か所で管理されているデータを複数箇所で呼び出せる
    const info=useContext(Contxt);//App.jsxのvalueの値


    //useReducer riduxに近い
    const [state,dispatch]=useReducer(reducer,0);//state　データの更新　dispatch ストアに通知を送る


    const handleClick=()=>{
        //useStateの値を変更すると再レンダリングされる
        setCounts(counts +1);
    };
    

    //発火のタイミングを決める
    useEffect(()=>{
        console.log("useEffect");
    },[counts]);//第二引数に配列 countが更新された時に発火 
    //*setCountsはダメ


    //inputの値を取得するときによく使う
    const form=useRef();
    const handlRef =()=>{
        console.log(form.current.value);

    };

    //usemamo コードは上から順に実行される
    //usememoを使用すれば実行した関数と直接関係のある時だけ実行させることができる 
    //    *メモリに保存されているものを呼び出す(キャッシュ)
    //重い処理、パフォーマンスの向上
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);

    // const memo= useMemo(()=>{
    //     let i=0;
    //     //重い処理の例

    //     while(i<9100000){
    //         i++;
    //     }
    //     return count2*count2;
    // //第二引数に発火条件を書く
    // },[count2]);//count2が変更された時



    const StyleDiv=styled.div`
    text-align: center;
    button{
        margin: 5px;
    height: 25px;

    }`;

    return (
        <StyleDiv>
        <h2>UseState</h2>
        <button onClick={handleClick}>+</button>
        <p>{counts}</p>
    
    <p>--------------------------------------------------------------</p>

        <h2>useContext</h2>
        <p>{info.name}</p>
        <p>{info.age}</p>
        
    <p>--------------------------------------------------------------</p>

        <h2>useRef</h2>
        <input type="text"  ref={form}/>
        <button onClick={handlRef}>click</button>

        <p>--------------------------------------------------------------</p>

        <h2>useReducer</h2>
        <p>{state}</p>
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    
        <p>--------------------------------------------------------------</p>
    
        <h2>useMemo</h2>
        <div>カウント1：{count1}</div>
        <div>カウント2：{count2}</div>
        <button onClick={()=>setCount1(count1+1)}>count1+</button>
        <button onClick={()=>setCount2(count2+1)}>count2+</button>

        <p>--------------------------------------------------------------</p>



        </StyleDiv>
    );
};

export default App;

