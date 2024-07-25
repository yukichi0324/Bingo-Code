import React from "react";
import "./BingoCard.css"; // 上記のCSSを適用
import { elements } from "./elements.js";
import { ideas } from "./ideas.js";
import { methods } from "./methods.js";


function getRandomElements(arr, num) {
  let result = arr.slice(); // 元の配列をコピー
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // 要素を入れ替え
  }
  return result.slice(0, num); // 指定された数の要素を取得
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
  console.log("methods:", methods);
  console.log("ideas:", ideas);
  console.log("elements:", elements);
  const selectedMethods = getRandomElements(methods, 15);
  const selectedIdeas = getRandomElements(ideas, 5);
  const selectedElements = getRandomElements(elements, 5);

  // 全ての選ばれた単語を1つの配列に統合してシャッフル
  let words = [...selectedMethods, ...selectedIdeas, ...selectedElements];
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
