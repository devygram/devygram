import Container from './Container';
import BioText from '../landing/BioText';
import SocialLinks from '../landing/SocialLinks';
import RepeatSeparator from '../ui/repeat-separator';
import VisitorCounter from '../landing/VisitorCounter';
import Image from 'next/image';

const Hero = () => {
  return (
    <Container className={`flex flex-col items-start justify-center`}>
      <div className="flex h-full w-full">
        <div className="p-5">
          <div className="w-fit rounded-[9px] border p-[3.8px] dark:border-neutral-700">
            <div className="box-border h-25 w-25 overflow-hidden rounded-[7px] border bg-neutral-200 p-[1px] select-none md:h-30 md:w-30 dark:bg-white">
              <Image
                src="/devygram.png"
                alt="Devender Papani - Freelance Web Developer & Digital Marketing Expert"
                height={120}
                width={120}
                priority
                className="box-border h-full w-full rounded-[5px] object-cover object-top transition-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center md:gap-1">
          <div className="flex items-center justify-end pb-1">
            <VisitorCounter />
          </div>

          <h1 className="flex w-full flex-col text-2xl font-medium text-neutral-700 md:pb-0.5 md:text-3xl dark:text-neutral-50">
            Devender Papani
          </h1>
          <span className="flex items-center gap-2 text-sm font-medium text-neutral-500/70 md:text-base dark:text-neutral-400">
            Freelance Web Developer & Digital Marketing Expert
          </span>
          <h2 className="text-xs font-medium text-neutral-500/70 dark:text-neutral-400">
            - Hyderabad, IND
          </h2>
        </div>
      </div>
      <RepeatSeparator />
      <BioText />
      <RepeatSeparator />
      <SocialLinks />
    </Container>
  );
};

export default Hero;
