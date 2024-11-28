import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    // username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
  },
  {
    name: "Jill",
    // username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
  },
  {
    name: "John",
    // username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
  },
  {
    name: "Jane",
    // username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
  },
  {
    name: "Jenny",
    // username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
  },
  {
    name: "James",
    // username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="25" height="25" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default () => {
  return (
    <section className="bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">What Our Customers Are Saying</h2>
        <MarqueeDemo />
      </div>
    </section>
  );
};
