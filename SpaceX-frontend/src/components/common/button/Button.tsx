import { useStyles } from './button.styles';

const ENTER_KEY_CODE = 13;

/**
 * Custom component to implement button
 * @param {IButton} props
 * @param {string} props.children
 * @param {() => void} props.onClick
 * @param {VARIANT} props.variant (optional)
 * @param {boolean} props.withShadow (optional)
 * @param {boolean} props.withBorder (optional)
 * @param {IObject} props.customStyles (optional)
 * @returns {JSX.Element}
 */
const Button = ({
  children,
  variant,
  withShadow,
  onClick,
  withBorder,
  customStyles,
}: IButton): JSX.Element => {
  const styles = useStyles();

  return (
    <div
      role="button"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e: any) => e.keyCode === ENTER_KEY_CODE && onClick()}
      css={[
        styles.buttonWrapper,
        withBorder && styles.buttonBorder,
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
  children: string | JSX.Element;
  onClick: () => void;
  withBorder?: boolean;
  variant?: VARIANT;
  withShadow?: boolean;
  customStyles?: IObject;
}

Button.defaultProps = {
  variant: 'primary',
  onClick: () => {},
  withBorder: true,
};

export default Button;
