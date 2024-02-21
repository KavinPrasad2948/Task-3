let obj1 = {name: "Person1", age: 5};
let obj2 = {age: 5, name: "Person1"};
  
  let flag = true;
  if(Object.keys(obj1).length=== Object.keys(obj2).length){
    for (let key in obj1){
      if(obj1[key]!==obj2[key]){
        
      }
      }

      }
    
  
  if (flag){
      console.log("Objects are equal");
  }else{
    console.log("Objects are not equal");
  }
