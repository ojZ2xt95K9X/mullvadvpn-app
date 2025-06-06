import styled from 'styled-components';

import { colors } from '../lib/foundations';
import * as Cell from './cell';

export const StyledCustomDnsFooter = styled(Cell.CellFooter)({
  marginBottom: '2px',
});

export const StyledAddCustomDnsLabel = styled(Cell.Label)<{ $paddingLeft?: number }>((props) => ({
  fontFamily: 'Open Sans',
  fontWeight: 400,
  fontSize: '16px',
  paddingLeft: (props.$paddingLeft ?? 32) + 'px',
  whiteSpace: 'pre-wrap',
  overflowWrap: 'break-word',
  width: '171px',
  marginRight: '25px',
}));

export const StyledItemContainer = styled(Cell.Container)({
  display: 'flex',
  backgroundColor: colors.blue40,
  '&&:hover': {
    backgroundColor: colors.blue80,
  },
});

export const AddServerContainer = styled(Cell.Container)({
  display: 'flex',
  backgroundColor: colors.blue20,
  '&&:hover': {
    backgroundColor: colors.blue60,
  },
});

export const StyledButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  border: 'none',
  background: colors.transparent,
  padding: 0,
  margin: 0,
});

export const StyledLabel = styled(Cell.Label)({
  fontFamily: 'Open Sans',
  fontWeight: 400,
  fontSize: '16px',
  paddingLeft: '32px',
  whiteSpace: 'pre-wrap',
  overflowWrap: 'break-word',
  width: '171px',
  marginRight: '25px',
});

export const StyledRemoveButton = styled.button({
  background: colors.transparent,
  border: 'none',
  padding: 0,
});
