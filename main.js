const Quiz_Questions = [{
    Question: "What is capital of India?",
    a: "Delhi",
    b: "Lucknow",
    c: "Jammu & Kasmir",
    d: "Chandigarh",
    ans: "answer1"

},
{
    Question: "What is the capital of Thailand?",
    a: "Phuket",
    b: "Ayutthaya",
    c: "Lampang",
    d: "Bangkok",
    ans: "answer4"

},
{
    Question: "What is the capital of Gujarat",
    a: "Surat",
    b: "Vadodara",
    c: "Gandhinagar",
    d: "Rajkot",
    ans: "answer1"

},
{
    Question: "What is the capital of Karnataka",
    a: "Mysore",
    b: "Banglore",
    c: "Hubli",
    d: "Yelahanka",
    ans: "answer2"
}

]
let score = 0;
let Questions = document.getElementById("Question");
let button_Submit = document.getElementById('Submit');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let optionArray = document.querySelectorAll('.option');
let span = document.getElementById('span-score');
let playAgain =document.getElementById('play_again')

console.log(optionArray)

let keyvalue = 0;
console.log(Questions)

const questionUpdate = () => {
    const data = Questions;
    Questions.innerHTML = Quiz_Questions[keyvalue].Question;
    option1.innerHTML = Quiz_Questions[keyvalue].a;
    option2.innerHTML = Quiz_Questions[keyvalue].b;
    option3.innerHTML = Quiz_Questions[keyvalue].c;
    option4.innerHTML = Quiz_Questions[keyvalue].d;

}
questionUpdate();

const checkAnswer = () => {
    let val;
    optionArray.forEach(element => {
        if (element.checked) {
            val = element.id;
        }
    })
    return val;

}
function diselect(){
    optionArray.forEach((element) => {
      
           element.checked = false;
       
    })

}

button_Submit.addEventListener('click', () => {

    let value = checkAnswer();
    console.log(value, Quiz_Questions[keyvalue].ans)
    if (value == Quiz_Questions[keyvalue].ans) {
        score++;
       }
       diselect();
    keyvalue = keyvalue + 1;

    if (keyvalue < Quiz_Questions.length)
        questionUpdate();
    else{
      let confirmation =  confirm("Are you sure you want to Submit the test ?")
      if(confirmation==true){
        span.innerHTML=score;
       
            document.getElementById('score-check').style.display ="block";
        
      }
    }

})
function backquestion(){
    keyvalue=0;
    questionUpdate();
    document.getElementById('score-check').style.display ="none";
}
