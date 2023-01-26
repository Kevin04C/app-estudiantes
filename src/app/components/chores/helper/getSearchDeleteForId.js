
const tareas=JSON.parse(localStorage.getItem('tareas'));

export const getSearchDeleteForId = (id) => {

    return tareas.filter((d)=>d.ide !==id) ;
}
