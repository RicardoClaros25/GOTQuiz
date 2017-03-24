var questions = [
  {
    question:"How many Direwolves are left at the end of season 6?",
    answer: 2
  },
  {
    question: "Winter is...",
    answer: "comming"
  },
  {
    question: "What is the name of Arya's sword?",
    answer: "needle"
  },
  {
    question: "Who is the true father of Jon Snow?",
    answer: "Rhaegar Targaryen"
  },
  {
    question: "Who killed Oberyn Martell in a duel?",
    answer: "the mountain"
  },
  {
    question: "A girl is...",
    answer: "Arya Stark"
  },
  {
    question: "What is the name of Daenery's biggest dragon",
    answer: "Drogon"
  }
]

for(i = 0; i < questions.length; i++) {
  q = questions[i].question
  document.getElementById('question' + [i]).textContent = q
}

function testResults() {
  var correct = 0;
  var incorrect = 0;
  for(i = 0; i < questions.length; i++) {
    var answer = question[i].answer
    var guess = document.getElementById('answer' + [i]).value
    var questionSpot = document.getElementById('question' + [i])
    if(answer == guess) {
      questionSpot.className = 'correct'
      correct++
    } else {
      questionSpot.className = 'incorrect'
      incorrect++
    }
  }
  document.getElementById('correct').textContent = correct
  document.getElementById('incorrect').textContent = incorrect
}
