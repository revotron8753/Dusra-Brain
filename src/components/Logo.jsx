const logoSvg = '/assets/Purple and Green Modern Gadget Repair Business Card.svg';

export default function Logo({ variant = 'dark', size = 'md' }) {
  return (
    <a href="#top" className={`logo logo-${variant} logo-${size}`} aria-label="Dusra Brain home">
      <img src={logoSvg} alt="Dusra Brain" className="logo-img" />
    </a>
  );
}
