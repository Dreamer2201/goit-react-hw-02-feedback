import styled from '@emotion/styled';
import GoodImg from "../images/Good.png";
import Neutral from '../images/Neutral.png';
import Sad from '../images/Sad.png';

const Wrapper = styled.div`
  min-width: 400px;
  border: 1px solid #6495ED;
  border-radius: 25px;
  background-color: 	#F0FFFF;
  padding: 10px;
`;

const BtnsFeedbackList = styled.ul`
  margin-left: 0;
  padding: 5px;
  list-style: none;
  display: flex;
  flex-diruction: column;
`;

const BtnItem = styled.li`
  margin-right: 20px;
    &:last-child: 
      margin-right: 0;
`;

const Btnfeedback = styled.button`
  width: 100px;
  padding: 5px;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #AF40FF;
  border-radius: 20px;
  font-size: 20px;  
`;

const Title = styled.title`
  display: inline-block;
  text-align: center;
  text-decoration: underline;
  font-size: 28px;
  text-shadow: 2px -2px 2px #87CEFA;

`;

const ResultsList = styled.ul`
  list-style: none;
`;
const ResultsItem = styled.li`
  display: flex;
  align-items: center;

  &:first-of-type:before {
    content: url("${GoodImg}");
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 35px;
    transform: translate(-50%, -50%);
  }
  &:nth-of-type(2):before {
      content: url("${Neutral}");
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 35px;
      transform: translate(-50%, -50%);
    }
    &:nth-of-type(3):before {
    content: url("${Sad}");
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 35px;
      transform: translate(-50%, -50%);
    }
`;

const NoFeedback = styled.p`
  font-size: 22px;
  font-style: italic;
`;
const TotalResult = styled.p`
  font-weight: 700;
  font-style: italic;
`;
export { Wrapper, BtnsFeedbackList, BtnItem, Btnfeedback, Title, ResultsList, ResultsItem, NoFeedback, TotalResult };