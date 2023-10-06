// Create a Title component that'll render an <h1> tag with some styles
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
export const Title = () => {
    return (
        <Wrapper>
             <H1>
                 Hello World!
            </H1>
        </Wrapper>
    )
}
