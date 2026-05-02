import { useState } from 'react';


//type CurrentView = 'landing' | 'login' | 'dashboard' | 'settings' | 'profile';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<CurrentView>('landing');

  const handleGetStarted = () => {
    setCurrentView('login');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('landing');
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleBackToLogin = () => {
    setCurrentView('login');
  };

  // Show landing page
  if (currentView === 'landing') {
    return <LandingPage onGetStarted={handleGetStarted} onLogin={() => setCurrentView('login')} />;
  }

  // Show login page
  if (currentView === 'login') {
    return <LoginPage onLogin={handleLogin} onBack={() => setCurrentView('landing')} />;
  }

  // Show settings page
  if (currentView === 'settings') {
    return <SettingsPage onBack={() => setCurrentView('dashboard')} />;
  }

  // Show profile page
  if (currentView === 'profile') {
    return <ProfilePage onBack={() => setCurrentView('dashboard')} />;
  }

  // Show dashboard if authenticated
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      <Header onLogout={handleLogout} onViewChange={handleViewChange} />
      <div className="flex h-[calc(100vh-73px)]">
        <Navigation />
        <main className="flex-1 p-6 overflow-auto bg-gradient-to-b from-transparent to-green-50/30">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Dynamic Metrics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <DynamicMetricCard
                title="Crop Health Index"
                baseValue={87.3}
                changeRange={8}
                icon={Leaf}
                color="green"
              />
              <DynamicMetricCard
                title="Soil Moisture Avg"
                baseValue={78.5}
                unit="%"
                changeRange={12}
                icon={Droplets}
                color="blue"
              />
              <DynamicMetricCard
                title="Pest Risk Score"
                baseValue={3.2}
                changeRange={2}
                icon={Bug}
                format={(val) => val.toFixed(1)}
                color="orange"
              />
              <DynamicMetricCard
                title="Yield Prediction"
                baseValue={94.2}
                unit="t/ha"
                changeRange={8}
                icon={TrendingUp}
                color="purple"
              />
            </div>

            {/* 3D Field Visualization */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Field3DModel />
              <AnimatedAlertsPanel />
            </div>

            {/* Live Sensor Data */}
            <div className="grid grid-cols-1 gap-6">
              <LiveSensorData />
            </div>

            {/* Charts and Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CropHealthChart />
            </div>

            {/* Soil Analysis */}
            <div className="grid grid-cols-1 gap-6">
              <SoilAnalysis />
            </div>

            {/* Imaging Analysis */}
            <div className="grid grid-cols-1 gap-6">
              <ImagingAnalysis />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}