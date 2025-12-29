import React, { useState } from "react";
import "./index.css";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { HomePage } from "./Homepage";
import ResumeBuilder from "./Resumebuilder";
import { TrajectoryBuilder } from "./TrajectoryBuilder";
import { DashboardPage } from "./Dashboard";
import PracticePage from "./Practicesession";
import AIFriend from "./AIFriend";
import { FeatureCategories } from "./FeatureCategories";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage />;
      case "dashboard":
        return <DashboardPage />;
      case "opportunities":
        return <FeatureCategories />;
      case "resume":
        return <ResumeBuilder />;
      case "trajectory-builder":
        return <TrajectoryBuilder />;
      case "practice":
        return <PracticePage />;
      case "AIfriend":
        return <AIFriend />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header setPage={setPage} />

      {/* ✅ NORMAL SCROLL, NO FOCUS HIJACK */}
      <main className="flex-grow overflow-y-auto">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
