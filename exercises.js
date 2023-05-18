// exercise 1

function equalNumberCheckFunction() {
    const numberCheck = document.getElementById("equalOrNot").value
    console.log(numberCheck)
    if(numberCheck % 2 === 0){
        document.getElementById("p1").innerHTML = "equal number!"
    }else{
        document.getElementById("p1").innerHTML = "not an equal number!"
    }
}




//exercise 2

function averageOfNumbers(){

    const firstAverageNumber = Number(document.getElementById("averageNumbersInput1").value)
    const secondAverageNumber = Number(document.getElementById("averageNumbersInput2").value)
    const thirdAverageNumber = Number(document.getElementById("averageNumbersInput3").value)
    const forthAverageNumber = Number(document.getElementById("averageNumbersInput4").value)
    console.log(firstAverageNumber, secondAverageNumber, thirdAverageNumber, forthAverageNumber)
    let averageOfNumbersResult = ((firstAverageNumber + secondAverageNumber + thirdAverageNumber + forthAverageNumber) / 4);
    console.log(averageOfNumbersResult)
    document.getElementById("p2").innerHTML = (averageOfNumbersResult)

    

}



//exercise 3

function bestThrowerResult(){

    const firstThrowerName = document.getElementById("firstThrowerName").value
    const firstThrowerResult = Number(document.getElementById("firstThrowerResult").value)
    const secondThrowerName = document.getElementById("secondThrowerName").value
    const secondThrowerResult = Number(document.getElementById("secondThrowerResult").value)
    console.log(firstThrowerName, firstThrowerResult, secondThrowerName, secondThrowerResult)
    if(firstThrowerResult > secondThrowerResult){
        document.getElementById("p3").innerHTML = (firstThrowerName)
        document.getElementById("p3a").innerHTML = (firstThrowerResult)
    }else{
        document.getElementById("p3").innerHTML = (secondThrowerName)
        document.getElementById("p3a").innerHTML = (secondThrowerResult)

    }

}















//exercise 4 
function printHoursWelcome() {
    const hourInput = document.getElementById("hourOfDay").value
    if(hourInput <= 11 && hourInput >= 5)
        document.getElementById("p4").innerHTML = ("good morning")
        else if(hourInput <= 17 && hourInput >= 12)
        document.getElementById("p4").innerHTML = ("good afternoon")
        else if(hourInput <= 23 && hourInput >= 18)
        document.getElementById("p4").innerHTML = ("good evening")
    else{ 
        document.getElementById("p4").innerHTML = ("please enter a valid number")
    }

}












//exercise 5

function printTrainProfit(){
    const numberOfTrainsInput = document.getElementById("numberOfTrains").value
    const timeInDayInput = document.getElementById("timeInDay").value
    const salaryForDriverInput = document.getElementById("salaryForDriver").value
    console.log(numberOfTrainsInput, timeInDayInput, salaryForDriverInput)
        if(timeInDayInput === "morning"){
            const taxesMorning = ((((numberOfTrainsInput * 120) * 6.60) - salaryForDriverInput) * 0.17) 
            console.log((((numberOfTrainsInput * 120) * 6.60) - salaryForDriverInput) - taxesMorning)
        }
        else if(timeInDayInput === "afternoon"){
            const taxesAfternoon = ((((numberOfTrainsInput * 108) * 6.60) - salaryForDriverInput) * 0.17)
            console.log((((numberOfTrainsInput * 108) * 6.60) - salaryForDriverInput) - taxesAfternoon)
        }
        else if(timeInDayInput === "evening"){
            const taxesEvening = ((((numberOfTrainsInput * 84) * 6.60) - salaryForDriverInput) * 0.17)
            console.log((((numberOfTrainsInput * 84) * 6.60) - salaryForDriverInput) - taxesEvening)
        }
        
        
    }











//exercise 6

function carPriceEveryMonth(){
    const carPrice = document.getElementById("car_price").value
    const numberOfPayments = document.getElementById("number_of_payments").value
    console.log(carPrice , numberOfPayments)
    if(carPrice , numberOfPayments){
       let carPriceAfterDiscount = carPrice - (carPrice * 0.05)
       document.getElementById("p6").innerHTML = (carPriceAfterDiscount)
       let MoneyEveryMonth = carPriceAfterDiscount / numberOfPayments
       document.getElementById("p6a").innerHTML = (MoneyEveryMonth)
    }
}











//exercise 7


function passengers_taxi(){
    const numberOfPassengers = document.getElementById("number_of_passengers").value
    if(numberOfPassengers >= 12){
        document.getElementById("p7").innerHTML = ("taxi full drives away")
        document.getElementById("p7a").innerHTML = (numberOfPassengers - 12)
    }
    else if(numberOfPassengers < 12){
        document.getElementById("p7").innerHTML = ("taxi too empty, can't drive")
        
    }


    
    }




