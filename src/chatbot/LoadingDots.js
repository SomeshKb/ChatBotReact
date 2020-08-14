import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
const BounceAnimation = keyframes`
  to {
    opacity: 0.1;
    transform: translate(0, -20px);
    background : pink;
  }
`;
const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin: 10px;
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  background: #8385aa;
  border-radius: 50%;
  margin: 3px;
  /* Animation */
  animation: ${BounceAnimation} 0.6s infinite alternate;
  animation-delay: ${(props) => props.delay};
`;
class LoadingDots extends Component {
    render() {
        return (
            <DotWrapper>
                <Dot delay="0s" />
                <Dot delay=".2s" />
                <Dot delay=".4s" />
            </DotWrapper>
        );
    }
}
export default LoadingDots;
