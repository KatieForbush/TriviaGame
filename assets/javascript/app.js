var quizContainer = document.getElementById('quiz');
var submitAnswer= documnent.getElementById('answer');
var submitButton = document.getElementById('submit');


function buildQuiz(quizQuestions, quizContainer, submitAnswer) {

function buildQuestion(quizQuestions, quizContainer);{

    var quizQuestions = [
        {
        Question: "What is the fear of the number 13 called?",
        answer: {
            a: "Triskaidekaphobia",
            b: "Ophidiophobia ",
            c: "Trypophobia ",
            d: " Thanatophobia"
        },
        correctAnswer: "a"
        },
            {
        Question: "What spanish artist said he would eat his wife when she died?",
        answer: {
            a: "Vincent Van Gogh",
            b: "Andy Warhol",
            c: "Salvador Dali",
            d: "Jackson Pollock"
        },
        correctAnswer: "c"
            }
        
    ];
    function showQues(quizQuestions, quizContainer){
        var output = [];
        var answers;
        for (var i=0; i<quizQuestions.length; i++){
            answers = [];
            for(letter in quizQuestions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + quizQuestions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + quizQuestions[i].quizQuestions + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
            quizContainer.innerHTML = output.join('');
        }
        showQues(quizQuestions, quizContainer);

}

function buildAnswer(quizQuestions, quizContainer, answer);{

    var answerContainer = quizContainer.querySelectorAll('answers');

    var userAnswer = '';

    var numCorrect = 0;

    for( var i = 0; i < quizQuestions.lengeth; i++);

    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

    if(userAnswer===quizQuestions[i].correctAnswer){
        numCorrect++;
        answerContainer[i].style.color='lightgreen';
    }
    else{
        answerContainer[i].style.color='red';
    }
    showQues(quizQuestions, quizContainer);

    submitAnswer.onclick = function(){
        buildAnswer(quizQuestions, quizContainer, answer)
    }

}
}