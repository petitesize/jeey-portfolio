import { styled } from "styled-components";

const TitleDivider = styled.div`
  width: 100%;
  height: 0.15rem;
  background-color: ${(props) => props.theme.colors.text};
  /* position: absolute; */
`;

const FixedTitle = styled.h2`
  position: absolute;
  font-size: 2.75rem;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 1.6;
  padding-top: 0.75rem;
  padding-bottom: 4rem;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.75rem;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 1.6;
  padding-top: 0.75rem;
  padding-bottom: 4rem;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
  }
`;

export { FixedTitle, TitleDivider, Title };
