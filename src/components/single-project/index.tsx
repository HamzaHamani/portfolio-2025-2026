import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import SingleProjectArea from './SingleProjectArea'
import FooterOne from '@/layouts/footers/FooterOne'
import { ProjectData } from '@/data/projectsData'

interface SingleProjectProps {
  projectData: ProjectData;
}

export default function SingleProject({ projectData }: SingleProjectProps) {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title={projectData.title} style_3={true} />
            <SingleProjectArea projectData={projectData} />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  )
}
