import styled from 'styled-components';
export const Field = styled.div`
    width: 100%;
    background: #FFF;
    padding: 12px 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.09);
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;
export const Icon = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 6px;
`;
export const LabelAdd = styled.label`
    font-size: 10px;
    color: #716D7F;
    width: calc(100% - 38px);
    height: 10px;
`;
export const InputAdd = styled.input`
    border: none;
    outline: transparent;
    width: calc(100% - 38px);
    font-family: 'Lexend Deca';
    border-bottom: 1px solid rgba(113, 109, 127, 0.14);
`;