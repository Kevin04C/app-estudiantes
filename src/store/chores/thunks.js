
import AppEstudiantesApi from "../../api/AppEstudiantesApi";
import { deleteChoress, editChoress, readChores, viewChores } from "./choresSlice";

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
export const editChores=(id,dataa)=>{

    return async(dispatch)=>{
        const {data} = await AppEstudiantesApi.patch(`/toDo/${id}`,dataa);
        const {success}=data;
        if (!!success) {
            const { data } = await AppEstudiantesApi.get('/toDo');
            const {todos}=data.data;
            dispatch(editChoress(todos));
        }else{
            console.log('error al actulizar el chore');
        }
    }
}

export const deleteChores=(id)=>{
    
    return async(dispatch)=>{
        const { data } = await AppEstudiantesApi.delete(`/toDo/${id}`);
        if (!!data.success) {
            const { data } = await AppEstudiantesApi.get('/toDo');
            const {todos}=data.data;
            dispatch(deleteChoress(todos));
        }else{
            console.log('error al eliminar el chore');
        }      
    }
}

export const completeChores=(id)=>{
    
    return async(dispatch)=>{
        const {data} = await AppEstudiantesApi.patch(`/toDo/${id}`,{
            completado:true
        });
        const {success}=data;
        if (!!success) {
            const { data } = await AppEstudiantesApi.get(`/toDo?completado=${success}`);
            console.log(data);
            
        }else{
            console.log('errorcito');
        }
    }
}
