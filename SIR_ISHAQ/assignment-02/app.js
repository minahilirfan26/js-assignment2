                                    /*=========QUESTION-01=========*/
/*"Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it."*/

//function outerFunction (val){
//    return function (val2){
//        console.log(val + val2);
//    }
//}
//let innerFuntion = outerFunction(10);
//innerFuntion(5);



                                    /*=========QUESTION-02=========*/
/*"Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested."*/

//let array = [2,3,4,5,6,7,85,9]
//let noToSearch = 10;
//let i = 0;
//function arr(array){
//  if(noToSearch===array,[i]){
//    return true;
//  } else if(i < array.length-1){
//    i = i+1;
//    arr(array)
//  } else{
//    return false;
//  }
//}
//arr(array);
//
//if(arr()===true){
//  console.log("true")
//}
//else{
//  console.log("false")
//}


                                    /*=========QUESTION-03=========*/
/*Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.*/                                    

//let para = prompt("Write a //paragraph");
//let elemnt = document.createElement//("p");
//let tag = document.//getElementsByTagName("html")[0];
//
//function addPara(paragraph) {
//    elemnt.innerHTML = paragraph;
//    tag.appendChild(elemnt)
//    tag.insertAdjacentElement//("afterbegin", elemnt);
//    return elemnt;
//}
//console.log(addPara(para));


                                   /*=========QUESTION-04=========*/
/*Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.*/                                    

//let litItems = prompt("enter list items here!");
//let list = document.getElementsByTagName("body")[0];
//console.log(list);
//let unorder = document.createElement("ul");
//list.appendChild(unorder);
//list.insertAdjacentElement("afterbegin", unorder);
//let addList = document.createElement("li");
//
//function addPara(paragraph) {
//    unorder.innerHTML = paragraph;
//    unorder.appendChild(addList);
//   addList.innerHTML = paragraph   
//    
//}
//console.log(addPara(litItems));



                                   /*=========QUESTION-05=========*/
/*Write a function that changes the background color of an HTML element.The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color*/           

//let heading_1 = document.querySelector("#heading1");
//let heading_2 = document.querySelector("#heading2");
//function changes(id ,color){
//id.style.backgroundColor = color;
//}
//changes(heading_2,'green');


                                    /*=========QUESTION-06=========*/
/*Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store*/             

//localStorage.clear()
//let object = {
// name: "Minahil",
// age: 20,
// Fname: "Irfan",
// cast: "Shaikh",
// rollNo: 3454
//
//let object2 = {
// name: "Dua",
// age: 21,
// Fname: "Raza",
// cast: "Shaikh",
// rollNo: 3454
//
//function SaveObject(key, val) {
// let newObject = JSON.stringify(val);
// localStorage.setItem(key,newObject)
//}
//SaveObject("data of obj", object);
// SaveObject("data of obj2", object2)



                                    /*=========QUESTION-07=========*/
/*Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object*/                                    

//ocalStorage.clear();
//et object1 = {
//name: "Minahil",
//age: 20,
//Fname: "Irfan",
//cast: "Shaikh",
//rollNo: 3454
//
//
//et object2 = {
//name: "Dua",
//age: 21,
//Fname: "Raza",
//cast: "Shaikh",
//rollNo: 3454
//
//
//et i = 0;
//function saving_object(key , value){
//      i = i+ 1
//       let new_object = JSON.stringify(value);
//       localStorage.setItem(key,new_object);
//       console.log("CONVERTED OBJECT  ",i," INTO STRING FORM \n\n", new_object)
//   }
//
//let j =0;
//function retrieve(object_name){
//    j = j+1;
//    let retrieved_object = JSON.parse(localStorage.getItem(object_name));
//    console.log("CONVERTED OBJECT  ",j," INTO OBJECT FORM FROM STRING FORM \n\n", retrieved_object)
//}
//saving_object("data of User1",object1);
//retrieve('data of User1')
//saving_object("data of user2",object2);
//retrieve('data of user2')
 

                                    /*=========QUESTION-08=========*/
/*Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.*/

//function ObjectStore(text) {
//  for (let prop in text) {
//      localStorage.setItem(prop, JSON.stringify(text[prop]));
//    }
//     let newObject = {};
//    for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//      newObject[key] = JSON.parse(localStorage.getItem(key));
//    }
//    return newObject;
//  }
//let val = {
//    name: "Minahil",
//    age: 20,
//    Fname: "Irfan",
//    cast: "Shaikh",
//    rollNo: 3454
// };
//let newObject1 = ObjectStore(val);
//  console.log(newObject1);