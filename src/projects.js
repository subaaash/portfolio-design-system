import artwork from './assets/safety-first-adaptive-cockpit.png';
import roadmeshArtwork from './assets/roadmesh.png';
import drivesyncArtwork from './assets/drivesync.png';
import empathyDriveArtwork from './assets/empathy-drive.png';
import caroneArtwork from './assets/carone.png';
import luxeArtwork from './assets/luxe.png';

export const safetyFirstAdaptiveCockpit = {
  title: 'Safety-First Adaptive Cockpit',
  description: 'Adaptive digital cockpit experiences across HUD, cluster, IVI and mobile, designed around driver context and safety.',
  tags: ['Digital Cockpit', 'HUD', 'Cluster', 'IVI', 'Adaptive UX'],
  artwork,
  artworkAlt: 'Adaptive EV cockpit concept with head-up, instrument cluster, infotainment, passenger and mobile displays.',
  caseStudyUrl: 'https://www.figma.com/proto/UOCwZLpA5TeUWDijj2elMZ/Safety-First-Adaptive-Cockpit-%E2%80%94-Product-Screens?node-id=1580-2&viewport=857%2C5%2C0.28&t=mrS4yPm5nXJUrbcj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1580%3A2&page-id=1%3A9',
};

const sharedMobilityDescription = 'Shared-mobility vehicle readiness, driver profile synchronization and privacy-aware in-vehicle personalization.';
const sharedMobilityTags = ['Shared Mobility', 'Vehicle Readiness', 'User Profiles', 'In-Vehicle UX'];

export const selectedWorkProjects = [
  safetyFirstAdaptiveCockpit,
  {
    title: 'RoadMesh',
    description: 'A V2X connected road-safety experience helping drivers anticipate hazards and stay informed on the road.',
    tags: ['V2X', 'Road Safety', 'Connected Car', 'Mobility UX'],
    artwork: roadmeshArtwork,
    artworkAlt: 'Connected vehicle dashboard showing road hazards and nearby traffic.',
    caseStudyUrl: 'https://www.figma.com/proto/LVJNPUfM1JLwIPx4PUCuMP/Roadmeash?node-id=1382-51&viewport=712%2C379%2C0.42&t=739reXIjP4iwwFlB-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1382%3A51&page-id=1382%3A47',
  },
  {
    title: 'DriveSync',
    description: sharedMobilityDescription,
    tags: sharedMobilityTags,
    artwork: drivesyncArtwork,
    artworkAlt: 'Shared vehicle with mobile and in-car interfaces for driver profiles and vehicle readiness.',
    caseStudyUrl: 'https://www.figma.com/proto/Q7wPEWV7buAbhk3tTB7Ple/DriveSync?node-id=1471-14232&viewport=1146%2C497%2C0.46&t=TAImEacBdSlutobW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1471%3A14232&page-id=1470%3A2196',
  },
  {
    title: 'Empathy Drive',
    description: 'A human-aware Level 2 ADAS concept that adapts driver assistance to attention, readiness and surrounding road conditions.',
    tags: ['L2 ADAS', 'Driver Readiness', 'Human Awareness', 'Adaptive Safety'],
    artwork: empathyDriveArtwork,
    artworkAlt: 'Level 2 ADAS concept showing driver readiness, adaptive assistance, and surrounding awareness.',
    caseStudyUrl: 'https://www.figma.com/proto/AAzwRJRbzNX44SpR5aELNL/Empathy-Driver?node-id=28-6940&viewport=705%2C284%2C0.51&t=G6EiI2bN8xM3zSU6-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=28%3A6940&page-id=23%3A6887',
  },
  {
    title: 'CarOne',
    description: 'An OBD, GPS and SIM-connected service platform linking customers, mechanics, parts sellers and administrators through transparent service workflows.',
    tags: ['Connected Car', 'Vehicle Service', 'Diagnostics', 'Service Ecosystem'],
    artwork: caroneArtwork,
    artworkAlt: 'CarOne connected car service ecosystem with customer, mechanic, parts seller, admin, and safety hub apps.',
    caseStudyUrl: 'https://www.behance.net/gallery/249651973/CarOne-Connected-Automotive-Service-Ecosystem',
  },
  {
    title: 'Luxe',
    description: 'A footwear shopping app experience for discovering shoes, exploring product details, saving favourites and purchasing.',
    tags: ['Footwear E-commerce', 'Product Discovery', 'Mobile UX', 'Design System'],
    artwork: luxeArtwork,
    artworkAlt: 'Luxe footwear shopping app screens for discovering shoes and viewing product details.',
    caseStudyUrl: 'https://www.figma.com/proto/uN9kGo7QGNJEdY6exELf9Q/Luxe---Mobile-design?node-id=20-25416&p=f&viewport=699%2C188%2C0.18&t=D90ZxTwFbGHNmJVY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=20%3A24933&page-id=1%3A2',
  },
];
