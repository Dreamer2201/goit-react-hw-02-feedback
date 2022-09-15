
export default function VoteResults({ good, neutral, bad, total, goodpersentage }) {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (<p>"There is no feedback"</p>);
    } 
    return (
        
        <ul>
            <li>
                <p>Good: <span>{good}</span> </p>
            </li>
            <li>
                <p>Neutral: <span>{neutral}</span> </p>
            </li>
            <li>
                <p>Bad: <span>{bad}</span> </p>
            </li>
            <li>
                <p>Total: <span>{total}</span> </p>
            </li>
            <li>
                <p>Positiv feedback: <span>{goodpersentage}%</span> </p>
            </li>

        </ul>
    );
}