import React from "react";
import HeaderBackground from "@/components/assets/header-background.png";

const PageNavbarLeftContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <div
    ref={ref}
    className="justify-start"
    // className="flex items-center gap-2 h-10"
    {...props}
  />
));

PageNavbarLeftContent.displayName = "PageNavbarLeftContent";

const PageNavbarRightContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <div ref={ref} className="justify-end" {...props} />
));

PageNavbarRightContent.displayName = "PageNavbarRightContent";

const PageNavbarIconButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className="all-center h-8 w-8 duration-200 hover:bg-gray-100 rounded-lg"
    {...props}
  />
));

PageNavbarIconButton.displayName = "PageNavbarIconButton";

const PageNavbarPrimaryButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className="h-8 gap-1 bg-primary hidden py-1 px-2 duration-200 text-white rounded-lg text-xs md:flex items-center justify-center"
    {...props}
  />
));
PageNavbarPrimaryButton.displayName = "PageNavbarPrimaryButton";

function PageNavbar({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex p-2 md:p-4 text-gray-500 justify-between items-center" style={{backgroundImage: `url(${HeaderBackground.src})`, backgroundRepeat: 'round'}}>
        {children}
      </div>

      <hr className="bg-gray-400 mx-2" />
    </div>
  );
}

export default PageNavbar;

export {
  PageNavbarLeftContent,
  PageNavbarRightContent,
  PageNavbarIconButton,
  PageNavbarPrimaryButton,
};
