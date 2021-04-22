import React, { useEffect, useState } from "react";
import { BuilderCard } from "./BuilderCard";


export const BuilderList = () => {
    const [reload, setReload] = useState(false);
    const array = [1,2,3,4,5,6]
    
    useEffect(()=> {
        setReload(false)
    },[reload])
    return(
        <>
            <h1>Cocktail Builder</h1>
            {array.map(number => <BuilderCard   key={number}
                                                type={number}
                                                reload={reload} />)}
            <button onClick={()=>setReload(true)}>Shake it UP!!! &#x27f3;</button>
        </>
    )
}