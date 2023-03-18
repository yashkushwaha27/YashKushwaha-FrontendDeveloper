import { useMemo } from 'react';
import { useBreakpoints } from '@hooks/useBreakPoints';
import { colors } from '@theme/colors';
import { fontSizeMobile, fontSizeWeb } from '@theme/fonts';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(
    () =>
      ({
        buttonWrapper: {
          borderRadius: 12,
          padding: '8px 12px',
          border: '1px solid white',
          transition: '0.3s ease-all',
          '&:hover': {
            cursor: 'pointer',
          },
        },
        buttonPrimary: {
          background: colors.white,
          color: colors.black,
        },
        buttonSecondary: {
          background: 'transparent',
          color: colors.white,
        },
        buttonHover: {
          '&:hover': {
            cursor: 'pointer',
            boxShadow: `0px 0px 20px ${colors.white}`,
          },
        },
        buttonText: {
          margin: 0,
          fontSize: isMobile
            ? fontSizeMobile.placeholder
            : fontSizeWeb.placeholder,
        },
      } as const),
    [isMobile]
  );
};
