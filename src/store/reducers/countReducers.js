let counts= {
  countOne : 1,
  countTwo : 1};
export default function(state=counts, action){
  switch (action.type) {
    case "IncrementScreenOne": state = {
      ...state,
    countOne: counts.countOne++,
};
      break;
    case "IncrementScreenTwo": state = {
      ...state,
    countTwo: counts.countTwo++,
};
    break;
  }
  return state;
}