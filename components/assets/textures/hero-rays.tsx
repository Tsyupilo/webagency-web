import LightRays from "@/components/ui/light-rays";

export const HeroRays = () => {
  return (
    <LightRays
      raysOrigin="top-center"
      raysColor="#AED7E8"
      raysSpeed={0.8}
      lightSpread={1}
      rayLength={1.9}
      followMouse={true}
      mouseInfluence={0.02}
      noiseAmount={0.1}
      distortion={0.05}
      className="custom-rays"
    />
  );
};
