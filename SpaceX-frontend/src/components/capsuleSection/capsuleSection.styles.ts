import { useMemo } from 'react';
import { useBreakpoints } from '@hooks/useBreakPoints';
import { zIndex } from '@theme/zIndex';
import { colors } from '@theme/colors';
import { fontSizeMobile, fontSizeWeb, fontWeight } from '@theme/fonts';

export const useStyles = (backgroundColor?: string) => {
  const { isMobile } = useBreakpoints();

  return useMemo(
    () =>
      ({
        csWrapper: {
          zIndex: zIndex.base,
          padding: isMobile ? 20 : 30,
          textAlign: 'center',
          background: backgroundColor,
        },
        csHeaderText: {
          color: colors.white,
          fontSize: isMobile ? fontSizeMobile.heading : fontSizeWeb.heading,
          fontWeight: fontWeight.bold,
          paddingTop: 30,
          // borderTop: `1px solid ${colors.white}`,
        },
        csDataWrapper: {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 30,
          // borderBottom: `1px solid ${colors.white}`,
        },
        csInfoWrapper: {
          color: colors.white,
          width: 'max-content',
          border: `1px solid ${colors.white}`,
          margin: `${isMobile ? 12 : 4}px 28px`,
          borderRadius: 8,
          padding: isMobile ? 20 : 30,
          '&:hover': {
            cursor: 'pointer',
            boxShadow: `0px 0px 20px ${colors.white}`,
          },
        },
      } as const),
    [isMobile]
  );
};
