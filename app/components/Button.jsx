import Link from 'next/link';

export function Button({ children, href, variant = 'primary', size = 'medium', type = 'button', className = '' }) {
  const baseClasses = 'inline-block font-semibold uppercase tracking-wider transition-all duration-300 text-center';
  
  const variantClasses = {
    primary: 'bg-brown text-cream border border-brown hover:bg-transparent hover:text-brown',
    outline: 'bg-transparent text-brown border border-brown hover:bg-brown hover:text-cream',
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-xs',
    medium: 'px-8 py-3 text-sm',
    large: 'px-10 py-4 text-base',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}