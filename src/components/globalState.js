import { create } from 'zustand'
import axios from 'axios'
import { toast } from 'react-toastify'

const useStore = create((set) => ({
    companies: [],
    quantity: 10,

    setQuantity:(quantity)=>set({quantity}),
    fetchCompanies:(quantity)=>{
        axios.get(`https://fakerapi.it/api/v1/companies?_quantity=${quantity}`)
        .then(result=>{
            toast.success(`${quantity} companies added `)
            set({companies:result.data.data})
        })
        .catch(error=>{
            toast.error('API NO GOOD')
        })
    }

}))

export default useStore
