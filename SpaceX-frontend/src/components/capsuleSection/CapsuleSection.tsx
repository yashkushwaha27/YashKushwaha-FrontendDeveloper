import { useMemo, useState } from 'react';
import { useStyles } from './capsuleSection.styles';
import { CapsuleDataRenderer, InfoData } from '@components/common';

/**
 * Component to render capsule section
 * @param {ICapsuleSection} props
 * @param {string} props.heading
 * @param {ICapsuleData[]} props.data
 * @param {string} props.id
 * @param {string} props.backgroundColor
 * @returns {JSX.Element}
 */
const CapsuleSection = ({
  heading,
  data,
  id,
  backgroundColor,
}: ICapsuleSection): JSX.Element => {
  const styles = useStyles(backgroundColor);

  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<ICapsuleData>();

  /**
   * Method to render heading of capsule section
   */
  const headingToRender = useMemo(() => {
    return <h3 css={styles.csHeaderText}>{heading}</h3>;
  }, [styles, heading]);

  /**
   * Method to render the capsule data
   */
  const dataToRender = useMemo(() => {
    /**
     * Method to handle card click
     * @param {ICapsuleData} data
     */
    const onClickHandler = (data: ICapsuleData) => {
      setSelectedData(data);
      setOpen(true);
    };

    return (
      <div css={styles.csDataWrapper}>
        {data.map((item: ICapsuleData) => (
          <div
            role="button"
            onClick={() => onClickHandler(item)}
            tabIndex={0}
            onKeyDown={(e: any) => e.keyCode === 13 && onClickHandler(item)}
            css={styles.csInfoWrapper}
            key={item.capsule_id}
          >
            <InfoData
              label={'capsule_id'.split('_').join(' ')}
              value={item.capsule_id}
            />
            <InfoData label={'status'} value={item.status} />
          </div>
        ))}
      </div>
    );
  }, [data, styles]);

  return (
    <div id={id} css={styles.csWrapper}>
      {headingToRender}
      {dataToRender}
      <CapsuleDataRenderer
        open={open}
        onClose={() => setOpen(false)}
        data={selectedData}
      />
    </div>
  );
};

interface ICapsuleSection {
  id: string;
  heading?: string;
  backgroundColor?: string;
  data: ICapsuleData[];
}

export default CapsuleSection;
