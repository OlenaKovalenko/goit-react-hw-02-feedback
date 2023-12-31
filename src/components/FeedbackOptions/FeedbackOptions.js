import { Button, ButtonContainer } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ButtonContainer>
            {options.map(option => (<Button key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</Button>))}
        </ButtonContainer>
    )
}