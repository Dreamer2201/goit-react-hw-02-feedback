import { Title } from './Feedback.styled';
const Container = ({ title, children }) => {
    return (
        <div>
            {title && <Title>{title}</Title>}
        {children}
        </div>
    )
}
export { Container };