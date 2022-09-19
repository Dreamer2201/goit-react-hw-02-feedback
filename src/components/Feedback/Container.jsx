import { Wrapper, Title } from './Feedback.styled';

const Container = ({ title, children }) => {
    return (
        <Wrapper>
            {title && <Title>{title}</Title>}
        {children}
        </Wrapper>
    )
}
export { Container };