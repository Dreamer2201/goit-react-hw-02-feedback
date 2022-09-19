import { ResultsList, ResultsItem } from './Feedback.styled';

export default function VoteResults({ good, neutral, bad, total, goodpersentage }) {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (<p>"There is no feedback"</p>);
    } 
    return (
        <ResultsList>
            <ResultsItem>
                <p>Good: <span>{good}</span> </p>
            </ResultsItem>
            <ResultsItem>
                <p>Neutral: <span>{neutral}</span> </p>
            </ResultsItem>
            <ResultsItem>
                <p>Bad: <span>{bad}</span> </p>
            </ResultsItem>
            <ResultsItem>
                <p>Total: <span>{total}</span> </p>
            </ResultsItem>
            <ResultsItem>
                <p>Positiv feedback: <span>{goodpersentage}%</span> </p>
            </ResultsItem>
        </ResultsList>
    );
}