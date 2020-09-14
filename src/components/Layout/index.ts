import styled from 'styled-components';

export const Flex = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
`;

export const Section = styled(Flex)`
  width: 100%;
  justify-content: center;
`;

export const MaxWidth = styled.div`
  max-width: 1548px;
  width: 100%;
  display: block;
  padding: 0 24px;
  @media (min-width: 992px) {
    padding: 0 40px;
  }
  @media (min-width: 1128px) {
    padding: 0 80px;
  }
`;

export const LayoutRow = styled(Flex)`
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -8px;
  margin-left: -8px;
  min-width: 0px;
`;

export const Col = styled(Flex)`
  padding-left: 8px;
  padding-right: 8px;
`;

export {};
