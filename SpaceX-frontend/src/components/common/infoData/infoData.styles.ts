import { useMemo } from 'react';
import { useBreakpoints } from '@hooks/useBreakPoints';
import { fontSizeMobile, fontSizeWeb, fontWeight } from '@theme/fonts';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();
  return useMemo(
    () =>
      ({
        cdrInfoWrapper: {
          display: 'flex',
          alignItems: isMobile ? 'flex-start' : 'center',
          flexWrap: 'wrap',
          padding: isMobile ? 4 : 8,
          fontSize: !isMobile
            ? fontSizeWeb.paragraph
            : fontSizeMobile.paragraph,
        },
        cdrInfoHeading: {
          margin: 0,
          fontWeight: fontWeight.semiBold,
        },
        cdrInfoValue: {
          margin: 0,
          paddingLeft: 4,
          fontWeight: fontWeight.regular,
          display: 'flex',
          flexWrap: 'wrap',
        },
      } as const),
    [isMobile]
  );
};
