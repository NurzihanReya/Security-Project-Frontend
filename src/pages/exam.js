import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const QuizComponent = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);

  useEffect(() => {
    let tm; 

    const timeout = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(tm);
        document.getElementById("form1").submit();
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timeLeft]);

  const checktime = (msg) => {
    if (msg < 10) {
      return `0${msg}`;
    }
    return msg;
  };

  const questions = [
    { id: 1, question: 'Question 1', ans1: 'Answer 1', ans2: 'Answer 2', ans3: 'Answer 3', ans4: 'Answer 4' },
 
  ];

  return (
    <Container>
      <div className="col-sm-2"></div>
      <div className="col-sm-8">
        <h2>
          Online quiz in React
          <div id="time" style={{ float: 'right' }}>{`${checktime(Math.floor(timeLeft / 3600))}:${checktime(
            Math.floor((timeLeft - Math.floor(timeLeft / 3600) * 60 * 60 - 30) / 60)
          )}:${checktime(timeLeft % 60)}`}</div>
        </h2>

        {questions.map((qust, index) => (
            <table className="table table-bordered">
              <thead>
                <tr className="danger">
                  <th>{`${index + 1} ${qust.question}`}</th>
                </tr>
              </thead>
              
              <tbody>
                {['ans1', 'ans2', 'ans3', 'ans4'].map((ans, ansIndex) => (
                  qust[ans] && (
                    <tr key={ansIndex} className="info">
                      <td>
                        {` ${ansIndex + 1} `}
                        <input type="radio" value={ansIndex} name={qust.id} />
                        {` ${qust[ans]}`}
                      </td>
                    </tr>
                  )
                ))}
                <tr className="info">
                  <td>
                    <input type="radio" checked style={{ display: 'none' }} value="no_attempt" name={qust.id} />
                  </td>
                </tr>
              </tbody>
            </table>
        ))}

        <center>
          <input type="submit" value="Submit Quiz" className="btn btn-success" />
        </center>
      </div>
      <div className="col-sm-2"></div>
      </Container>
  );
};

export default QuizComponent;
