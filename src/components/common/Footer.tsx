import Container from '../layouts/Container';
import RepeatSeparator from '../ui/repeat-separator';
import BottomBanner from '../ui/bottom-banner';

const Footer = () => {
  return (
    <>
      <RepeatSeparator />
      <Container className="py-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-foreground/70 text-center text-sm font-medium">
            &copy; {new Date().getFullYear()} DevyGram
          </p>
        </div>
      </Container>
      <RepeatSeparator />
      <div data-footer-bottom-banner>
        <BottomBanner />
      </div>
    </>
  );
};

export default Footer;
