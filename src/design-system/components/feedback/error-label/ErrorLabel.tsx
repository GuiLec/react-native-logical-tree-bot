import {type ReactNode} from 'react';
import {Typography} from '../../general/typography/Typography';
import {Box} from '../../layout/box/Box';

interface ErrorLabelProps {
  label: string | ReactNode;
}

// @todo use negative color for error
export const ErrorLabel = ({label}: ErrorLabelProps) => {
  return (
    <Box padding="$1">
      {typeof label === 'string' ? (
        <Typography color="negative.main" variant="caption">
          {label}
        </Typography>
      ) : (
        label
      )}
    </Box>
  );
};
