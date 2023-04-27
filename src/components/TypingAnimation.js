import React, { useEffect, useState } from "react";
import '../style/typingAnimation.css'

export function TypingAnimation(props){
    const texts = props.texts
    const [text, setText] = useState('');
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);
        return () => clearInterval(timer);
      }, [texts.length]);

    useEffect(() => {
        setText('')
        const timer = setInterval(() => {
          setText((prevText) => {
            const textLength = prevText.length;
            const newText = texts[textIndex];
            return newText.substring(0, textLength + 1);
          });
        }, 80);
        return () => clearInterval(timer);
      }, [textIndex, texts]);

    return(
        <div className="parent-element">
        <div className="TypingAnimation d-flex align-items-center">
            <div className="mt-1">{text}</div>
            <span className="cursor"></span>
        </div>
        </div>
    )
}
