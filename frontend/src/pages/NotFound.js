import { FullscreenLayout } from "../components";

export const Notfound = () => {
  return (
    <FullscreenLayout>
      <div className="mx-auto flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-center">404 - Not Found.</h1>
      </div>
    </FullscreenLayout>
  );
};
