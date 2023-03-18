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
          transition: '0.3s',
          '&:hover': {
            cursor: 'pointer',
          },
        },
        buttonBorder: {
          border: `1px solid ${colors.white}`,
        },
        buttonPrimary: {
          background: colors.white,
          color: colors.black,
          '&:hover': {
            background: 'transparent',
            color: colors.white,
          },
        },
        buttonSecondary: {
          background: 'transparent',
          color: colors.white,
          '&:hover': {
            background: colors.white,
            color: colors.black,
          },
        },
        buttonHover: {
          '&:hover': {
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
