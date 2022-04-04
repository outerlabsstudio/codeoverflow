import styled from "styled-components";
import media from "./media";

export const DisplayText = styled.h1`
  font-size: 11vw;
  font-weight: bold;
  ${media.thone`font-size: 12vw;`};
`;
export const TitleText = styled.h1`
  font-size: 6vw;
  font-weight: bold;

  @media (min-aspect-ratio: 8 / 5) {
    font-size: 8vh;
  }

  ${media.thone`font-size: 9vw;`};
`;
export const BigText = styled.p`
  font-size: 4vw;
  font-weight: 600;
  line-height: 129%;

  span {
    padding: 0 1rem;
    border-radius: 15px;
  }

  span.orange {
    color: var(--darkorange);
    background-color: var(--orange);
  }

  span.green {
    color: var(--darkgreen);
    background-color: var(--lightgreen);
  }

  span.purple {
    background-color: var(--lightpurple);
  }

  ${media.thone`font-size: 8vw;`};
`;
export const MidText = styled.p`
  font-size: 2vw;
  font-weight: 500;

  ${media.tablet`font-size: 4vw;`};
  ${media.thone`font-size: 6vw;`};
`;
export const NormalText = styled.p`
  font-size: 1.5vw;

  @media (min-aspect-ratio: 8 / 5) {
    font-size: 3vh;
  }

  ${media.tablet`font-size: 2vw;`};
  ${media.thone`font-size: 4vw;`};
`;
export const Label = styled(NormalText)`
  text-transform: uppercase;
  color: var(--gray);
  font-weight: bold;
  margin: 0;
`;
export const SmallText = styled.p`
  font-size: 18px;
`;
