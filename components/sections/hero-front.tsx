"use client";

import LightRays from "../ui/light-rays";

export default function HeroFront() {
	return (
		<div className="w-full h-screen absolute top-0 left-0 -z-10 gradient-mask-b-0">
			<LightRays
				raysOrigin="top-center"
				raysColor="#ffbbff"
				raysSpeed={1.5}
				lightSpread={2.4}
				rayLength={1.2}
				followMouse={true}
				mouseInfluence={0.1}
				noiseAmount={0.1}
				distortion={0.05}
				className="custom-rays"
			/>
		</div>
	);
}
