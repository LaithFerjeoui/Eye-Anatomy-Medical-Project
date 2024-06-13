import React from "react";

export function GridBackgroundDemo() {
  return (
   <>
     <div className=" h-screen w-full bg-grid-black/[0.1] absolute inset-0 flex items-center justify-center">

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-gray-600 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"/>
    </div>
    </>
  );
}
