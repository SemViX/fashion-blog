import { useState } from "react"

export function usePagination() {
    const pageNumber = [1, 2, 3, 4, 5, 6, 7, 8]
    const [currentPage, setCurrentPage] = useState(1)

    const setPrevPage = () => {
        if (currentPage > 1){
            setCurrentPage((prev) => prev - 1)
        }
    }

    const setNextPage = () => {
        if (currentPage < pageNumber.length){
            setCurrentPage((prev) => prev + 1)
        }
    }

    return {pageNumber, currentPage, setCurrentPage, setPrevPage, setNextPage}
}