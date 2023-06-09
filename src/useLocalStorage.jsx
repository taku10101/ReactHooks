import { useEffect } from 'react';
import { useState } from 'react'

export const useLocalStorage = (key,defaultValue) => {
    const[values,setValues]=useState(()=>{
        //keyに割り当てられたvalueを取得できる
        const jsonValue=window.localStorage.getItem(key);
        if(jsonValue!=null)
        //json.parse jsonを解析する関数
            return JSON.parse(jsonValue);
            else
                return defaultValue;
    });
    useEffect(()=>{
        //stringify json形式に直す
        window.localStorage.setItem(key, JSON.stringify(values));
    },[values,setValues])
};
