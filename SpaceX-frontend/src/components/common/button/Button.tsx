import { useStyles } from './button.styles';

/**
 * Custom component to implement button
 * @param {IButton} props
 * @param {string} props.children
 * @param {VARIANT} props.variant (optional)
 * @param {boolean} props.withShadow (optional)
 * @param {IObject} props.customStyles (optional)
 * @returns {JSX.Element}
 */
const Button = ({
  children,
  variant,
  withShadow,
  customStyles,
}: IButton): JSX.Element => {
  const styles = useStyles();

  return (
    <div
      role="button"
      css={[
        styles.buttonWrapper,
        styles[variant === 'primary' ? 'buttonPrimary' : 'buttonSecondary'],
        withShadow && styles.buttonHover,
        customStyles,
      ]}
    >
      <p css={styles.buttonText}>{children}</p>
    </div>
  );
};

type VARIANT = 'primary' | 'secondary';

interface IButton {
  children: string;
  variant?: VARIANT;
  withShadow?: boolean;
  customStyles?: IObject;
}

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
