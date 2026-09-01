import { lazy, Suspense } from "react";

const Profile = lazy(() => import("..//..//components_25-08-2026/Lazy Loading_31-08-2026/Profile"));

function LazyLoadingPage() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Profile />
      </Suspense>
    </div>
  );
}

export default LazyLoadingPage;