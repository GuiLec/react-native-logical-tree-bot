import {Box} from '../../layout/box/Box';
import {Loader} from './Loader';

export const LoaderContainer = ({
  estimatedHeight,
}: {
  estimatedHeight: number;
}) => {
  return (
    <Box
      height={estimatedHeight}
      alignSelf="stretch"
      alignItems="center"
      justifyContent="center">
      <Loader />
    </Box>
  );
};
