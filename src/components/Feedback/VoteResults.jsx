import { ResultsList, ResultsItem, NoFeedback, TotalResult } from './Feedback.styled';

export default function VoteResults({ good, neutral, bad, total, goodpersentage }) {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (<NoFeedback>"There is no feedback"</NoFeedback>);
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
                <TotalResult>Total: <span>{total}</span> </TotalResult>
            </ResultsItem>
            <ResultsItem>
                <TotalResult>Positiv feedback: <span>{goodpersentage}%</span> </TotalResult>
            </ResultsItem>
        </ResultsList>
    );
}