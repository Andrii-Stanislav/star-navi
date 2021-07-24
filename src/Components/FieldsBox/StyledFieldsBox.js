import styled from 'styled-components';

const StyledFieldsBox = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.fields}, 1fr);
    grid-template-rows: repeat(${props => props.fields}, 1fr);
    width: fit-content;
    height: fit-content;
    margin: 0 auto;

    & > * {
        border: 2px solid black;
        margin: 0 -2px -2px 0;
    }
`;

export default StyledFieldsBox;
