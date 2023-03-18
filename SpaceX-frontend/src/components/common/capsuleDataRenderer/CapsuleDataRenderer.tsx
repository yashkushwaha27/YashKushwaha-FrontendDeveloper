import { useMemo } from 'react';
import { useStyles } from './capsuleDataRenderer.styles';
import InfoData from '../infoData';
import { content } from '@constants/content';

/**
 * Method to get full date
 * @param date {Date}
 * @returns {string}
 */
const getFullDate = (date: Date): string => {
  const dateObj = new Date(date);
  return (
    dateObj.getDate() +
    ' - ' +
    dateObj.getMonth() +
    1 +
    ' - ' +
    dateObj.getFullYear()
  );
};

/**
 * Method to render the modal containing capsule data
 * @param {ICapsuleDataRenderer} props
 * @param {ICapsuleData} props.data
 * @param {boolean} props.open
 * @param {() => void} props.onClose
 * @returns {JSX.Element}
 */
const CapsuleDataRenderer = ({
  data,
  open,
  onClose,
}: ICapsuleDataRenderer): JSX.Element => {
  const styles = useStyles();

  /**
   * method to render the backdrop
   */
  const backdropToRender = useMemo(() => {
    return <div onClick={onClose} css={styles.cdrBackdrop} />;
  }, [styles]);

  if (!open) return <></>;

  return (
    <>
      {backdropToRender}
      <div css={styles.cdrDataWrapper}>
        <div css={styles.cdrDataContainer}>
          {Object.keys(data).map((key: any) => {
            return data[key] &&
              key !== 'missions' &&
              key !== 'details' &&
              key !== 'original_launch' ? (
              <InfoData label={key.split('_').join(' ')} value={data[key]} />
            ) : key === 'original_launch' ? (
              <InfoData
                label="original launch"
                value={getFullDate(data.original_launch)}
              />
            ) : (
              <></>
            );
          })}
          <InfoData label="details" value={data?.details} />
        </div>
        {data?.missions.length ? (
          <div css={styles.cdrMissionsWrapper}>
            <p css={[styles.cdrInfoWrapper, styles.cdrInfoHeading]}>
              {content.global_missions_text} :
            </p>
            <ul css={styles.cdrMissionsList}>
              {data.missions.map((item: ICapsuleMission) => (
                <li css={styles.cdrMissionListItem}>
                  <InfoData label="name" value={item.name} />
                  <InfoData label="flights" value={item.flight} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

interface ICapsuleDataRenderer {
  open: boolean;
  onClose: () => void;
  data: IObject;
}

export default CapsuleDataRenderer;
