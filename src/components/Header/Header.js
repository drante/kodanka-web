import "./Header.css";

const MenuOption = ({ icon, label, onClick }) => {
  return (
    <div className="menu-option" onClick={onClick}>
      <img src={icon} alt={label} className="menu-option__icon" />

      <p className="menu-option__label">{label}</p>
    </div>
  );
};

export function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <p className="header__title">kodanka</p>

        <div className="header__menu">
          <MenuOption
            icon={`${process.env.PUBLIC_URL}/images/icons/mail.svg`}
            label="contact"
            onClick={() => {
              window.location.href = "mailto:anton@kodanka.se";
            }}
          />
        </div>
      </div>
    </header>
  );
}
