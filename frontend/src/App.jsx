import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AboutUs from './pages/aboutus.jsx';
import Home from './pages/home.jsx';
import ServicesPage from './pages/Services.jsx';
import ContactPage from './pages/contactus.jsx';
import PrivateCloudPage from './pages/SysCarePrivateCloud.jsx';
import HostedServicesPage from './pages/HostedServices.jsx';
import ServiceDeskPage from './pages/Service Desk.jsx';
import ManagedITServicesPage from './pages/ManagedITServices.jsx';
import ConnectivityPage from './pages/Connectivity.jsx';
import VoiceVideoPage from './pages/Voice&Video.jsx';
import SecurityPage from './pages/Security.jsx';
import CloudPage from './pages/Cloud.jsx';
import DesignDevPage from './pages/Design&Dev.jsx';
import DigitalMarketingPage from './pages/DigitalMarketing.jsx';
import CyberSecurityConsultancyServicesPage from './pages/CyberSecurityConsultancyServices.jsx';
import ManagedSecurityServicesPage from './pages/ManagedSecurityServices.jsx';
import ITInfraProjectsPage from './pages/ITInfraProjects.jsx';
import DevelopmentAutomationPage from './pages/ITAutomation.jsx';
import SmallBusinessPage from './pages/SmallBusiness.jsx';
import EnterprisePage from './pages/Enterprise.jsx';
import PrivacyPolicy from './pages/Privacy_Policy.jsx';

// ScrollToTop component - Add this component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop /> {/* Add this line */}
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
          <Route path='/syscare-services' element={<ServicesPage />}></Route>
          <Route path='/contact-Us' element={<ContactPage />}></Route>
          <Route path='/SysCare-Private-Cloud' element={<PrivateCloudPage />}></Route>
          <Route path='/Hosted-Services' element={<HostedServicesPage />}></Route>
          <Route path='/Service-Desk' element={<ServiceDeskPage />}></Route>
          <Route path='/Managed-IT-Services' element={<ManagedITServicesPage />}></Route>
          <Route path='/Connectivity' element={<ConnectivityPage />}></Route>
          <Route path='/VoiceVideo' element={<VoiceVideoPage />}></Route>
          <Route path='/Security' element={<SecurityPage />}></Route>
          <Route path='/Cloud' element={<CloudPage />}></Route>
          <Route path='/DesignDev' element={<DesignDevPage />}></Route>
          <Route path='/DigitalMarketing' element={<DigitalMarketingPage />}></Route>
          <Route path='/CyberSecurityConsultancyServices' element={<CyberSecurityConsultancyServicesPage />}></Route>
          <Route path='/ManagedSecurityServices' element={<ManagedSecurityServicesPage />}></Route>
          <Route path='/ITInfraProjects' element={<ITInfraProjectsPage />}></Route>
          <Route path='/DevelopmentAutomation' element={<DevelopmentAutomationPage />}></Route>
          <Route path='/SmallBusiness' element={<SmallBusinessPage />}></Route>
          <Route path='/Enterprise' element={<EnterprisePage />}></Route>
          <Route path='/SysCare-Privacy-Policy' element={<PrivacyPolicy />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;