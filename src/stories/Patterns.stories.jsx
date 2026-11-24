import React from 'react';
import { AboutExperienceSection, ContactFormSection, HeaderNavigation, HeroHome, PortfolioFooter, SkillsSection, WorkProjectsGrid } from '../components';

export default { title: 'Portfolio Design System/Patterns', tags: ['autodocs'] };

const page = { width: 'min(1120px, 94vw)', display: 'grid', gap: 22, padding: 20, background: '#fff', borderRadius: 20 };

export const HeaderAndNavigationPattern = { name: '01 Header & Navigation', render: () => <div style={page}><HeaderNavigation active="Home"/></div> };
export const HomeIntroductionPattern = { name: '02 Home Introduction', render: () => <div style={page}><HeaderNavigation active="Home"/><HeroHome/></div> };
export const ProjectDiscoveryPattern = { name: '03 Project Discovery', render: () => <div style={page}><WorkProjectsGrid projects={[{title:'Safety-First Adaptive Cockpit',tags:['Automotive HMI','EV']},{title:'DriveSync',tags:['Shared mobility','IVI']},{title:'RoadMesh',tags:['V2X','Road safety']}]}/></div> };
export const SkillsExplorationPattern = { name: '04 Skills Exploration', render: () => <div style={page}><SkillsSection/></div> };
export const AboutExperiencePattern = { name: '05 About & Experience', render: () => <div style={page}><AboutExperienceSection entries={[{title:'Senior UX Designer',organization:'Product Studio',date:'2022 — Present'},{title:'UX Designer',organization:'Design Team',date:'2019 — 2022'}]}/></div> };
export const ContactInquiryPattern = { name: '06 Contact & Inquiry', render: () => <div style={page}><ContactFormSection email="hello@subashx24.com"/></div> };
export const FooterPattern = { name: '07 Footer', render: () => <div style={page}><PortfolioFooter/></div> };
