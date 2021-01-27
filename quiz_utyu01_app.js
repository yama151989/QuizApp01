const quiz = [
    {
        question: "NASAの訓練教官の名前は？",
        answers: ["ビンセント・ボールド", "ピコ・ノートン", "デニール・ヤング", "ジェイソン・バトラー"],
        correct: "ビンセント・ボールド"
    },{
        question: "宇宙兄弟の主人公南波六太の身長は？",
        answers: ["171cm", "176cm", "181cm", "186cm"],
        correct: "181cm"

    },{
        question: "国際宇宙ステーションの略称は何？",
        answers: ["ISS", "IIS", "CES", "CIS"],
        correct: "ISS"

    },{
        question: "宇宙飛行士選抜の3次試験(閉鎖環境試験)で、六太と同じグループでなかったのは誰？",
        answers: ["古谷やすし", "新田零次", "伊東せりか", "真壁ケンジ"],
        correct: "真壁ケンジ"

    },{
        question: "日々人がヒューストンで飼っているパグの名前は？",
        answers: ["アポ", "アロ", "ポロ", "ポア"],
        correct: "アポ"

    },{
        question: "日々人がヒューストンで飼っているパグの大好物は何？",
        answers: ["ハンバーガー", "ドックフード", "ホットドッグ", "チーズホットグ"],
        correct: "ホットドッグ"

    },{
        question: "宇宙飛行士選抜の3次試験(閉鎖環境試験)で、六太に出されたグリーンカードの内容は何？",
        answers: ["時計を壊す", "トイレを詰まらせる", "備蓄された米を床にぶちまける", "1日2回叫ぶ"],
        correct: "1日2回叫ぶ"

    },{
        question: "宇宙飛行士選抜の3次試験(閉鎖環境試験)で、C班だったのは誰？",
        answers: ["山本大輔", "山下剛", "山上弘之", "山田直希"],
        correct: "山下剛"

    },{
        question: "日々人がパニック障害克服のため訓練で行った場所はどこ？",
        answers: ["日本", "ドイツ", "カナダ", "ロシア"],
        correct: "ロシア"

    },{
        question: "日々人がパニック障害克服の訓練先でデートをした女の子は名前は何？",
        answers: ["オリガ・トルスタヤ", "エミーリア・トルスタヤ", "ソフィア・トルスタヤ", "マリア・トルスタヤ"],
        correct: "オリガ・トルスタヤ"

    }
];

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
        // window.confirm("終了！結果は" + quizLength + "問中" + score + "問正解です！もう一度やりますか?");

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


