import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Q1 = () => {
    return (
        <StyledWrapper>
            <Container>
                <QuestionsDiv>
                    <Grid>
                        <GridItem>1st</GridItem>
                        <GridItem>2nd</GridItem>
                        <GridItem>3rd</GridItem>
                        <GridItem>4th</GridItem>
                    </Grid>
                </QuestionsDiv>
            </Container>
        </StyledWrapper>
    );
}

export default Q1;

const StyledWrapper = styled(Wrapper)`
    background: #F6F7F9;
`;

const List = styled.div`
    margin-bottom: 20px;
    li {
        font-size: 18px;
        font-family: Lexend Regular;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
    }
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

const QuestionsDiv = styled.div``;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
`;

const GridItem = styled.div`
    padding: 80px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 20px;
`;

