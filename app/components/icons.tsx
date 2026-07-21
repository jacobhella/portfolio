interface IconProps {
  className?: string;
}

function GitHubIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.5V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, (props: IconProps) => React.ReactNode> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function SocialIcon({ name, className }: { name: string; className?: string }) {
  const Icon = SOCIAL_ICONS[name];
  return Icon ? <Icon className={className} /> : null;
}
