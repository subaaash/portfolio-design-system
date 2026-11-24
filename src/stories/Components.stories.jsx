import React from 'react';
import {
  AboutExperienceSection, Button, ContactFormSection, ContactInfoCard, CoreExpertiseCard,
  Divider, DomainExpertiseCard, FeaturedBadge, FilterChip, FormMessage, FooterLink,
  HeaderNavigation, HeroHome, Icon, IconButton, MobileMenuItem, NavigationBar,
  NavigationItem, PortfolioFooter, ProfileAvatar, ProfileInfoCard, ProjectCard,
  ProjectCategoryTag, ProjectThumbnail, RoleEducationCard, SectionEyebrow,
  SectionHeading, SkillItem, SkillsSection, SocialIconLink, TagChip, Textarea,
  TextField, TextLink, TimelineItem, Tooltip, WorkProjectsGrid,
} from '../components';

export default { title: 'Portfolio Design System/Components', tags: ['autodocs'] };

export const ButtonStates = {
  render: () => <div style={{ display: 'grid', gap: 28, padding: 24 }}>
    {['Small', 'Medium', 'Large'].map(size => <div key={size} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
      <strong style={{ width: 74 }}>{size}</strong>{['Primary', 'Secondary'].map(variant => ['Default', 'Hover', 'Pressed', 'Disabled'].map(state => <Button key={`${size}-${variant}-${state}`} label={`${variant} · ${state}`} size={size} variant={variant} state={state} />))}
    </div>)}
  </div>,
};
export const ButtonWithIcon = {
  args: { label: 'View project', size: 'Medium', variant: 'Primary', state: 'Default', icon: true },
  argTypes: {
    variant: { control: 'inline-radio', options: ['Primary', 'Secondary'] },
    size: { control: 'inline-radio', options: ['Small', 'Medium', 'Large'] },
    state: { control: 'select', options: ['Default', 'Hover', 'Pressed', 'Disabled'] },
    icon: { control: 'boolean' },
  },
  render: args => <Button {...args} />,
};
export const IconGallery = { render: () => <div style={{ display:'flex',gap:24,alignItems:'center' }}>{['arrow-right','mail','briefcase','link','spark','user'].map(name => <div key={name} style={{display:'grid',justifyItems:'center',gap:8}}><Icon name={name} size={24}/><small>{name}</small></div>)}</div> };
export const IconButtonStates = { render: () => <div style={{display:'flex',gap:12}}>{['Default','Hover','Pressed','Focus','Disabled'].map(state=><IconButton key={state} label={state} state={state}/>)}</div> };
export const TagsAndChips = { render: () => <div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}><TagChip>Automotive HMI</TagChip><TagChip tone="neutral">Design Systems</TagChip><FeaturedBadge/><FilterChip selected>Selected filter</FilterChip><FilterChip>Filter</FilterChip><ProjectCategoryTag>Case study</ProjectCategoryTag></div> };
export const TextFieldPlayground = {
  args: { label: 'Name', placeholder: 'Your name', value: '', state: 'Default', helperText: '', leadingIcon: false },
  argTypes: { state: { control: 'inline-radio', options: ['Default', 'Focus', 'Error', 'Disabled'] }, leadingIcon: { control: 'boolean' } },
  render: args => <div style={{width:'min(516px,90vw)'}}><TextField {...args}/></div>,
};
export const TextFieldStates = { render: () => <div style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(240px,1fr))',gap:18,width:'min(720px,90vw)'}}>{['Default','Focus','Error','Disabled'].map(state=><TextField key={state} label={`${state} state`} placeholder="Your name" state={state} helperText={state==='Error'?'Please enter your name':''}/>)}</div> };
export const TextareaStates = { render: () => <div style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(240px,1fr))',gap:18,width:'min(720px,90vw)'}}>{['Default','Focus','Error','Disabled'].map(state=><Textarea key={state} label={`${state} state`} state={state} helperText={state==='Error'?'Please add a message':''}/>)}</div> };
export const Navigation = { render: () => <div style={{display:'grid',gap:20}}><NavigationBar active="Work"/><div style={{display:'flex',gap:20}}>{['Default','Hover','Active'].map(state=><NavigationItem key={state} label={state} state={state}/>)}</div></div> };
export const NavigationAndLinks = { render: () => <div style={{display:'flex',alignItems:'center',gap:24}}><MobileMenuItem state="Active"/><TextLink>View project</TextLink><FooterLink>LinkedIn</FooterLink><SocialIconLink/><Tooltip>Helpful guidance</Tooltip></div> };
export const ProjectCardStory = {
  name: 'Project Card',
  args: { title: 'Safety-First Adaptive Cockpit', description: 'A calm, safety-first interface for an adaptive electric vehicle cockpit.', tags: ['Automotive HMI', 'UX Design'], type: 'Project' },
  argTypes: { type: { control: 'inline-radio', options: ['Project', 'Prototype'] } },
  render: args => <div style={{width:'min(1000px,90vw)'}}><ProjectCard {...args}/></div>,
};
export const ProjectThumbnailStory = { name: 'Project Thumbnail', render: () => <div style={{width:600}}><ProjectThumbnail title="Adaptive EV Cockpit"/></div> };
export const SkillsAndExpertise = { render: () => <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(180px,1fr))',gap:14,width:'min(800px,90vw)'}}><SkillItem/><CoreExpertiseCard/><DomainExpertiseCard/></div> };
export const ProfileAndContactCards = { render: () => <div style={{display:'grid',gap:12,width:500}}><ProfileInfoCard/><ContactInfoCard/><RoleEducationCard/></div> };
export const Timeline = { render: () => <div style={{width:520}}><TimelineItem/></div> };
export const SectionElements = { render: () => <div style={{display:'grid',gap:20,width:500}}><SectionEyebrow>Selected work</SectionEyebrow><SectionHeading eyebrow="About" title="Section heading" description="A short introduction to this section."/><Divider/><FormMessage state="Success">Message sent.</FormMessage></div> };
export const HeaderOrganism = { render: () => <div style={{width:'min(1100px,95vw)'}}><HeaderNavigation/></div> };
export const HeroOrganism = { render: () => <div style={{width:'min(1100px,95vw)'}}><HeroHome/></div> };
export const WorkGridOrganism = { render: () => <div style={{width:'min(1100px,95vw)'}}><WorkProjectsGrid projects={[{title:'Safety-First Adaptive Cockpit'},{title:'DriveSync'},{title:'RoadMesh'}]}/></div> };
export const SkillsOrganism = { render: () => <div style={{width:'min(1100px,95vw)'}}><SkillsSection/></div> };
export const AboutExperienceOrganism = { render: () => <div style={{width:'min(1100px,95vw)'}}><AboutExperienceSection/></div> };
export const ContactOrganism = { render: () => <div style={{width:'min(1100px,95vw)'}}><ContactFormSection/></div> };
export const FooterOrganism = { render: () => <div style={{width:'min(1100px,95vw)'}}><PortfolioFooter/></div> };
