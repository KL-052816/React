

export default (state,action)=>{
    switch(action.type){
        case 'send':
            return action.payload
        default :
        return state
    }
}