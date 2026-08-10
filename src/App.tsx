import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./app/router";

function App() {
  return (
    <HelmetProvider>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-deep">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
