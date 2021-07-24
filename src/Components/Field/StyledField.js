import styled from 'styled-components';

const StyledField = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => (props.isHovered ? '#0000ff' : '#fff')};
    pointer-events: ${props => (props.isPlaying ? 'all' : 'none')};
`;

export default StyledField;
