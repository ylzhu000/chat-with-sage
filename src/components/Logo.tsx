type TLogoProps = {
  width?: string | number;
  height?: string | number;
  size?: 'short' | 'long';
};

export default function Logo({ width, height, size = 'long' }: TLogoProps) {
  const defaultSize =
    size === 'short'
      ? {
          width: width || 24,
          height: height || 24,
        }
      : {
          width: width || 180,
          height: height || 40,
        };
  return (
    <a target="__blank" href="https://xpanse.com/">
      <img
        src={
          size === 'long'
            ? '/assets/images/logo.jpg'
            : '/assets/images/logo-short.png'
        }
        alt="Xpanse short logo"
        width={defaultSize.width}
        height={defaultSize.height}
      />
    </a>
  );
}
