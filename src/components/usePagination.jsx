import { useEffect } from "react"
import { useState } from "react"

const usePagination = (url, itemsPerPage) => {
  const [isLoading, setIsLoading] =  useState(false)
  const [totalPages, setTotalPages] = useState(1)
  const [CurrentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState([])
  const [category, setCategory] = useState()

  
  useEffect(()=> {
  
    const fetchData = async () => {
        setIsLoading(true)
        const response = await fetch(`${url}page[limit]=${itemsPerPage}&page[offset]=${itemsPerPage*(CurrentPage-1)}${category && "&filter[categories]="+category}`)
        const resData = await response.json()
        setData(resData.data)
        setTotalPages(Math.ceil(resData.meta.count/itemsPerPage))  
        setIsLoading(false)
        
    }
    fetchData()

  },[totalPages,itemsPerPage,CurrentPage])

  return{isLoading, totalPages, CurrentPage, data, setCurrentPage}
}

export default usePagination