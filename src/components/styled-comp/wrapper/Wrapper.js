import styled from "styled-components";

export default styled.div`
  background-color: white;
  margin: auto;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: center;
  align-items: center;
`;