//exercise 8
function studentsTripNeeds(){
    const numberOfStudents = document.getElementById("number_of_students").value
    if(numberOfStudents >= 30){
    let numberOfGuards = Math.floor(numberOfStudents / 30)
    let numberOfParamedics = Math.floor(numberOfStudents / 30)
    document.getElementById("p8").innerHTML = (numberOfGuards + " guards")
    document.getElementById("p8a").innerHTML = (numberOfParamedics + " paramedics")

}

    if(numberOfStudents >= 50) {
        let numberOfFirstAid = Math.floor(numberOfStudents / 50)
        document.getElementById("p8b").innerHTML = (numberOfFirstAid + " first aid kit")

    }


}









//exercise 9

function fooFunction(){
    const foo = document.getElementById("foo_input").value
    if(foo === "Thursday" || foo === "thursday" || foo === "5")
    console.log("Thursday! Yay!")

}







//exercise 10

function bmiFunction(){
    const bmi = document.getElementById("bmi_input").value
    console.log(bmi)
    if(bmi <= 18){
        document.getElementById("p10").innerHTML = ("bmi too low!")
        }
        else if(bmi >= 25){
            document.getElementById("p10").innerHTML = ("bmi too high!")
        

        }
        else if(bmi > 18 && bmi < 25){
            document.getElementById("p10").innerHTML = ("bmi is good!")
        }

    else{
        document.getElementById("p10").innerHTML = ("insert valid number")

    }

}








//exercise 11


//הוראות לא מובנות






//exercise 12

function sqrFunction(){
    const sqr100 = 100
    document.getElementById("p12").innerHTML = Math.sqrt(sqr100)

}





//exercise 13

function vanishButton(){
    const buttonGone = document.getElementById("disappear_button")
    buttonGone.style.display = "none"
}






//exercise 14

function openPageButton(){
    document.getElementById("open_new_window_bttn").addEventListener("click", openPageButton);
    const urlButton = "https://google.com"
    window.open(urlButton)

}




//exercise 15
function currentDateFunction(){
    const currentDate = new Date()
    document.getElementById("p15").innerHTML = currentDate

}



//exercise 16
function printHello(){
    const helloNumber =  document.getElementById("hello_number_input").value
    document.getElementById("p16").innerHTML = ("hello ").repeat(helloNumber)
}




//exercise 17
function enterInfoForFunction(){
    let infoEl = document.getElementById("enter_info_input").value
    for(i = 1; i <= 10; i++){
        console.log(infoEl)
        document.getElementById("p17").innerHTML += infoEl + " " 

    }
}





//exercise 18
function biggerNumberFunction(){
    let firstNumber =  Number(document.getElementById("enter_number_input1").value)
    let secondNumber =  Number(document.getElementById("enter_number_input2").value)
    if(firstNumber > secondNumber){
        alert(firstNumber)}
        else if(secondNumber > firstNumber){
        alert(secondNumber)
        }

}







//exercise 19
function amountOfPay(){
    let amountInput =  Number(document.getElementById("amountInput").value)
    let tipInput =  Number(document.getElementById("tipInput").value)
    let totalEl = document.getElementById("p19")
    let tipEl = document.getElementById("p19a")
    let total = amountInput + amountInput * (tipInput / 100)
    totalEl.innerHTML = total
    tipEl.innerHTML = amountInput * (tipInput / 100)
}




//exercise 20
let currentNumber = document.getElementById("p20");
let openNumber = 0
currentNumber.innerHTML = openNumber

let increaseButton = document.getElementById("increase_button");
let decreaseButton = document.getElementById("decrease_button");
let resetButton = document.getElementById("reset_button");

increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);
resetButton.addEventListener("click", reset);
function increase(){
    openNumber++;
    currentNumber.innerHTML = openNumber;
  }
function decrease(){
    openNumber--
    currentNumber.innerHTML = openNumber;

}
function reset(){
    openNumber = 0
    currentNumber.innerHTML = openNumber;
}

//exercise 21
const quotes = []
quotes[0]= "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa"
quotes[1]= "When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt"
quotes[2]= "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead"
quotes[3]= "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson"
quotes[4]= "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt"
quotes[5]= "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin"
quotes[6]= "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller"
quotes[7]= "It is during our darkest moments that we must focus to see the light. -Aristotle"
quotes[8]= "Whoever is happy will make others happy too. -Anne Frank"
quotes[9]= "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson"


randomQuote = Math.floor(Math.random() * quotes.length)
document.getElementById("p21").innerHTML = (quotes[randomQuote])



//exercise 22
function studentsConsole(){
    const students = ["avi", "yuri", "david", "shlomi", "moshe"]
    console.log(students)

}


//exercise 23
function booksList(){
    const books = ["first book", "second book"]
    books.push(document.getElementById("new_book_input").value)
    document.getElementById("p23").innerHTML = books
}

//exercise 24

//same exercise as 9
