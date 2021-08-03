import styled from 'styled-components';

const Img = styled.img`
  height: 36px;
`;
const ImgWrapper = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary600};
  padding-top: 22.5px;
  padding-right: 22.5px;
  padding-bottom: 13.5px;
  padding-left: 13.5px;
  border-radius: 9px;
`;

export { Img, ImgWrapper };
