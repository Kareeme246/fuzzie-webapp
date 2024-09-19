import React from "react";

type Props = { children: React.ReactNode };

function Layout(props: Props) {
  return (
    <div className="rounded-tl-3xl border-l-[1px] border-t-[1px] pb-20 h-screen border-muted-foreground/20 overflow-scroll bg-muted/50">
      {props.children}
    </div>
  );
}

export default Layout;
