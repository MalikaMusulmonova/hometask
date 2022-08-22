// 1-mashq
function addTwoToEveryNumberInTheList (list) {
    const newList = [];
    for (let i = 0; i < list.length; i++) {
        newList.push(list[i] + 2); 
    }
    return newList;
}
console.log(addTwoToEveryNumberInTheList([2, 4, 1]));


//2-mashq
function  findLargestNumber(list) {
    var arr = [5,100,7,63,77];
    var m = 0;
    for (let i = 0; i < list; i++) {
        if (arr[i] > m) {
             m = arr[i];
        }
        
    }
    return m;
}
console.log(findLargestNumber(5));

//3-mashq
function makeDogObjects() {

   const dog = {
        speak(){ return "woof"},
        name: "Fido",
        age: 6,
        color: "white"
    }
    return{};
}

console.log(makeDogObjects);

// 4-mashq
function getListOfNames(list) {
    for (let i = 0; i < list.length; i++) {
        const people = { 
            name: "Some Person", 
            jobTitle: "Boss Person", 
            age: 30 
        }
    }
    // list is an array of objects that looks like this
    // return a list of all the workers' names
  
    return ["Bobby Baratheon", "Jonny Snow", "Dani Targaryen"];
  }