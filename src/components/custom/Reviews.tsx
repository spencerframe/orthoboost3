import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    location: "Phoenix, AZ",
    body: "Their follow-up process is incredible. We went from converting 20% of leads to over 45% in just two months.",
    img: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
  },
  {
    id: 2,
    name: "Dr. Michael Roberts",
    location: "Denver, CO",
    body: "The scheduling system has transformed our practice. We're now capturing leads we used to miss completely.",
    img: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
  },
  {
    id: 3,
    name: "Dr. Emily Thompson",
    location: "Austin, TX",
    body: "The ROI guarantee gave us confidence to try their service, but their results made us stay.",
    img: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    location: "Seattle, WA",
    body: "Best marketing investment we've made. The lead quality and conversion rates are exceptional.",
    img: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
  },
  {
    id: 5,
    name: "Dr. Lisa Anderson",
    location: "Chicago, IL",
    body: "Their 5-minute response time is a game-changer. Our conversion rates have doubled.",
    img: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
  },
  {
    id: 6,
    name: "Dr. David Martinez",
    location: "Miami, FL",
    body: "The comprehensive follow-up system ensures no lead ever falls through the cracks.",
    img: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  location,
  body,
}: {
  img: string;
  name: string;
  location: string;
  body: string;
}) => {
  return (
    <figure className="relative w-[350px] overflow-hidden rounded-xl bg-white p-6 shadow-[0px_20px_40px_0px_rgba(0,0,0,.1)] mx-4">
      <div className="flex flex-row items-center gap-4">
        <img className="h-10 w-10" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold text-gray-900">
            {name}
          </figcaption>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-gray-700">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white" /> */}
    </div>
  );
};

export default function Reviews() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
        <MarqueeDemo />
      </div>
    </section>
  );
}