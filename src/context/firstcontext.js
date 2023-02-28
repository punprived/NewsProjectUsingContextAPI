import { createContext, useContext, useEffect, useReducer } from "react";
import myreducer from "../reducer/firstreducer";
const AppContext = createContext();
const initialState = {
    isLoading:true,
    query : "",
    nbPages: 0,
    page: 0,
    hits:[],
}
const APIURL = "https://hn.algolia.com/api/v1/search?";
//const APIURL = "https://api.pujakaitem.com/api/products";
const AppProvider = ({children})=>{    
    const [state,dispatch] = useReducer(myreducer,initialState);
    const fetchApiData = async (URL) =>{
        dispatch({type:"LOADING"});
        try {
            const getApiData = await fetch(URL);
            const data = await getApiData.json();
            dispatch({
                type:"CALL_API",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                  },
            });
        } catch (error) {
            console.log(error);
        }       
    }

    const removePost = (objectId)=>{
        dispatch({type:"REMOVE_POST",payload:objectId})
    }

    const searchPost = (searhVal)=>{
        dispatch({type:"SEARCH_POST",payload:searhVal})
    }

    // pagination
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };
    useEffect(()=>{
        fetchApiData(`${APIURL}query=${state.query}page=${state.page}`)
    },[state.query,state.page])

    return(
        <AppContext.Provider value={{...state,removePost,searchPost,getNextPage,getPrevPage}}>{children}</AppContext.Provider>
    )
} 

const useGlobalFirstContext = ()=>{
    return useContext(AppContext);
}

export {useGlobalFirstContext,AppProvider}