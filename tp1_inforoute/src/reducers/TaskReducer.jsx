// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


// Set state on account type
const TaskReducer = (state = null, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "ACCOUNT":
      if(action.payload.IsAdmin == "admin")
        return {...state, value: "admin"};
      else if (action.payload.IsAdmin == "user")
        return {...state, value: "user"};
    default:
      return {...state, value: ""};
  }
};

export default TaskReducer;
