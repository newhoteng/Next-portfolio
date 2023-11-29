import React from 'react';
import Project from '../ui/projects/project';

const projectData = [
  {
    title: 'Metrics',
    color: 'hsl(337, 97%, 65%)',
    type: 'Web Development - Frontend',
    href: '/projects/metrics',
  },
  {
    title: 'Conference',
    color: 'hsl(6, 82%, 59%)',
    type: 'Web Development - Frontend',
    href: '/projects/conference',
  },
  {
    title: 'ToDo',
    color: 'hsl(223, 8%, 36%)',
    type: 'Web Development - Frontend',
    href: '/projects/todo',
  },
  {
    title: 'Bookstore',
    color: 'hsl(206, 100%, 50%)',
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
