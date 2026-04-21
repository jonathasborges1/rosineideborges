type Props = {
  from: string;
  to: string;
  flip?: boolean;
};

export default function WaveDivider({ from, to, flip = false }: Props) {
  const d = flip
    ? "M0,8 C360,52 1080,4 1440,44 L1440,56 L0,56 Z"
    : "M0,44 C360,4 1080,52 1440,8 L1440,56 L0,56 Z";

  return (
    <div style={{ backgroundColor: from, lineHeight: 0 }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="block w-full h-7 sm:h-10 md:h-12"
        style={{ fill: to }}
      >
        <path d={d} />
      </svg>
    </div>
  );
}
