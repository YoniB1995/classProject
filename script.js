
//  תרגיל מסכם - 1
//  class Veichle {
//      numberWheels;
//      carCapacity;
//      carColor;
//      constructor(numberWheels,carCapacity,carColor){
//          this.numberWheels = numberWheels;
//          this.carCapacity = carCapacity;
//          this.carColor = carColor;
//      }
//      get details(){
//          return this.getCarDetails();
//      }
//      getCarDetails(){
//          console.log( `${this.numberWheels},${this.carCapacity},${this.carColor}`);
        
//      }

// }
// class VeichleType extends Veichle{ 
//     carType;
//     constructor(numberWheels,carCapacity,carColor,carType){
//         super(numberWheels,carCapacity,carColor);
//         this.carType= carType;
//     }
//     get all(){
//         return this.allInOne();
//     }
//     allInOne(){
//         console.log( `${newTypeMotorcycle.carType} + ${newTypeYacht.carType} + ${newTypeTruck.carType}`)
//     }
// }


// let motorcycle = new Veichle(2,150,"black");
// let yacht = new Veichle(4,2500,"gold");
// let truck = new Veichle(8,1750,"white");

// motorcycle.getCarDetails(); // מחזירה את הפרטים בשורה אחת

// let newTypeMotorcycle = new VeichleType(2,150,"black","crusier");
// let newTypeYacht = new VeichleType(4,2500,"gold","Hybrid");
// let newTypeTruck = new VeichleType(8,1750,"white","Tanker");


// console.log(`The chosen types of the selected cars are : Motorcycle = ${newTypeMotorcycle.carType} , Yacht = ${newTypeYacht.carType} , Truck = ${newTypeTruck.carType}`); 


/*==============================================================================*/
//משימה 2
// class Veichle {
//      numberWheels;
//      carCapacity;
//      carColor;
//      constructor(numberWheels,carCapacity,carColor){
//          this.numberWheels = numberWheels;
//          this.carCapacity = carCapacity;
//          this.carColor = carColor;
//      }
//      get details(){
//          return this.getCarDetails();
//      }
//      getCarDetails(){
//          console.log( `${this.numberWheels},${this.carCapacity},${this.carColor}`);
        
//      }

// }

// class VeichleType extends Veichle{ 
//     carType;
//     constructor(numberWheels,carCapacity,carColor,carType){
//         super(numberWheels,carCapacity,carColor);
//         this.carType= carType;
//     }
//      get all(){
//         return this.toUpper();
//     }
//     toUpper(){
//         let getUpperCase = this.carType.toUpperCase(); // משימה 2
//         return getUpperCase;
//     }
// }

// let motorcycle = new Veichle(2,150,"black");
// let yacht = new Veichle(4,2500,"gold");
// let truck = new Veichle(8,1750,"white");
// //  added Type
// let newTypeMotorcycle = new VeichleType(2,150,"black","crusier")
// let newTypeYacht = new VeichleType(4,2500,"gold","Hybrid");
// let newTypeTruck = new VeichleType(8,1750,"white","Tanker");


// console.log(newTypeMotorcycle.toUpper()) // משימה 2

/*==============================================================================*/
//משימה 3
// class Veichle {
//      numberWheels;
//      carCapacity;
//      carColor;
//      constructor(numberWheels,carCapacity,carColor){
//          this.numberWheels = numberWheels;
//          this.carCapacity = carCapacity;
//          this.carColor = carColor;
//      }
//      static getNumObj(){
//         let carOne = motorcycle.carCapacity;
//         let carTwo = yacht.carCapacity;
//         let carThree = truck.carCapacity;
//         return Math.max(carOne,carTwo,carThree) //  מקבלת מספר אובייקטים של נפח מנוע
//     }

// }

// let motorcycle = new Veichle(2,150,"black");
// let yacht = new Veichle(4,2500,"gold");
// let truck = new Veichle(8,1750,"white");

// console.log(Veichle.getNumObj()) // האובייקט בעל הנפח הכי גבוה

/*==============================================================================*/
//משימה 4 -יצירת טופס

class Veichle {
    carType;
    numberWheels;
    carCapacity;
    carColor;
    constructor(carType,numberWheels,carCapacity,carColor){
        this.carType = carType;
        this.numberWheels = numberWheels;
        this.carCapacity = carCapacity;
        this.carColor = carColor;
    }
}

let x = document.getElementById('sendDetails');
x.onclick = function hello(){
    newCar = new Veichle(carNameInput.value,numWheelsInput.value,carColorInput.value,capacityInput.value)
    console.log(newCar) // הזנת הפרטים לקונסול

}


let y = document.getElementById('tableMaker');
y.onclick = function one(){
let carName = carNameInput.value;
    let numberWheels = numWheelsInput.value;
    let carCapacity = carColorInput.value;
    let carColor = capacityInput.value;
tableText.innerHTML += `<table><tr><td>${carName}</td><td>${numberWheels}</td><td>${carCapacity}</td><td>${carColor}</td></tr></table>`;
}