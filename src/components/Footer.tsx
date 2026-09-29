import { Mail, MapPin, Phone } from 'lucide-react'
import { footer, images } from '../data/siteData'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  XIcon,
  YouTubeIcon,
} from './BrandIcons'
import './Footer.css'

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'X', Icon: XIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'YouTube', Icon: YouTubeIcon },
  { label: 'LinkedIn', Icon: LinkedInIcon },
  { label: 'WhatsApp', Icon: WhatsAppIcon },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner page">
        <div className="site-footer__about">
          <img src={images.footerLogo} alt="Dhanalakshmi Srinivasan University" width={85} height={85} />
          <p>{footer.about}</p>
          <ul className="site-footer__social">
            {socials.map(({ label, Icon }) => (
              <li key={label}>
                <a href="#" aria-label={label}>
                  <Icon size={19} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="site-footer__col" aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>
            {footer.quickLinks.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__col" aria-label="Useful links">
          <h3>Useful Links</h3>
          <ul>
            {footer.usefulLinks.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__col site-footer__contact">
          <h3>Get In Touch</h3>
          <ul>
            <li>
              <MapPin size={16} strokeWidth={1.7} />
              <span>{footer.address}</span>
            </li>
            <li>
              <Mail size={16} strokeWidth={1.7} />
              <a href={`mailto:${footer.email}`}>{footer.email}</a>
            </li>
            <li>
              <Phone size={16} strokeWidth={1.7} />
              <span>{footer.phones.join(' | ')}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom" />
    </footer>
  )
}
