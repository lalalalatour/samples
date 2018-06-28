/**
 * INTENT_NAME
 * @type {string}
 */
module.exports.INTENT_NAME_MATCH = 'Match';

/**
 * HAND_TYPE
 * @type {string[]}
 */
const HAND_LABEL_ROCK = 'グー';
const HAND_LABEL_PAPER = 'パー';
const HAND_LABEL_SCISSORS = 'チョキ';
module.exports.HAND_LABEL_ROCK = HAND_LABEL_ROCK;
module.exports.HAND_LABEL_PAPER = HAND_LABEL_PAPER;
module.exports.HAND_LABEL_SCISSORS = HAND_LABEL_SCISSORS;
module.exports.VALID_HAND_TYPE = [HAND_LABEL_ROCK, HAND_LABEL_PAPER, HAND_LABEL_SCISSORS];

/**
 * 勝敗の状態
 * @type {{WIN: number, LOSE: number, DRAW: number}}
 */
MATCH_STATE = {
    WIN: 0,
    LOSE: 1,
    DRAW: 2
};
module.exports.MATCH_STATE = MATCH_STATE;

/**
 * 勝敗ロジック
 */
//ユーザーがグーを出したときの勝敗
const MATCH_RESULT_FOR_HAND_ROCK = Array(3);
MATCH_RESULT_FOR_HAND_ROCK[HAND_LABEL_ROCK] = MATCH_STATE.DRAW; //グーにグーで引き分け
MATCH_RESULT_FOR_HAND_ROCK[HAND_LABEL_PAPER] = MATCH_STATE.LOSE; //グーにパーで負け
MATCH_RESULT_FOR_HAND_ROCK[HAND_LABEL_SCISSORS] = MATCH_STATE.WIN; //グーにチョキで勝ち
//ユーザーがパーを出したときの勝敗
const MATCH_RESULT_FOR_HAND_PAPER = Array(3);
MATCH_RESULT_FOR_HAND_PAPER[HAND_LABEL_ROCK] = MATCH_STATE.WIN; //パーにグーで勝ち
MATCH_RESULT_FOR_HAND_PAPER[HAND_LABEL_PAPER] = MATCH_STATE.DRAW; //パーにパーで引き分け
MATCH_RESULT_FOR_HAND_PAPER[HAND_LABEL_SCISSORS] = MATCH_STATE.LOSE; //パーにチョキで負け
//ユーザーがチョキを出したときの勝敗
const MATCH_RESULT_FOR_HAND_SCISSORS = Array(3);
MATCH_RESULT_FOR_HAND_SCISSORS[HAND_LABEL_ROCK] = MATCH_STATE.LOSE; //チョキにグーで勝ち
MATCH_RESULT_FOR_HAND_SCISSORS[HAND_LABEL_PAPER] = MATCH_STATE.WIN; //チョキにパーで引き分け
MATCH_RESULT_FOR_HAND_SCISSORS[HAND_LABEL_SCISSORS] = MATCH_STATE.DRAW; //チョキにチョキで負け
// 勝敗を判定する配列
const MATCH_RESULT = Array(3);
MATCH_RESULT[HAND_LABEL_ROCK] = MATCH_RESULT_FOR_HAND_ROCK;
MATCH_RESULT[HAND_LABEL_PAPER] = MATCH_RESULT_FOR_HAND_PAPER;
MATCH_RESULT[HAND_LABEL_SCISSORS] = MATCH_RESULT_FOR_HAND_SCISSORS;
module.exports.MATCH_RESULT = MATCH_RESULT;

/**
 * レスポンスメッセージ
 * @type {string}
 */
// 勝ったときのメッセージ
const SPEAK_MESSAGE_RESULT_USER_WIN = `<speak>
  <p>
    <s>わたしは「じゃんけん%HAND」です。</s>
    <s>
      あなたの勝ちです！おめでとうございます<sub alias="">🎉</sub>
      <audio src="https://actions.google.com/sounds/v1/cartoon/clown_horn.ogg"
             clipBegin="9s" clipEnd="10s" repeatCount="2">
      </audio>
    </s>
    <s>つづけますか？</s>
  </p>
</speak>`;
// 負けたときのメッセージ
const SPEAK_MESSAGE_RESULT_USER_LOSE = `<speak>
  <p>
    <s>わたしは「じゃんけん%HAND」です。</s>
    <s>
      あなたの負けです<sub alias="">😵</sub>
      <audio src="https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg"
             clipBegin="0s" clipEnd="2s">
      </audio>
    </s>
    <s>つづけますか？</s>
  </p>
</speak>`;
// 引き分けのときのメッセージ
const SPEAK_MESSAGE_RESULT_USER_DRAW = 'わたしは「じゃんけん%HAND」です。あいこです。次にどの手を出しますか？';

const SPEAK_MESSAGE_RESULT = Array(3);
SPEAK_MESSAGE_RESULT[MATCH_STATE.WIN] = SPEAK_MESSAGE_RESULT_USER_WIN;
SPEAK_MESSAGE_RESULT[MATCH_STATE.DRAW] = SPEAK_MESSAGE_RESULT_USER_DRAW;
SPEAK_MESSAGE_RESULT[MATCH_STATE.LOSE] = SPEAK_MESSAGE_RESULT_USER_LOSE;
module.exports.SPEAK_MESSAGE_RESULT = SPEAK_MESSAGE_RESULT;
module.exports.SPEAK_MESSAGE_UNRECOGNIZED = 'よく聞き取れませんでした。もう一度お願いします。';