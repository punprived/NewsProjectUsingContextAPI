const myreducer = (state,action) =>{
    switch(action.type){
        case "LOADING":
            return{
                ...state,
                isLoading:true
            }
        case "CALL_API":
            return {
                ...state,
                isLoading:false,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages,

        }

        case "REMOVE_POST":            
            return{
                ...state,
                hits:state.hits.filter(
                    (curEle)=>curEle.objectID !=action.payload
                ),
        }

        case "SEARCH_POST":
            return {
                ...state,
                query:action.payload
            }
           
        case "NEXT_PAGE":
            let nextPage = state.page + 1;
            if(nextPage >= 50){
                nextPage = 0;
            }
            return {
                ...state,
                page:nextPage
            }

        case "PREV_PAGE":
            let prevPage = state.page - 1;
            if(prevPage <=0){
                prevPage = 0;
            }
            return {
                ...state,
                page:prevPage
            }
    }
    return state;
}
export default myreducer;