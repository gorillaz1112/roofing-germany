'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Props = React.ComponentProps<typeof Link> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  exact?: boolean;
};

// Active-aware nav link with animated red underline.
// Server-rendered markup is identical; active state only adds a class at hydration.
export function NavLink({
  href,
  children,
  className,
  exact = false,
  ...rest
}: Props) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'relative inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
        "after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform after:duration-300 after:content-['']",
        'hover:after:scale-x-100',
        isActive && 'text-foreground after:scale-x-100',
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
