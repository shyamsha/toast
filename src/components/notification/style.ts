import styled from "styled-components";

const Container = styled.div<{
  type: "INFO" | "WARNING" | "SUCCESS" | "ERROR";
}>`
  position: fixed;
  right: 0;
  top: 20px;
  background: ${({ type }) =>
    type === "SUCCESS"
      ? "#2ecc71"
      : type === "INFO"
      ? "#3498db"
      : type === "WARNING"
      ? "#f1c40f"
      : type === "ERROR"
      ? "#e74c3c"
      : "#3498db"};
  color: white;
  font-weight: bold;
  padding: 0.5rem;
  min-width: 500px;
  text-align: center;
  border-radius: 1px;
`;

export { Container };
