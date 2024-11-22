import { styled } from "styled-components";

const TitleDivider = styled.div`
  width: 100%;
  height: 0.15rem;
  background-color: ${(props) => props.theme.colors.black000};
  /* position: absolute; */
`;

const Title = styled.h2`
  position: absolute;
  font-size: 2.75rem;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 1.6;
  padding-top: 0.75rem;
  padding-bottom: 4rem;
  color: ${(props) => props.theme.colors.black000};
  /* border-top: 0.15rem solid ${(props) => props.theme.colors.black000}; */
  /* width: 27%; */

  @media (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
  }
`;

export { Title, TitleDivider };
