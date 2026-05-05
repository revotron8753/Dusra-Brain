const logo = '/assets/LOGO.svg';
import { CALENDLY_URL, TODAY } from '../constants'

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <img src={logo} alt="Dusra Brain" className="ann-logo" />
      <span className="tag">90% OFF</span>
      <span className="msg">Limited Offer — Only $29 today · Deadline: {TODAY}</span>
      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="ann-cta">Book Now</a>
    </div>
  )
}
