import React, { useState } from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import dropdown from "../images/dropdown-trial.png";
import mountainImage from "../images/mountain.jpg";
import forestImage from "../images/forest.jpg";
import oceanImage from "../images/ocean.jpg";
import desertImage from "../images/desert.jpg";

const Q3 = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const getImageUrl = () => {
        switch (selectedOption) {
            case "mountain":
                return mountainImage;
            case "forest":
                return forestImage;
            case "ocean":
                return oceanImage;
            case "desert":
                return desertImage;
            default:
                return null;
        }
    };

    return (
        <StyledWrapper>
            <StyledContainer>
                <Title>
                    <h3>
                        <span>Task 4:</span> Build a component
                    </h3>
                    <p>In this section, you are required to build a new component based on a Figma design and prototype. The component's function should be to change the image displayed based on the item selected in the dropdown. Implement this functionality using HTML, CSS, and JavaScript.</p>
                </Title>
                <QuestionsGrid>
                    <DropdownWrapper>
                        <Dropdown onChange={handleOptionSelect} />
                    </DropdownWrapper>
                    {selectedOption && (
                        <ImageDiv>
                            <ImageCard src={getImageUrl()} alt={selectedOption} />
                        </ImageDiv>
                    )}
                </QuestionsGrid>
            </StyledContainer>
        </StyledWrapper>
    )
}

const Dropdown = ({ onChange }) => {
    const options = [
        { label: "Mountain", value: "mountain" },
        { label: "Forest", value: "forest" },
        { label: "Ocean", value: "ocean" },
        { label: "Desert", value: "desert" }
    ];

    const handleOptionChange = (e) => {
        const selectedOption = e.target.value;
        onChange(selectedOption);
    };

    return (
        <SelectDropdown onChange={handleOptionChange}>
            <option value="">Select an option</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </SelectDropdown>
    );
};

const StyledWrapper = styled(Wrapper)`
  background: #F6F7F9;
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

const QuestionsGrid = styled.div`
  display: flex;
  align-items: center;
`;

const StyledContainer = styled(Container)`
  margin-top: 0;
`;

const DropdownWrapper = styled.div`
  margin-right: 20px;
`;

const SelectDropdown = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: white;

  &:hover {
    border-color: lightblue;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ImageCard = styled.img`
  width: 300px;
`;

export default Q3;
