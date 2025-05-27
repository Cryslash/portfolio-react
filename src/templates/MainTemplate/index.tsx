import type React from 'react';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      {children}
      {/* <Footer /> */}
    </>
  );
}
