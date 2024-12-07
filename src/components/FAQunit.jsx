import React, { useState, useRef, useEffect } from 'react';
import style from "../css/FAQunit.module.css";
import downArrow from '../img/downArrow.svg';
import upArrow from '../img/upArrow.svg'; 


const FAQunit = ({ question, answer }) => {
  const [expand, setExpand] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const toggleExpand = () => setExpand(prevExpand => !prevExpand);
  const btnRef = useRef(null);
  const answerRef = useRef(null);

  useEffect(() => {
    if (expand) {
      setTimeout(() => {
        answerRef.current.style.opacity = '1';
        answerRef.current.style.maxHeight = `${maxHeight}px`;
      }, 100); 
    } else {
      answerRef.current.style.opacity = '0';
      answerRef.current.style.maxHeight = '0';
    }
  }, [expand]);

  useEffect(() => {
    if (answerRef.current) {
      setMaxHeight(answerRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div>
      <button onClick={toggleExpand} className={!expand ? style.faq_btn : style.faq_btn_pressed} ref={btnRef}>
        <span className={style.button_text}>{question}</span>
        <img src={expand ? upArrow : downArrow} className={style.button_image} alt={expand ? "up arrow" : "down arrow"}  />
      </button>
      <div ref={answerRef} className={`${style.answer_text} ${expand ? style.show : ''}`}>
        {answer}
      </div>
    </div>
  );
};

export default FAQunit;
