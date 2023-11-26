import styled from '@emotion/native';
import {Box} from '../layout/box/Box';

export const GenericCard = styled(Box)<{
  minWidth?: number;
}>(({minWidth, theme}) => ({
  borderRadius: theme.borderRadius.$2,
  padding: theme.spacings.$2,
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth,
}));
