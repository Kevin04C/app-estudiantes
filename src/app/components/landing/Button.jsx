const BUTTONS = {
  primary: 'landing-button-primary',
  secondary: 'landing-button-secondary',
};
export const Button = ({ children, type, href, target = '_self' }) => {
  const buttonClass = BUTTONS[type] ?? BUTTONS.primary;
  return (
    <a href={href} target={target} className={`landing-button ${buttonClass}`}>
      {children}
    </a>
  );
};
