import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Artist } from "@/data/artists";
import Link from "next/link";
interface SimpleListProps {
  data: Artist[];
}

export const ArtistList: React.FC<SimpleListProps> = ({ data }) => {
  return (
    <div className="">
      {data.map((item) => (
        <Link href={`/artists/${item.url.split("/").pop()}`}>
          <div
            key={item.name}
            className="flex items-center p-4 hover:bg-slate-200"
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src={item.coverImage.url} alt={item.name} />
              <AvatarFallback>HI</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{item.name}</p>
              {/* <p className="text-sm text-muted-foreground">
              subtext
            </p> */}
            </div>
            {/* <div className="ml-auto font-medium">far right text</div> */}
          </div>
        </Link>
      ))}
    </div>
  );
};
