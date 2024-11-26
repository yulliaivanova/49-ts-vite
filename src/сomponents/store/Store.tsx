import React, { useState } from "react";
import StoreCard from "../storeCard/StoreCard";
import { useFormik } from "formik"

interface IFormLimit {
    limit: string
}

export default function Store() {
  const [limit, setLimit] = useState <IFormLimit[]>([]);
  const getStoreCardLimit = async (limit:string) => {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    const data = await res.json();
    setLimit(data.limit);
  };

const formik = useFormik ({
    initialValues : {
        limit : " ", 
    } as IFormLimit, 
    onSubmit : (values: IFormLimit) =>{
        getStoreCardLimit(values.limit)
    }
})



  return (
    <div>
      <h3>Store</h3>
      <form onSubmit={formik.handleSubmit}> 
        <input  onChange ={formik.handleChange} type="number" name= "limit"  value={formik.values.limit}/>
      </form>

      {/* <StoreCard /> */}
    </div>
  );
}
