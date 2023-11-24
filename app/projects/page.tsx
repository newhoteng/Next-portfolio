import React from 'react';
import Project from '../ui/projects/project';

const projectData = [
  {
    title: 'Metrics',
    color: '#fc5193',
    type: 'Web Development - Frontend',
    href: '/projects/metrics',
  },
  {
    title: 'Conference',
    color: '#ec5242',
    type: 'Web Development - Frontend',
    href: '/projects/conference',
  },
  {
    title: 'ToDo',
    color: '#545862',
    type: 'Web Development - Frontend',
    href: '/projects/todo',
  },
  {
    title: 'Bookstore',
    color: '#0290ff',
    type: 'Web Development - Frontend',
    href: '/projects/bookstore',
  }
]

const Projects = () => {
  return (
    <section className='h-[calc(100vh-8rem)] snap-y snap-mandatory overflow-y-scroll no-scrollbar'>
      {projectData.map((project) => (
        <Project key={project.title} title={project.title} color={project.color} type={project.type} href={project.href} />
      ))}
    </section>
  )
}

export default Projects
