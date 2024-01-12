// functions in Redux that specify how the application's state changes in response to actions sent to the store.

export default (posts=[],action)=>{
  switch (action.type) {
    case 'fetchAll':
      return action.payload;
    case 'create':
      return [...posts,action.payload];
    case 'update':
      return posts.map((p)=> p._id===action.payload._id?action.payload:p);
    case 'delete':
      return posts.filter((p)=>p._id!==action.payload);
    default:
      return posts;
  }
}