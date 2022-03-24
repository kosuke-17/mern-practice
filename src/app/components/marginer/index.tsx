import styled from "styled-components";

export interface IMarginerProps {
  margin: number | string;
  direction?: "horizontal" | "vertical";
}

const HorizontalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-width: ${({ margin }) => {
    return typeof margin === "string" ? margin : `${margin}px`;
  }};
`;

const VerticalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-height: ${({ margin }) => {
    return typeof margin === "string" ? margin : `${margin}px`;
  }};
`;

const Marginer = (props: IMarginerProps) => {
  const { direction } = props;

  if (direction === "horizontal") {
    return <HorizontalMargin {...props} />;
  } else {
    return <VerticalMargin {...props} />;
  }
};

export default Marginer;
