var quizContainer = document.getElementById('quiz');
var submitAnswer= documnent.getElementById('answer');

var quizQuestions = [
    {
    Question: "What is the fear of the number 13 called?",
    answer: {
        a: "Triskaidekaphobia",
        b: "Ophidiophobia ",
        c: "Trypophobia ",
        d: " Thanatophobia"
    }
    correctAnswer: "a"
    }
        {
    Question: "What spanish artist said he would eat his wife when she died?",
    answer: {
        a: "Vincent Van Gogh",
        b: "Andy Warhol",
        c: "Salvador Dali",
        d: "Jackson Pollock"
    }
    correctAnswer: "c"
        }
    
];

function showQues(quizQuestions, quizContainer){
    var output = [];
    var answer;
    for (var i=0; i<questions.length; i++){
        answers = [];
        for(letter in quetions[i].answers){
            answer.push()
        }
    }
}


function buildQuiz(questions, quizContainer, answer, submitAnswer) {

function buildQuestion(){

}

function buildAnswer(questions, quizContainer, answer){

}

buildQuiz(questions, quizContainer);

submitAnswer.onclick = function(){
    buildAnswer(questions, quizContainer, answer)
}
}