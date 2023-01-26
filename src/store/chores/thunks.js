import AppEstudiantesApi from "../../api/AppEstudiantesApi";
import { completeChores,deleteChoress, editChores, readChores, viewChores } from "./choresSlice";

export const startChores=(tareas)=>{
    return async(dispatch)=>{
        try {
            const { data } = await AppEstudiantesApi.post('/toDo', tareas);
            const {todo}=data.data;
            dispatch(readChores(todo));
          } catch (error) {
            
          }
        };
    };

export const readChoress=()=>{

    return async(dispatch)=>{
        const { data } = await AppEstudiantesApi.get('/toDo');
        const {todos}=data.data;
        dispatch(viewChores(todos)); 
    
    }
}
export const getEdit=(id)=>{

    return async(dispatch)=>{
        dispatch(editChores);


    }
}

export const deleteChores=(id)=>{
    
    return async(dispatch)=>{
        const { data } = await AppEstudiantesApi.delete('/toDo',id);
        const {todos}=data.data;
        dispatch(deleteChoress(todos));
        
        
    }
}

export const getComplete=()=>{
    
    return async(dispatch)=>{
        dispatch(completeChores);
    }
}
