import { GlobalSkeleton } from "./components/ui/GlobalSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      <GlobalSkeleton />
    </div>
  )
}