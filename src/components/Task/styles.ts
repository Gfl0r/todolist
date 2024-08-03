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
export const TaskGroup = styled.div`
    width: calc(100% - 60px);
    display: flex;
    flex-wrap: wrap;
`;
export const TaskH2 = styled.h2<{ checked: boolean }>`
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    margin-left: 6px;
    margin-bottom: 6px;
    width: calc(100% - 60px);
    text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;
export const TaskDescription = styled.p`
    font-size: 12px;
    color: #716D7F;
    width: 100%;
    padding-right: 10px;
`;

export const TaskCheckOut = styled.img`
    width: 14px;
    height: 14px;
    cursor: pointer;
`;

export const TaskCheckIn = styled.img`
    width: 14px;
    height: 14px;
    cursor: pointer;
`;
export const HiddenCheckbox = styled.input`
  display: none;
`;
export const TaskEdit = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-left: 6px;
`;