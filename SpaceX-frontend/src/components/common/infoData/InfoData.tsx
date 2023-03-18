import { useStyles } from './infoData.styles';

/**
 * Method to render Info Data
 * @param {IInfoData} props
 * @param {string} props.label
 * @param {any} props.value
 * @returns {JSX.Element}
 */
const InfoData = ({ label, value }: IInfoData): JSX.Element => {
  const styles = useStyles();
  return (
    <div css={styles.cdrInfoWrapper}>
      <p css={styles.cdrInfoHeading}>{label} :</p>
      <p css={styles.cdrInfoValue}>{value}</p>
    </div>
  );
};

interface IInfoData {
  label: string;
  value: any;
}

export default InfoData;
