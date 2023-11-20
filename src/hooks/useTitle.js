import { useEffect } from "react";

const useTitle = title =>{
    useEffect(() =>{
        document.title = `StoreCode | ${title}`;
    }, [title])
};

export default useTitle;