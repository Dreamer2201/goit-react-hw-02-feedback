import { BtnsFeedbackList, Btnfeedback } from './Feedback.styled';

export default function VoteActions({ clickBtnVote }) {
    return (
        <BtnsFeedbackList>
            <Btnfeedback><button onClick={() => clickBtnVote("good")}>Good</button></Btnfeedback>
            <Btnfeedback><button onClick={() => clickBtnVote("neutral")}>Neutral</button></Btnfeedback>
            <Btnfeedback><button onClick={() => clickBtnVote("bad")}>Bad</button></Btnfeedback>
        </BtnsFeedbackList>
    );
}
