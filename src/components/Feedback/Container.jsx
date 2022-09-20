import { Wrapper, Title } from './FeedbackFormStyled';

const Container = ({ title, children }) => {
    return (
        <Wrapper>
            {title && <Title>{title}</Title>}
        {children}
        </Wrapper>
    )
}
export { Container };