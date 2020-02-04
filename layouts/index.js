import SvgBackdrop from '../components/svg/SvgBackdrop';
import tw from 'tailwind.macro';

export const Identity = x => x;

const backdropStyles = [
  tw`
    relative
    w-full
    h-full
    overflow-hidden
    bg-blue-300
    z-30
    flex
    justify-center
  `
]

export const BackdropLayout = page => {
  return (
    <div css={backdropStyles}>
      <SvgBackdrop css={[tw`absolute w-full bottom-0 z-20`]} />
      {page}
    </div>
  );
};
