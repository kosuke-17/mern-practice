import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    py-3
    lg:py-6
  `}
`;

const Title = styled.div`
  ${tw`
    text-xl
    lg:text-4xl
    text-black
    font-extrabold
  `}
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `}
`;

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    m-3
    md:w-96
    transition-colors
    hover:text-green-500
  `}
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    rounded-lg
    justify-center
    items-center
    p-6
  `};
`;

const StepTitle = styled.h4`
  ${tw`
    text-black
    text-lg
    font-semibold
    mt-4
  `}
`;

const StepDescription = styled.p`
  ${tw`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
  `}
`;

const StepIcon = styled.span`
  ${tw`
    text-green-500
    text-3xl
  `}
`;

const BookingSteps = () => {
  return (
    <Container>
      <Title>予約のステップタイトル</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>場所を選ぶ</StepTitle>
          <StepDescription>ここに場所についての説明が入る</StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>日にちを選ぶ</StepTitle>
          <StepDescription>ここに日にちについての説明が入る</StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>予約をする</StepTitle>
          <StepDescription>ここに予約する説明が入る</StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
};

export default BookingSteps;
