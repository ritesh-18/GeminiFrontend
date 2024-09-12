import { createContext, useState } from "react";
import run from "../config/gemini"

export const Context=createContext();

const ContextProvider=(props)=>{
  
  const [input , setInput]=useState("")
  const[recentPromt, setRecentPromt]=useState("");
  const [prevPromt, setPrevPromt]=useState([])
  const [showResult, setShowResult]=useState(false)
  const[loading, setLoading]=useState(false)
  const [result, setResult]=useState("")


const onSent=async (prompt)=>{
  await run(prompt)
}
 onSent("what is react js")

    const contextValue={
       prevPromt,
       setPrevPromt,
       onSent,
       setRecentPromt,
       recentPromt,
       showResult,
       loading,
       result,
       input,
       setInput

    }

    return(
        <Context.Provider value={contextValue}>
             {props.childern}
            </Context.Provider>
    )

}