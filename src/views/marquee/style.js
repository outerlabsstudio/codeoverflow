import styled from "styled-components";
import { BigText, media } from "@styles";

export const SectionWrapper = styled.div`
  width: 100%;
  background-color: var(--accent);

  p {
    font-size: 4vw;
    font-weight: 600;
    line-height: 129%;

    ${media.thone`font-size: 8vw;`};
  }

  ${media.thone`padding: 6vw 0;`};
`;
export const MarqueeWrapper = styled(BigText)`
  padding: 1vw 0;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  margin: 0;
`;
export const MarqueeInner = styled.div`
  width: fit-content;
  display: flex;
  flex: auto;
  flex-direction: row;
`;
export const ClippedText = styled.div`
  flex-shrink: 0;
  padding: 0 3vw;
  font-smooth: always;
`;