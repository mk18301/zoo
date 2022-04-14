// Create Zoo object and assign values
const zoo = {
    name: "World Zoo",
    capacity: 250,
    numberofguest : 57,
    animals: [],
    numberofanimals: 4,
};
// Added baby field to the animal objects
// Perry
const Perry = {
    Name: "Perry",
    Type: "Platypus",
    Age: 2,
    Gender: "Female",
    Weight: 3.2,
    IsPregnant: true,
    Baby: "Baby Perry"
};

// Harry
const Harry = {
    Name: "Harry",
    Type: "Hummingbird",
    Age: 2,
    Gender: "Male",
    Weight: 3.2,
    IsPregnant: false,
    Baby: null
};

// Sherry
const Sherry = {
    Name: "Sherry",
    Type: "Shark",
    Age: 2,
    Gender: "Female",
    Weight: 852,
    IsPregnant: true,
    Baby: "Baby Sherry"
};

// Cherry
const Cherry = {
    Name: "Cherry",
    Type: "Chimpanzee",
    Age: 2,
    Gender: "Female",
    Weight: 3.2,
    IsPregnant: true,
    Baby: "Baby Cherry"
};

// Created a Zoo class with a staticfield with a constructor containing information such as the number of guest
class Zoo {
    static staticField
    constructor(name, capacity, numberofguest, numberofanimals){
        this.name = name;
        this.capacity = capacity;
        this.numberofguest = numberofguest;
        this.numberofanimals = numberofanimals;
    }
}

// Made an array for the values of the zoo
const worldZoo = new Zoo ("World Zoo", 250, 57, 4)

// Created a add animal function
// Made both the add and delete function update the number of animals
document.getElementById("addAnimal").addEventListener("click", addAnimals)

function addAnimals(){
    console.log(worldZoo.numberofanimals++);
    var x = document.getElementById("numberofanimals")
    x.innerHTML = "Number of animals:" + worldZoo.numberofanimals;
}



 // Created a function to admit a guest
 document.getElementById("myBtn").addEventListener("click", guestAdd);

function guestAdd() {
    var x = document.getElementById("numberofguest");
      
    if (zoo.numberofguest<250) {
        console.log(zoo.numberofguest++);
        console.log("zoo values",zoo);
        alert("There are now"+ " " +zoo.numberofguest+ " "+"guest here");
        x.innerHTML = "Number of guest:" + zoo.numberofguest;
    } else {
        console.log("zoo full")
        alert("the zoo is full")
    }
}

function guestSubmit() {
    var x = document.getElementById("numberofguest");
      
    if (zoo.numberofguest<250) {
        console.log(zoo.numberofguest++);
        console.log("zoo values",zoo);
        alert("There are now"+ " " +zoo.numberofguest+ " "+"guest here");
        x.innerHTML = "Number of guest:" + zoo.numberofguest;
        document.getElementById("clickMe").addEventListener("click",dontGo);
    } else {
        console.log("zoo full")
        alert("the zoo is full")
    }
}

// created an Animals class
class Animals {
    static staticField
    constructor(name, type, age, gender, height, isPregnant, MoveDistance, baby){
        this.name = name;
        this.type = type;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.isPregnant = isPregnant;
        this.MoveDistance = MoveDistance
        this.baby = baby
    }
    // Created a move method using the MoveDistance
    move(){
        return this.MoveDistance; 
    }
}



const perry = new Animals("Perry", "Platypus", 2, "Female", 3.2, false, 25, "Baby Perry")
const harry = new Animals("Harry", "Hummingbird", 2, "Male", 3.2, false, 5, null)
const sherry = new Animals("Sherry", "Shark", 2, "Female", 852, false, 58, "Baby Sherry")
const cherry = new Animals("Cherry", "Chimpanzee", 2, "Female", 3.2, false, 12, "Baby Cherry")

  var data = { 
    "Animals": {
            "animalList": [{
                "animal":  {"type":"Platypus", "name":"Perry", "age":2, "gender":"Female", "weight":"3.2"}
            }, {
                "animal": {"type":"Hummingbird", "name":"Harry", "age":"2", "gender":"Male", "weight":"3.2"}
            }, {
                "animal": {"type":"Shark", "name":"Sherry", "age":"2", "gender":"Female", "weight":"852"}
            },{
                "animal": {"type":"Chimpanzee", "name":"Cherry", "age":"2", "gender":"Female", "weight":"3.2"}
            }]
        }
    }
    

    var AnimalsList = document.getElementById("");
    
    data.Animals.animalList.forEach(function(element) {
        animalList.insertAdjacentHTML( 'beforeend',"<li>" + element.animal.type+" </li>");
        animalList.insertAdjacentHTML( 'beforeend',"<li>" + "Name" + " : " + element.animal.name+ " </li>");
        animalList.insertAdjacentHTML( 'beforeend',"<li>" + "Age" + " : " + element.animal.age+ " </li>");
        animalList.insertAdjacentHTML( 'beforeend',"<li>" + "Gender" + " : " + element.animal.gender+ " </li>");
        animalList.insertAdjacentHTML( 'beforeend',"<li>" + "Weight" + " : " + element.animal.weight+ " </li>");

    });