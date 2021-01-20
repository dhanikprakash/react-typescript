import React, { Props } from 'react'

type props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: boolean;
    qustionNo: number;
    totalQuestion: number;

}

const QuestionCard: React.FC<props> = ({question, answers, callback,userAnswer,qustionNo,totalQuestion}) => {
    return (
        <div>
            <p className="number">
                Question {qustionNo} of {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>{answers.map(answer => {<div>
                <button disabled={userAnswer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}}></span>
                </button>
            </div>})}</div>
        </div>
    )
}
export default QuestionCard;
