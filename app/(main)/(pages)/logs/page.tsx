import React from "react";

function LogsPage() {
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Logs
      </h1>
      <div className="flex items-center justify-center text-1xl text-muted-foreground text-red-800">
        This page is not available just yet! <br /> Check back soon for an
        update!
      </div>
    </div>
  );
}

export default LogsPage;
