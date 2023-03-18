import { useMemo } from 'react';
import { homeBackground, homeBackgroundMobile } from '@assets/images';
import { useBreakpoints } from '@hooks/useBreakPoints';
import { zIndex } from '@theme/zIndex';
import { colors } from '@theme/colors';
import { fontSizeMobile, fontSizeWeb, fontWeight } from '@theme/fonts';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(
    () =>
      ({
        homeWrapper: {
          height: '90%',
          backgroundImage: `url(${
            isMobile ? homeBackgroundMobile : homeBackground
          })`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          padding: isMobile ? 20 : 30,
        },
        homeParticles: {
          opacity: 0.5,
        },
        homeTextWrapper: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginTop: '10%',
        },
        homeHeadingText: {
          color: colors.white,
          fontSize: isMobile ? fontSizeMobile.heading : fontSizeWeb.heading,
          fontWeight: fontWeight.bold,
        },
        homeSubHeadingText: {
          color: colors.white,
          fontSize: isMobile ? fontSizeMobile.subLabel : fontSizeWeb.subLabel,
          fontWeight: fontWeight.medium,
        },
        homeCapsulesButtonWrapper: {
          display: 'flex',
          alignItems: 'center',
          paddingTop: 40,
          zIndex: zIndex.home,
        },
        homeCapsuleButton: {
          marginRight: isMobile ? 8 : 16,
        },
        homeContentWrapper: {
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '20%',
        },
      } as const),
    [isMobile]
  );
};
