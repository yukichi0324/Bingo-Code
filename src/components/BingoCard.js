import React from "react";
import "./BingoCard.css"; // 上記のCSSを適用

const colorwords = ["あか", "あお", "みどり", "オレンジ", "むらさき", "みずいろ", "しろ", "くろ", "きいろ", "ピンク", "ちゃいろ", "グレー", "ゴールド", "シルバー", "ベージュ"];
const items = ["服", "靴", "帽子", "店", "ポイント", "時計", "カバン", "アクセサリー"];
const times = ["1時", "2時", "3時", "4時", "5時", "6時", "7時", "8時", "9時"];

function getRandomElements(arr, num) {
  let shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function BingoCard() {
  // 各配列からランダムに要素を選ぶ
  const selectedColors = getRandomElements(colorwords, 15);
  const selectedItems = getRandomElements(items, 5);
  const selectedTimes = getRandomElements(times, 5);

  // 全ての選ばれた単語を1つの配列に統合してシャッフル
  let words = [...selectedColors, ...selectedItems, ...selectedTimes];
  words = shuffleArray(words); // 配列をシャッフル

  return (
    <div className="bingo-card">
      {words.map((word, index) => (
        <div key={index} className="cell">
          {word}
        </div>
      ))}
    </div>
  );
}

export default BingoCard;
