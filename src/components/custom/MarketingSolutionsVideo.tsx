import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function MarketingSolutionsVideo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/pa_uil3pe6g"
        thumbnailSrc="src/lib/facebook-ads-vs-google-ads.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/pa_uil3pe6g"
        thumbnailSrc="src/lib/facebook-ads-vs-google-ads.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
