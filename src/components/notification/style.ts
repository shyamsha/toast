import styled from "styled-components";

const Container = styled.div<{
  type: "INFO" | "WARNING" | "SUCCESS" | "ERROR";
}>`
  position: fixed;
  right: 0;
  top: 20px;
  backgrounds: ${({ type }) =>
    type === "SUCCESS"
      ? "#2ecc71"
      : type === "INFO"
      ? "#3498db"
      : type === "WARNING"
      ? "#f1c40f"
      : type === "ERROR"
      ? "#e74c3c"
      : "#3498db"};
  background-color: white;
  color: black;
  font-weight: bold;
  margin-left: 8px;
  min-width: 400px;
  min-height: 50px;
  border-radius: 1px;
  padding-left: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export { Container };
