import {createStore,combineReducers} from 'redux'

const initailForm={
    name:'',
    surname:'',
    id:'',
    Major:'',
    GPA:''
}
const formReducer = (state=initailForm,action)=>{
    switch(action.type){
        case 'CHANG_NAME':
        return{...state,name: action.name}
        case 'CHANG_SURNAME':
        return{...state,surname: action.surname}
        case 'CHANG_ID':
        return{...state,id: action.id}
        case 'CHANG_MAJOR':
        return{...state,Major: action.Major}
        case 'CHANG_GPA':
        return{...state,GPA: action.GPA}
        default:
        return state
    }
}

const studentReducer = (state=[],action)=>{
switch(action.type)
{
    case 'GET_STUDENT': return action.state
    case 'ADD_STUDENT': return [...state,action.student] 
    case 'DELETE_STUDENT':
         return state.filter(student => student.no !== +action.no)
    case 'UPDATE_STUDENT': return state.map(student=>{
        if(+student.no===+action.no )
        return action.student
        else
            return student
    })     
    
    default: return state;
}
}
const reducers = combineReducers({
    student: studentReducer,
    form: formReducer
})
export const store = createStore(reducers)