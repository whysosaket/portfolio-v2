export default function WorkArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        div[class*="pointer-events-none"][class*="fixed"][class*="bottom-0"] { display: none !important; }
      `}} />
      {children}
    </>
  );
}
