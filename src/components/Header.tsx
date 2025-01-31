import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components/ui'
import { RESUME_DATA } from '@/data/resume-data'
import { copyToClipboard } from '@/lib/utils'

interface LocationLinkProps {
  location: string
  locationLink: string
}

const LocationLink: React.FC<LocationLinkProps> = ({
  location,
  locationLink,
}) => {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GlobeIcon className="min-w-3 min-h-3 size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  )
}

interface SocialButtonProps {
  href: string
  icon: React.ElementType
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon: Icon }) => {
  return (
    <Button className="size-8" variant="outline" size="icon" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="size-4" aria-hidden="true" />
      </a>
    </Button>
  )
}

interface ContactButtonsProps {
  contact: typeof RESUME_DATA.contact
  personalWebsiteUrl?: string
}

const ContactButtons: React.FC<ContactButtonsProps> = ({
  contact,
  personalWebsiteUrl,
}) => {
  return (
    <div className="flex gap-x-1 font-mono text-sm text-foreground/80">
      {personalWebsiteUrl && (
        <SocialButton href={personalWebsiteUrl} icon={GlobeIcon} />
      )}
      {contact.email && (
        <Button
          className="size-8 cursor-pointer"
          variant="outline"
          size="icon"
          onClick={() => copyToClipboard(contact.email)}
        >
          <MailIcon className="size-4" aria-hidden="true" />
        </Button>
      )}
      {contact.tel && (
        <Button
          className="size-8 cursor-pointer"
          variant="outline"
          size="icon"
          onClick={() => copyToClipboard(contact.tel)}
        >
          <PhoneIcon className="size-4" aria-hidden="true" />
        </Button>
      )}
      {contact.social.map((social) => (
        <SocialButton key={social.name} href={social.url} icon={social.icon} />
      ))}
    </div>
  )
}

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex-1 space-y-1">
        <div className="text-3xl font-bold">{RESUME_DATA.name}</div>
        <p className="max-w-md text-pretty font-mono text-sm text-foreground/80 mb-6">
          {RESUME_DATA.about}
        </p>

        <LocationLink
          location={RESUME_DATA.location}
          locationLink={RESUME_DATA.locationLink}
        />

        <ContactButtons
          contact={RESUME_DATA.contact}
          personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
        />
      </div>

      <Avatar className="size-28" aria-hidden="true">
        <AvatarImage
          alt={`${RESUME_DATA.name}'s profile picture`}
          src={RESUME_DATA.avatarUrl}
        />
        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
      </Avatar>
    </header>
  )
}

export { Header }
