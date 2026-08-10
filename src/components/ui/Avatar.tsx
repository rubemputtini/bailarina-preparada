interface AvatarProps {
  name: string;
  photo?: string;
}

export function Avatar({ name, photo }: AvatarProps) {
  if (photo) {
    return <img src={photo} alt={name} className="h-11 w-11 rounded-full object-cover" />;
  }
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-sm text-ink">
      {initials}
    </span>
  );
}
