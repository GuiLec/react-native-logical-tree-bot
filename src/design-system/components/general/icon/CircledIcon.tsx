import styled from '@emotion/native';
import {IconName} from './icons';
import {ColorKeyPaths} from '../../../theme/colors';
import {Icon} from './Icon';
import {hex2rgba} from '../../../styling-helpers/hex2rgba';
import {getColorWithKey} from '../../../styling-helpers/getColorWithKey';

interface Props {
  icon: IconName;
  color?: ColorKeyPaths;
}

export const CircledIcon = ({icon, color = 'primary.contrastText'}: Props) => {
  return (
    <Circle color={color}>
      <Icon colorKey={color} size="$6" name={icon}></Icon>
    </Circle>
  );
};

const Circle = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: ColorKeyPaths;
}) => {
  return <StyledCircle colorKey={color}>{children}</StyledCircle>;
};

const StyledCircle = styled.View<{colorKey: ColorKeyPaths}>(
  ({theme, colorKey}) => ({
    borderRadius: 1_000_000,
    padding: theme.spacings.$2,
    backgroundColor: hex2rgba(getColorWithKey(theme, colorKey), 0.33),
  }),
);
