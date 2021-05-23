let questions = [{
  question: "Câu 1. Trong Javascript sự kiện OnUnload thực hiện khi nào?",
  choices: ["Khi chương trình bắt đầu chạy", "Khi click chuột", "Khi kết thúc 1 chương trình", "Khi di chuyển chuột qua"],
  correctAnswer: 2
}, {
  question: "Câu 2. Trong Javascript sự kiện Onblur thực hiện khi nào?",
  choices: ["Khi một đối tượng trong form mất focus", "Khi một đối tượng trong form có focus", "Khi di chuyển con chuột qua form", "khi click vào nút lệnh"],
  correctAnswer: 0
}, {
  question: "Câu 3. Trong Javascript sự kiện OnMouseOver thực hiện khi nào?",
  choices: ["Khi một đối tượng trong form mất focus", "Khi một đối tượng trong form có focus", "Khi di chuyển con chuột qua một đối tượng trong form", "khi click vào nút lệnh"],
  correctAnswer: 2
}, {
  question: "Câu 4. Trong Javascript sự kiện Onclick xảy ra khi nào?",
  choices: ["Khi một đối tượng trong form mất focus", "Khi một đối tượng trong form có focus", "Khi click  chuột vào một đối tượng trong form", "khi click vào nút lệnh"],
  correctAnswer: 3
}, {
  question: "Câu 5. Trong Javascript sự kiện Onchange thực hiện khi nào?",
  choices: ["Khi một đối tượng trong form mất focus", "Khi một đối tượng trong form có focus", "Xảy ra khi giá trị của một trường trong form được người dùng thay đổi", "khi click vào nút lệnh"],
  correctAnswer: 2
}];

let questionCounter = 0; //Theo dõi số câu hỏi
let selections = []; //Mảng chứa các lựa chọn của người dùng
let quiz = $('.quiz'); //đối tượng div
let next = $('#next');
let prev = $('#prev');
let replay = $('#replay');


//autorun javascript
(function () {

  // Hiển thị câu hỏi ban đầu
  displayNext();

})();

function goNext() {
  choose();
  // Nếu không có lựa chọn người dùng, tiến trình sẽ bị dừng
  if (isNaN(selections[questionCounter])) {
    alert('Vui lòng chọn đáp án');
  } else {
    questionCounter++;
    displayNext();
  }
};

function goPrev() {
  choose();
  questionCounter--;
  displayNext();
}

function goReplay() {
  location.reload();
}

function choose() {
  let radio = $('input[name="answer"]:checked');
  if (typeof (radio) != 'undefined' && radio != null) {
    selections[questionCounter] = radio.val();
  }

}

// Hiển thị phần tử được yêu cầu tiếp theo
function displayNext() {
  let question = $('#question');
  let wrong = $('#wrong');
  if (typeof (question) != 'undefined' && question != null) {
    question.remove();
  }

  if (typeof (wrong) != 'undefined' && wrong != null) {
    wrong.remove();
  }

  if (questionCounter < questions.length) {
    let nextQuestion = createQuestionElement(questionCounter);
    quiz.append(nextQuestion);

    // Điều khiển hiển thị nút 'trước'
    if (questionCounter >= 1) {
      prev.show();
      next.show();
      replay.hide();
    } else if (questionCounter == 0) {

      prev.hide();
      next.show();
      replay.hide();
    }
  } else {
    //điểm hiển thị
    let scoreElem = displayScore();
    let numWrong = 5 - scoreElem;
    let warning = '<p id=\'wrong\'\>Bạn sai ' + numWrong + ' câu rồi ';
    if (numWrong == 1) {
      warning += 'question.';
    } else {
      warning += '';
    }

    warning += ' Chơi lại đi!</p>';
    quiz.append(warning);

    if (scoreElem == 5) {
      window.location.href = "Chúc mừng";
    }

    prev.hide();
    next.hide();
    replay.show();

  }
}

// Tính điểm và trả về một phần tử đoạn văn sẽ được hiển thị
function displayScore() {
  var numCorrect = 0;
  for (var i = 0, length = selections.length; i < length; i++) {
    if (selections[i] == questions[i].correctAnswer) {
      numCorrect++;
    }
  }

  return numCorrect;
}

//Tạo và trả về div chứa các câu hỏi và
// lựa chọn câu trả lời
function createQuestionElement(index) {
  let qElement = '<div id=question>';
  qElement += '<p>';
  qElement += questions[index].question;
  qElement += '</p>';
  qElement += createRadios(index);
  qElement += '</div>';

  return qElement;
}

// Tạo danh sách các lựa chọn câu trả lời dưới dạng đầu vào radio
function createRadios(index) {
  let radioList = '<ul>';
  let item;
  let input = '';
  for (let i = 0, length = questions[index].choices.length; i < length; i++) {
    item = '<li>';
    input = '<input type="radio" name="answer" value=' + i + ' />';
    input += questions[index].choices[i];
    item += input;
    radioList += item;
  }
  return radioList;
}
