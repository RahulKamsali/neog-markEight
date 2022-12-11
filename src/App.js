import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "🙂": "Slightly smiling face",
  "😀": "Smiling face",
  "😃": "Smiling face with big eyes",
  "😄": "Smiling face with smiling eyes",
  "😁": "Beaming face with smiling eyes",
  "😅": "Smiling face with tears",
  "😆": "Grinning face",
  "🤣": "Rolling on the floor laughing",
  "😂": "Lauging with tears",
  "🙃": "Upside down face",
  "😉": "Winking face",
  "😊": "Smiling face with smiling eyes",
  "😇": "Smiling face with halo",
  "": "translation will appear here.."
};

var emojiList = Object.keys(emojiDict);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function changeHandler(meaning) {
    var inputMsg = event.target.value;
    var meaning = emojiDict[inputMsg];
    if (inputMsg in emojiDict) {
      return setMeaning(meaning);
    }
    return setMeaning("Emoji is not in the Dict");
  }
  function onClickEvent(emoji) {
    var meaning = emojiDict[emoji];
    return setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Welcome to Emoji Dictinoary</h1>
      <input
        onChange={changeHandler}
        style={{ padding: "0.5rem", fontSize: "large", fontWeight: "bolder" }}
      />

      <div
        style={{ fontSize: "large", padding: "1rem", fontWeight: "bolder" }}
        key={meaning}
      >
        {meaning}
      </div>
      <div style={{ padding: "1rem" }}>Click from Emojis Below:</div>

      {emojiList.map((emoji) => (
        <span
          style={{ padding: "0.2rem", fontSize: "x-large", cursor: "pointer" }}
          onClick={() => onClickEvent(emoji)}
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
