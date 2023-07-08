import React, { useState } from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

// Dropdown component
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Dropdown');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownToggle onClick={toggleDropdown}>
        {selectedOption}
        <ArrowIcon className={isOpen ? 'open' : ''}>&#9662;</ArrowIcon>
      </DropdownToggle>
      {isOpen && (
        <DropdownMenu>
          <DropdownItem onClick={() => handleOptionSelect('Mountain')}>Mountain</DropdownItem>
          <DropdownItem onClick={() => handleOptionSelect('Forest')}>Forest</DropdownItem>
          <DropdownItem onClick={() => handleOptionSelect('Ocean')}>Ocean</DropdownItem>
          <DropdownItem onClick={() => handleOptionSelect('Desert')}>Desert</DropdownItem>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

const Q3 = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Title>
          <h3>
            <span>Task 3:</span> Build a dropdown
          </h3>
          <p>Your objective is to replicate the design and functionality of the given Figma design. Pay attention to details such as colors, fonts, and spacing to achieve a faithful representation of the design.</p>
        </Title>
        <QuestionsGrid>
          <AnswerDiv>
            <FigmaButtonWrapper>
              <a href="https://www.figma.com/file/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=16-26&mode=design&t=LMCvfVQBL3S5dApY-0" target="_blank" rel="noopener noreferrer">
                <FigmaButton>Figma</FigmaButton>
              </a>
            </FigmaButtonWrapper>
            <PrototypeButtonWrapper>
              <a href="https://www.figma.com/proto/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=36-670&t=56Qr3ehXorgFodbH-1&scaling=min-zoom&page-id=36%3A647&starting-point-node-id=36%3A670" target="_blank" rel="noopener noreferrer">
                <PrototypeButton>Prototype</PrototypeButton>
              </a>
            </PrototypeButtonWrapper>
            <DropdownWrapper>
              <Dropdown />
            </DropdownWrapper>
          </AnswerDiv>
        </QuestionsGrid>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Q3;

const StyledWrapper = styled(Wrapper)`
`;

const Title = styled.div`
  h3 {
    font-size: 32px;
    font-family: Lexend Medium;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.4px;
    span {
      background: #FAE090;
    }
  }
  p {
    font-size: 18px;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;

const QuestionsGrid = styled.div``;

const StyledContainer = styled(Container)`
  margin-top: 0;
`;

const AnswerDiv = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  button {
    margin: 0 10px;
  }
`;

const FigmaButtonWrapper = styled.div`
  margin-right: 10px;
`;

const PrototypeButtonWrapper = styled.div`
  margin-right: 10px;
`;

const DropdownWrapper = styled.div``;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownToggle = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px 40px;
  border: 1px solid lightgrey; /* Updated border color for default state */
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 5px;

  &:hover {
    border-color: lightblue; /* Updated border color for hover state */
  }
`;

const ArrowIcon = styled.span`
  font-size: 12px;
  margin-left: 5px;
  transition: transform 0.3s;

  &.open {
    transform: rotate(180deg);
  }
`;

const DropdownMenu = styled.ul`
  display: block;
  position: absolute;
  background-color: #fff;
  padding: 10px 40px;
  margin-top: 5px;
  border: 1px solid #fff;
  box-shadow:5px 5px 5px rgba(0,0,0,0.2)
  min-width: 150px;
  max-width:200px
  z-index: 1;
  list-style-type: none; /* Removed list marker types */
  border-radius: 5px;
  ${'' /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */}
`;

const DropdownItem = styled.li`
  color: #000;
  width:inherit;
  padding: 8px 14px;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
    border-radius:5px;
    padding:8px 14px;
    justify-content:flex-end;
  }

  &.active {
    background-color: #2684FE;
    color: #fff;
  }
`;

const FigmaButton = styled.button`
  border-radius: 40px;
  border: 1px solid #2684FE;
  background: #2684FE;
  min-width: 150px;
  height: 54px;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-family: Lexend Bold;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  cursor: pointer;
`;

const PrototypeButton = styled.button`
  border-radius: 40px;
  border: 1px solid #2684FE;
  background: #FFFFFF;
  min-width: 150px;
  height: 54px;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: #2684FE;
  text-align: center;
  font-size: 16px;
  font-family: Lexend Bold;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  cursor: pointer;
`;
