import { useEffect, useState } from "react";
import { make } from "../makeRequest";

const useAlex = (url)=>{

    const[data, setData] = useState(null)

    useEffect(()=>{
        const fetchData =async ()=>{
         try{
            const res= await make.get(url
          
            );
            setData(res.data.data)
           
           } catch(err){
        
            //    console.log(err)
           }
        };
         fetchData();
         },[url]);
         console.log(data)

         return{data};
};

export default useAlex