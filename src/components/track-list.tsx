import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Track } from "@/data/tracks";
interface TrackListProps {
  data: Track[];
}

export const TrackList: React.FC<TrackListProps> = ({ data }) => {
  return (
    <div className="space-y-8">
      {data.map((item) => (
        <div key={item.title} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={item.coverImage.url} alt={item.title} />
            <AvatarFallback>HI</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.title}</p>
            {/* <p className="text-sm text-muted-foreground">
              subtext
            </p> */}
          </div>
          {/* <div className="ml-auto font-medium">far right text</div> */}
        </div>
      ))}
    </div>
  );
};
