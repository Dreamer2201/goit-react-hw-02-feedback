import { ResultsName, ResultsItem } from './Feedback.styled';

export default function VoteResults({ good, neutral, bad, total, goodpersentage }) {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (<p>"There is no feedback"</p>);
    } 
    return (
        <ul>
            <ResultsItem>
                <ResultsName>Good: <span>{good}</span> </ResultsName>
            </ResultsItem>
            <ResultsItem>
                <ResultsName>Neutral: <span>{neutral}</span> </ResultsName>
            </ResultsItem>
            <ResultsItem>
                <ResultsName>Bad: <span>{bad}</span> </ResultsName>
            </ResultsItem>
            <ResultsItem>
                <p>Total: <span>{total}</span> </p>
            </ResultsItem>
            <ResultsItem>
                <p>Positiv feedback: <span>{goodpersentage}%</span> </p>
            </ResultsItem>
        </ul>
    );
}