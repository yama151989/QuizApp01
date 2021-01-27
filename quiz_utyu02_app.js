const quiz = [
    {
        question: "",
        answers: ["", "", "", ""],
        correct: ""

    },{
        question: "",
        answers: ["", "", "", ""],
        correct: ""

    },{
        question: "",
        answers: ["", "", "", ""],
        correct: ""

    },{
        question: "",
        answers: ["", "", "", ""],
        correct: ""

    },{
        question: "",
        answers: ["", "", "", ""],
        correct: ""

    },{
        question: "",
        answers: ["", "", "", ""],
        correct: ""

    },{
        question: "",
        answers: ["", "", "", ""],
        correct: ""

    },{
        question: "",
        answers: ["", "", "", ""],
        correct: ""

    },{
        question: "",
        answers: ["", "", "", ""],
        correct: ""

    },{
        question: "",
        answers: ["", "", "", ""],
        correct: ""

    }
];


const preparation = () => {
    //準備中の時の処理
    var result = window.confirm("準備中...");
    if(result){
        //クイズ一覧に戻る
        location.href = "index.html";
    }else{
        //ページ更新
        location.reload();
    }
}
preparation();



const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文と選択肢を定義
const setupQuiz = () => {
    quizNumber = quizIndex + 1;
    document.getElementById("js-question").textContent = "[第" + quizNumber + "問目]" + " "+ quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength){
        // ここに命令
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        // window.alert("正解！");
        score++;
    } else {
        // window.alert("不正解！");
    }

    quizIndex++;
    if(quizIndex < quizLength){
        // 問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        // 問題数がもうなければこちらを実行
        // window.alert("終了！結果は" + quizLength + "問中" + score + "問正解です！");
        init();

    }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
        
    });
    handlerIndex++;
}
const init = () => {
    //終了した時の処理
    var result = window.confirm("終了！結果は" + quizLength + "問中" + score + "問正解です！\nもう一度やりますか?");
    buttonIndex = 0;
    quizIndex = 0;
    score = 0;
    
    if(result){
        //初めからやり直す
        location.reload();
    }else{
        //クイズ一覧に戻る
        location.href = "index.html";
    }
}


