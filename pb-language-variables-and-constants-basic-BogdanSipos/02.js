// const {a, ... others}= {a:1 ,b:2 ,c:3};
///console.log(others); 

//const [first, ... others2] = [1,2,3];
//console.log(others2); 


const person = {
    name: "Molham",
    age: 30,
    occupation: "Web Developer",
    isMarried: true,
  };

  const {age,name, ...others}=person;
  
  console.log(others); 
  console.log(age); 
  console.log(name); 