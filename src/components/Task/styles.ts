import styled from 'styled-components';

export const Task = styled.div`
    width: 100%;
    background: #FFF;
    padding: 12px 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.09);
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;
export const TaskH2 = styled.h2<{ checked: boolean }>`
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    margin-left: 6px;
    margin-bottom: 6px;
    width: 90%;
    text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;
export const TaskDescription = styled.p`
    font-size: 12px;
    color: #716D7F;
`;

export const TaskCheckOut = styled.img`
    width: 14px;
    height: 14px;
`;

export const TaskCheckIn = styled.img`
    width: 14px;
    height: 14px;
`;
export const HiddenCheckbox = styled.input`
  display: none;
`;