import { colors } from '@theme/colors';
import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(
    () =>
      ({
        ssWrapper: {
          padding: 1,
          boxShadow: `0px 0px 20px ${colors.white}`,
        },
      } as const),
    []
  );
};
