
import AppEstudiantesApi from "../../api/AppEstudiantesApi";
import { completeChoress, deleteChoress, editChoress, readChores, viewChores, viewCompleteChoress } from "./choresSlice";

export const startChores=(tareas)=>{
    return async(dispatch)=>{
        try {
            const { data } = await AppEstudiantesApi.post('/to-do', tareas);
            const {todo}=data.data;
            dispatch(readChores(todo));
          } catch (error) {
            
          }
        };
    };

export const readChoress=()=>{

    return async(dispatch)=>{
        const { data } = await AppEstudiantesApi.get('/to-do?completed=false');
        const {todoCompleted}=data.data;
        dispatch(viewChores(todoCompleted)); 
    
    }
}
export const editChores=(id,dataa)=>{

    return async(dispatch)=>{
        const {data} = await AppEstudiantesApi.patch(`/to-do/${id}`,dataa);
        const {success}=data;
        if (!!success) {
            const { data } = await AppEstudiantesApi.get('/to-do?completed=false');
            const {todoCompleted}=data.data;
            dispatch(editChoress(todoCompleted));
        }else{
            console.log('error al actulizar el chore');
        }
    }
}

export const deleteChores=(id)=>{
    
    return async(dispatch)=>{
        const { data } = await AppEstudiantesApi.delete(`/to-do/${id}`);
        if (!!data.success) {
            const { data } = await AppEstudiantesApi.get('/to-do?completed=false');
            const {todoCompleted}=data.data;
            dispatch(deleteChoress(todoCompleted));
        }else{
            console.log('error al eliminar el chore');
        }      
    }
}

export const completeChores=(id)=>{
    
    return async(dispatch)=>{
        const {data} = await AppEstudiantesApi.patch(`/to-do/${id}`,{
            completed:true
        });
        const {success}=data;
        if (!!success) {
            const { data } = await AppEstudiantesApi.get(`/to-do?completed=${success}`);
            const {todoCompleted}=data.data;
            dispatch(completeChoress(todoCompleted));
            const { data:datito } = await AppEstudiantesApi.get(`/to-do?completed=false`);
            const {todoCompleted:completito}=datito.data;
            dispatch(deleteChoress(completito))
            
        }else{
            console.log('errorcito');
        }
    }
}

export const viewCompleteChores=()=>{
    
    return async(dispatch)=>{
        const { data } = await AppEstudiantesApi.get(`/to-do?completed=true`);
            //console.log(data);
            const {todoCompleted}=data.data;
        dispatch(viewCompleteChoress(todoCompleted));
    }
}
