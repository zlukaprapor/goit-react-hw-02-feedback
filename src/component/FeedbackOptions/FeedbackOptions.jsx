import PropTypes from 'prop-types';
import { Container, Button } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map((el) => (
        <Button
          key={el}
          type="button"
          onClick={() => {
            onLeaveFeedback(el);
          }}
        >
          {el}
        </Button>
      ))}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
