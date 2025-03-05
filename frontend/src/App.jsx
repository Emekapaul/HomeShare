import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import EmailVerificationModal from "./components/EmailVerificationModal";
const DashBoard = React.lazy(() => import("./Pages/Dashboard"));
import PageLoader from "./components/PageLoader";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <main className="min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path="/emailverify" element={<EmailVerificationModal />} />

          {/* Private Route */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Suspense
                  fallback={<PageLoader loaderText="Loading Dashboard..." />}
                >
                  <DashBoard />
                </Suspense>
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
