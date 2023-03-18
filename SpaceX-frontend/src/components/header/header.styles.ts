import { useMemo } from 'react';
import { colors } from '@theme/colors';
import { useBreakpoints } from '@hooks/useBreakPoints';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(
    () =>
      ({
        headerWrapper: {
          padding: isMobile ? 20 : 30,
          background: colors.black,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        headerIcon: {
          color: colors.white,
          width: isMobile ? 125 : 250,
        },
        headerButton: {
          display: 'flex',
          alignItems: 'center',
        },
        headerSearchIcon: {
          paddingRight: 8,
        },
      } as const),
    [isMobile]
  );
};
