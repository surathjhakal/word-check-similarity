import Image from "next/image";
import Link from "next/link";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Check Similarity Api",
  description: "work check software",
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl w-full mx-auto h-full">
        <div className="h-full gap-6 flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start">
          <div className=" my-auto">
            <LargeHeading
              size="lg"
              className="three-d text-light-gold dark:text-light-gold mb-3 text-4xl lg:text-5xl"
            >
              Easily determine <br /> text similarity.
            </LargeHeading>

            <Paragraph className="max-w-xl lg:text-left">
              With the Text Similarity API, you can easily determine the
              similarity between two pieces of text with a free{" "}
              <Link
                href="/login"
                className="underline underline-offset-2 text-light-gold"
              >
                API key
              </Link>
              .
            </Paragraph>
          </div>
          <Image
            priority
            className="img-shadow"
            quality={100}
            style={{
              objectFit: "contain",
              position: "relative",
            }}
            width={400}
            height={400}
            src="/typewriter.png"
            alt="typewriter"
          />
        </div>
      </div>
    </div>
  );
}
