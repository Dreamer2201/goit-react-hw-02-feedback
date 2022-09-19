import styled from '@emotion/styled';
import GoodImg from "../images/Good.png";
import Neutral from '../images/Neutral.png';
import Sad from '../images/Sad.png';

const BtnsFeedbackList = styled.ul`
  margin-left: 0;
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
  font-size: 34px;
  text-shadow: 2px -2px 2px #87CEFA;

`;

const ResultsName = styled.p`
  
`;
const ResultsItem = styled.li`
    &:first-of-type:before {
        content: url("${GoodImg}");
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
    &:nth-of-type(2):before {
        content: url("${Neutral}");
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
    &:nth-of-type(3):before {
        content: url("${Sad}");
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }


`;

export { BtnsFeedbackList, BtnItem, Btnfeedback, Title, ResultsName, ResultsItem };