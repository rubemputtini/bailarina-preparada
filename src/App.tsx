import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./app/router";

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center" style={{ background: "#302539" }}>
          <div className="w-8 h-8 rounded-full border-2 border-brand-accent border-t-transparent animate-spin" />
        </div>
      }>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
