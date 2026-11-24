import React from 'react';
import { Button, CoreExpertiseCard, HeaderNavigation, ProjectCard, SectionHeading, TagChip, TextField } from '../components';

export default { title: 'Portfolio Design System/Start Here', parameters: { layout: 'fullscreen' } };

const swatches = [
  ['Action Primary', '#0869f9'], ['Primary Hover', '#0759d4'], ['Primary Pressed', '#064bb2'],
  ['Text Primary', '#131927'], ['Text Secondary', '#64748b'], ['Border', '#dde4f0'],
];

export const DesignSystemOverview = {
  name: 'Design System Overview',
  render: () => <main style={{maxWidth:1120,margin:'0 auto',padding:32,color:'#131927'}}>
    <div style={{padding:28,borderRadius:24,background:'linear-gradient(120deg,#10254a,#0869f9)',color:'#fff'}}>
      <div style={{fontSize:12,fontWeight:700,letterSpacing:'.12em',opacity:.8}}>SUBASH X24 · PORTFOLIO DESIGN SYSTEM</div>
      <h1 style={{fontSize:38,margin:'14px 0 8px'}}>Component Library</h1>
      <p style={{margin:0,maxWidth:640,lineHeight:1.6,opacity:.88}}>A shared set of accessible, reusable interface components and page patterns for the portfolio experience.</p>
    </div>
    <section style={{marginTop:32}}><SectionHeading eyebrow="FOUNDATIONS" title="Color tokens" description="Primary button values are mapped from the Figma variable definitions."/><div style={{display:'grid',gridTemplateColumns:'repeat(6,minmax(100px,1fr))',gap:12}}>{swatches.map(([name,color])=><div key={name} style={{padding:10,border:'1px solid #dde4f0',borderRadius:14,background:'#fff'}}><div style={{height:54,borderRadius:9,background:color}}/><strong style={{display:'block',marginTop:9,fontSize:12}}>{name}</strong><code style={{fontSize:11,color:'#64748b'}}>{color}</code></div>)}</div></section>
    <section style={{marginTop:32}}><SectionHeading eyebrow="ATOMS" title="Core building blocks"/><div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap',padding:20,border:'1px solid #dde4f0',borderRadius:18,background:'#fff'}}><Button label="Primary action" size="Medium"/><Button label="Secondary action" size="Medium" variant="Secondary"/><TagChip>Automotive HMI</TagChip><TagChip tone="neutral">Design Systems</TagChip></div></section>
    <section style={{marginTop:32}}><SectionHeading eyebrow="MOLECULES" title="Reusable components"/><div style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:16}}><CoreExpertiseCard/><TextField label="Text field" placeholder="Your name"/></div></section>
    <section style={{marginTop:32}}><SectionHeading eyebrow="ORGANISMS" title="Composed portfolio UI"/><HeaderNavigation/></section>
    <section style={{marginTop:20}}><div style={{maxWidth:900}}><ProjectCard/></div></section>
  </main>,
};
