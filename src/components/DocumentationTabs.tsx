"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import Code from "@/components/ui/Code";
import { nodejs, python } from "@/helpers/documentation-code";

type Props = {};

const DocumentationTabs = (props: Props) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">Nodejs</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs" className="overflow-x-scroll">
        <Code language="javascript" code={nodejs} show animated />
      </TabsContent>
      <TabsContent value="python" className="overflow-x-scroll">
        <Code language="python" code={python} show animated />
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
