import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
};

export const CardSkeleton = () => {
  return (
    <div className="glass-effect p-6 rounded-2xl space-y-4">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-10 w-1/3" />
    </div>
  );
};

export const ServiceCardSkeleton = () => {
  return (
    <div className="glass-effect p-6 sm:p-8 rounded-2xl space-y-4">
      <Skeleton className="h-16 w-16 rounded-xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-9 w-24" />
    </div>
  );
};

export const BlogCardSkeleton = () => {
  return (
    <div className="glass-effect rounded-2xl overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-9 w-28" />
      </div>
    </div>
  );
};

export default Skeleton;

