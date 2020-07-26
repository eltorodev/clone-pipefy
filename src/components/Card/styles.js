import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-bottom: 5px;
  padding: 15px;
  border-radius: 5px;
  background-color: var(--dark-light);
  border-top: 20px solid rgb(14, 14, 19);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.8);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    margin-top: 2px;
    border-radius: 2px;
  }

  ${props => props.isDragging && css`
    padding-top: 31px;
    border-radius: 0;
    border: 2px dashed rgba(38, 38, 49, 0.2);
    background-color: transparent;
    box-shadow: none;
    cursor: grabbing;

    header,
    p,
    img {
      opacity: 0;
    }
  `}
`;

export const Label = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${props => props.color};
`;
