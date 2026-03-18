import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/RootLayout';
import { HomePage } from './components/HomePage';
import { CaseStudiesIndex } from './components/CaseStudiesIndex';
import { CaseStudyPage } from './components/CaseStudyPage';
import { MayoClinicCaseStudy } from './components/MayoClinicCaseStudy';
import { HealthcarePage } from './components/HealthcarePage';
import { AIVibeProjectsPage } from './components/AIVibeProjectsPage';
import { HomePageV2 } from './components/HomePageV2';
import { HomePageV3 } from './components/HomePageV3';
import { HomePageV4 } from './components/HomePageV4';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'v2', Component: HomePageV2 },
      { path: 'v3', Component: HomePageV3 },
      { path: 'v4', Component: HomePageV4 },
      { path: 'case-studies', Component: CaseStudiesIndex },
      { path: 'case-studies/presbyterian', Component: CaseStudyPage },
      { path: 'case-studies/mayo-clinic', Component: MayoClinicCaseStudy },
      { path: 'case-studies/:id', Component: CaseStudyPage },
      { path: 'healthcare', Component: HealthcarePage },
      { path: 'ai-vibe-projects', Component: AIVibeProjectsPage },
      { path: '*', Component: HomePage },
    ],
  },
]);