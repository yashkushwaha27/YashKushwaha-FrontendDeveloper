import { useStyles } from './shadowSeparator.styles';

/**
 * Component to render a shadow separator
 * @returns {JSX.Element}
 */
const ShadowSeparator = () => {
  const styles = useStyles();

  return <div css={styles.ssWrapper} />;
};

export default ShadowSeparator;
