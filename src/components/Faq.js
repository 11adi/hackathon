import React, { useState } from 'react';

function Faq() {
  const [isOpen, setIsOpen] = useState(Array(11).fill(false));

  const toggleMenu = (index) => {
    const newOpenState = [...isOpen];
    newOpenState[index] = !newOpenState[index];
    setIsOpen(newOpenState);
  };

  const faqData = [
    {
      question: 'What are the dates for the Hackathon?',
      answer: 'Hackathon will be held on 2nd and 3rd March, 2024. We will be waiting for you with a warm welcome.',
    },
    // Add more questions here
    {
      question: 'Question 2',
      answer: 'Answer 2',
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
    },
    {
      question: 'Question 4',
      answer: 'Answer 4',
    },
    {
      question: 'Question 5',
      answer: 'Answer 5',
    },
    {
      question: 'Question 6',
      answer: 'Answer 6',
    },
    {
      question: 'Question 7',
      answer: 'Answer 7',
    },
    {
      question: 'Question 8',
      answer: 'Answer 8',
    },
    {
      question: 'Question 9',
      answer: 'Answer 9',
    },
  ];

  return (
    <div>
      <div style={{ color: 'white', fontSize: '35px', fontWeight: 'bold' }}>
        DO YOU HAVE A QUESTION?
        <p style={{ fontSize: '15px', marginBottom: '20px' }}>New to hackathon? Don't worry we got you covered with all the basic information.</p>
      </div>
      {faqData.map((item, index) => (
        <div key={index} style={{ color: '#fff', borderColor: isOpen[index] ? 'blue' : '#fff', borderStyle: 'solid', borderWidth: '.5px', borderRadius: '15px', backgroundColor: isOpen[index] ? 'rgba(0, 0, 255,0.2)' : 'transparent', flexFlow: 'column nowrap', width: '80%', marginLeft: '10%', marginBottom: '1em' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '1em' }}>
            <div>
              {item.question}
              {isOpen[index] && (
                <p>{item.answer}</p>
              )}
            </div>
            <span onClick={() => toggleMenu(index)} style={{ cursor: 'pointer', transform: isOpen[index] ? 'rotate(45deg)' : 'none', transition: 'transform 0.5s ease-in-out', marginRight: '0.5rem', padding: '2rem', position: 'absolute', right: '10%' }}>
              +
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
