import { spacex } from '@assets/svgs';
import { useStyles } from './header.styles';
import { Button } from '@components/common';
import { content } from '@constants/index';

/**
 * Element to render the application header
 * @returns {JSX.Element}
 */
const Header = (): JSX.Element => {
  const styles = useStyles();

  return (
    <div css={styles.headerWrapper}>
      <img src={spacex} css={styles.headerIcon} />
      <Button variant="secondary" withShadow>
        {content.header_button_text}
      </Button>
    </div>
  );
};

export default Header;
