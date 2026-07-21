import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'
import { toast } from "react-toastify";

const CollectionPages = () => {
    const collection = useSelector(state => state.collection.items)
    const dispatch = useDispatch()
    const clearALL =()=>{
        dispatch(clearCollection())
        toast.error("Collection cleared!", {
          position: "top-right",
          autoClose: 2000,
        });

    }
  return (
    <div className='overflow-auto px-10 py-6'>
        {collection.length>0 ?<div className='flex justify-between mb-6'>
            <h2 className='text-2xl font-medium'>Your Collection</h2>
            <button
            onClick={()=>{
                clearALL()
            }}
            className='active:scale-95 transition  cursor-pointer bg-red-800 px-8 py-3 text-base font-medium rounded'>Clear Collection</button>
        </div> : <h2 className='text-2xl font-medium'>Collection is Empty</h2> }
        
        <div className='flex justify-start w-full flex-wrap gap-6'>
          {collection.map((item,idx) => {
            return <div key={idx}>
                <CollectionCard item={item}/>
            </div>
          })}
        </div>
    </div>
  )
}

export default CollectionPages
