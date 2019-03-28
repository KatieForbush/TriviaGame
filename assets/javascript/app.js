function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question00 = document.quiz.question00.value;
    var correct = 0;

    if (question1 == "ocean") {
        correct++;
    } 
    if (question2 == "12") {
        correct++;
    }
    if (question3 == "carson") {
        correct++;
    }
    if (question4 == "javelin") {
        correct++;
    }
    if (question5 == "coconut") {
        correct++;
    }
    if (question6 == "uses profanity") {
        correct++;
    }
    if (question7 == "unicorn") {
        correct++;
    }
    if (question8 == "frozen") {
        correct++;
    }
    if (question9 == "bison") {
        correct++;
    }
    if (question00 == "mule") {
        correct++;
    };

    var messages = ["WOW!", "hmmmmm maybe we can do better?", "OUCH!"];
    var pictures = ["images/WOW.gif", "images/soso.gif", "images/Ouch.gif"]
    
    var range;

        if (correct < 1) {
            range = 2;
        }
        if (correct > 0 && correct < 3) {
            range = 1;
        }
        if (correct > 9 && correct < 11) {
            range = 0;
        }

    



    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("messages").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
    document.getElementById("pictures").src = pictures[range];
};