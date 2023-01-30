export const getSearchViewForId=(id='',choresForm)=>{

   return choresForm.find((d)=>d._id.includes(id)) ;

}