import styled from 'styled-components';

const StyledField = styled.div`
    width: 35px;
    height: 35px;
    background-color: ${props => (props.isHovered ? '#0000ff' : '#fff')};
    pointer-events: ${props => (props.isPlaying ? 'all' : 'none')};
`;

export default StyledField;
