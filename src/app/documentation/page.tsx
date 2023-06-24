import DocumentationTabs from "@/components/DocumentationTabs";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Word Check Similarity Api",
  description: "work check software",
};

type Props = {};

const Documentation = (props: Props) => {
  return (
    <div className=" container max-w-full mx-auto mt-12 sm:pb-12 pb-0">
      <div className=" flex flex-col items-center gap-6">
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/app/similarity</Paragraph>
        <DocumentationTabs />
      </div>
    </div>
  );
};

export default Documentation;
