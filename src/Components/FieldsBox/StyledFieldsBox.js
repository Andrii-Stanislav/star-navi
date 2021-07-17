import styled from 'styled-components';

const StyledFieldsBox = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.fields}, 1fr);
    grid-template-rows: repeat(${props => props.fields}, 1fr);
    width: fit-content;
    height: fit-content;
    margin: 0 auto;

    & > * {
        border: 1px solid black;
        margin: 0 -1px -1px 0;
    }
`;

export default StyledFieldsBox;
