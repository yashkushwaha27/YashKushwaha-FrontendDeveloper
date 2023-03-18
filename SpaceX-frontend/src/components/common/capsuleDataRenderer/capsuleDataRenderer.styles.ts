import { useMemo } from 'react';
import { useBreakpoints } from '@hooks/useBreakPoints';
import { zIndex } from '@theme/zIndex';
import { colors } from '@theme/colors';
import { fontSizeMobile, fontSizeWeb, fontWeight } from '@theme/fonts';

const TRANSITION = '0.3s ease all';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(
    () =>
      ({
        cdrBackdrop: {
          transition: TRANSITION,
          background: 'rgba(0,0,0,0.45)',
          zIndex: zIndex.backdrop,
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        cdrDataWrapper: {
          display: 'flex',
          flexDirection: 'column',
          padding: isMobile ? 16 : 32,
          position: 'fixed',
          minWidth: isMobile ? '70%' : 575,
          maxWidth: isMobile && '70%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: zIndex.modal,
          background: colors.white,
          borderRadius: 8,
        },
        cdrDataContainer: {
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        },
        cdrInfoWrapper: {
          display: 'flex',
          alignItems: 'center',
          padding: isMobile ? 4 : 8,
        },
        cdrInfoHeading: {
          margin: 0,
          fontSize: !isMobile
            ? fontSizeWeb.paragraph
            : fontSizeMobile.paragraph,
          fontWeight: fontWeight.semiBold,
        },
        cdrInfoValue: {
          margin: 0,
          paddingLeft: 4,
          fontWeight: fontWeight.regular,
        },
        cdrMissionsWrapper: {
          display: 'flex',
          flexDirection: 'column',
        },
        cdrMissionsList: {
          display: 'flex',
          alignItems: 'flex-start',
        },
        cdrMissionListItem: {
          marginRight: 30,
        },
      } as const),
    [isMobile]
  );
};
