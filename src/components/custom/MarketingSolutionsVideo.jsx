import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { BorderBeam } from "../magicui/border-beam";

export function MarketingSolutionsVideo() {
  return (
    <div className='relative rounded-xl'>
      <HeroVideoDialog
        className='dark:hidden block'
        animationStyle='from-center'
        videoSrc='https://www.youtube.com/embed/pa_uil3pe6g'
        thumbnailSrc='/images/facebook-ads-vs-google-ads.webp'
        thumbnailAlt='Hero Video'
      />
      <HeroVideoDialog
        className='hidden dark:block'
        animationStyle='from-center'
        videoSrc='https://www.youtube.com/embed/pa_uil3pe6g'
        thumbnailSrc='/images/facebook-ads-vs-google-ads.webp'
        thumbnailAlt='Hero Video'
      />
      <BorderBeam
        size={250}
        duration={15}
        borderWidth={8}
        colorFrom='#2563eb'
        colorTo='#06b6d4'
        delay={10}
        className={'hidden md:block'}
      />
    </div>
  );
}
