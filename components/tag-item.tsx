'use client';

import { Tags } from 'lucide-react';
import { Badge } from './ui/badge';
import { useRouter } from 'next/navigation';

interface TagItemProps {
  id: number;
  name: string;
  count?: number;
  size?: 'sm' | 'lg' | 'xl';
}

export const TagItem = ({ id, name, count, size }: TagItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/twitch/tags/${id}`);
  };
  return (
    <Badge
      size={size ?? 'default'}
      onClick={handleClick}
      className='cursor-pointer'
    >
      <Tags className='h-6 w-6 mr-2' />
      {name}
      {'  '}
      {count && <span className='ml-2'>{count}개</span>}
    </Badge>
  );
};
