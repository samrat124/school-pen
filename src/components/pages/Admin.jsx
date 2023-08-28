import React, { useEffect, useState } from 'react';
import image1nav from '../utils/image1nav.png';
import '../style/Admin.css';

const Admin = () => {
  const [daybtn, setDaybtn] = useState({ day: ['Day 1'], count: 1 });
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);  
  const [selectedLearnIndex, setSelectedLearnIndex] = useState(0);  
  const [selectedQueIndex, setSelectedQueIndex] = useState(0);
  const [quebtn, setQuebtn] = useState({ day: ['Q 1'], count: 1 });

  const subject = ['RBSE', '9th', 'English', 'NCERT', 'Beehive'];
  const component=['Aplication','Relevance to subjects','Skill gained','Event','Problem','Career Path']
   const learning=['Informative','Conceptual','Colearning'];
   const Question=['Question type','Question level','Assign Marks']

  const handleDayClick = (index) => {
    setSelectedDayIndex(index);  
  };
  const handleQuestionClick = (index) => {
    setSelectedQueIndex(index);  
  };
  const handleLearnClick = (index) => {
    setSelectedLearnIndex(index);  
  };

  const handleDaybtn = (e) => {
    e.preventDefault();
    setDaybtn((prev) => ({
      day: [...prev.day, `Day ${prev.count + 1}`],
      count: prev.count + 1,
    }));
  };
  const handleQuebtn = (e) => {
    e.preventDefault();
    setQuebtn((prev) => ({
      day: [...prev.day, `Q ${prev.count + 1}`],
      count: prev.count + 1,
    }));
  };

  return (
    <div className='admin-main'>
      <div className='sideNavbar'> <img src={image1nav} alt="" /></div>
      <div className='content-box'>
        <div className="subject-title">
          {subject.map((ele, index) => (
            <button key={index} className='subject-btn'>{ele}</button>
          ))}
        </div>
        <div className="day-box">
          <div>
            {daybtn.day.map((ele, index) => (
              <button
                className={`day-btn ${selectedDayIndex === index ? 'selected' : ''}`}
                key={index}
                onClick={() => handleDayClick(index)}  
              >
                {ele}
              </button>
            ))}
          </div>
          <button className='day-increase' onClick={handleDaybtn}>+</button>
        </div>
        <div className="description-box">
           <input type="text" className="add-title" placeholder='Add title' />
           <textarea name="" id="" cols="100" rows="10" placeholder='Objective'></textarea>
           <textarea name="" id="" cols="100" rows="10" placeholder='Content'></textarea>
        </div>
        <div className="component-box">
          {
            component.map((ele,index)=>{
              return <div className="component-box-1">
                <p>{ele}</p>
                <button>+</button>
              </div>
            })
          }
        </div>
        <div className="learn-box">
          {
            learning.map((ele,index)=>{
              return <button
              className={`learn-btn ${selectedLearnIndex === index ? 'selected' : ''}`}
              key={index}
              onClick={() => handleLearnClick(index)}  
            >
              {ele}
            </button>
            })
          }
        </div>
        <div className="day-box">
          <div>
            {quebtn.day.map((ele, index) => (
              <button
                className={`day-btn ${selectedQueIndex === index ? 'selected' : ''}`}
                key={index}
                onClick={() => handleQuestionClick(index)}  
              >
                {ele}
              </button>
            ))}
          </div>
          <button className='day-increase' onClick={handleQuebtn}>+</button>
        </div>
        <div className="learn-box">
          {
            Question.map((ele,index)=>{
              return <select className='learn-btn' name="" id="" ><option value="">{ele}</option></select>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Admin;
