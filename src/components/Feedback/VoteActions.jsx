import { BtnsFeedbackList, BtnItem, Btnfeedback } from './Feedback.styled';

export default function VoteActions({ clickBtnVote }) {
    return (
        <BtnsFeedbackList>
            <BtnItem><Btnfeedback onClick={() => clickBtnVote("good")}>Good</Btnfeedback></BtnItem>
            <BtnItem><Btnfeedback onClick={() => clickBtnVote("neutral")}>Neutral</Btnfeedback></BtnItem>
            <BtnItem><Btnfeedback onClick={() => clickBtnVote("bad")}>Bad</Btnfeedback></BtnItem>
        </BtnsFeedbackList>
    );
}
