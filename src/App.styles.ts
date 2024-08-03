import styled from 'styled-components';

export const Container = styled.div`
    background: url("/back.svg") no-repeat;
    background-size: cover;
    height: 100vh;
    font-family: 'Lexend Deca';
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const AreaContainer = styled.div`
    position: relative; /* Necessário para posicionar a barra de rolagem personalizada */
    width: 40%;
    padding: 0 20px;
    padding-bottom: 80px;
    min-width: 320px;
    max-width: 450px;
    height: 90vh;
`;

export const Area = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll; /* Mantém a rolagem real */
    padding-right: 20px; /* Espaço para a barra de rolagem personalizada */
    box-sizing: content-box;

    /* Estilos para ocultar a barra de rolagem padrão */
    &::-webkit-scrollbar {
        display: none; /* Oculta a barra de rolagem no WebKit (Chrome, Safari) */
    }
    -ms-overflow-style: none;  /* Oculta a barra de rolagem no IE e Edge */
    scrollbar-width: none;  /* Oculta a barra de rolagem no Firefox */
`;

export const CustomScrollbar = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 12px;
    height: 100%;
    background: rgba(136, 136, 136, 0);
    border-radius: 6px;
    overflow: hidden;
`;

export const ScrollThumb = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0);
    border-radius: 6px;
    cursor: pointer;
`;

export const Title = styled.h1`
    padding: 0;
    margin-bottom: 20px;
`;
