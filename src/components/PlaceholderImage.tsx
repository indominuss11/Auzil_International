import Image from "next/image";

/**
 * Wraps next/image for the local SVG placeholders used throughout the
 * site. `unoptimized` is set because these are flat, tiny placeholder
 * graphics that gain nothing from the image optimisation pipeline — swap
 * this component's usage for a plain <Image> once real photography is
 * added, so genuine photographs still benefit from optimisation.
 */
export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      unoptimized
      className={className}
    />
  );
}
