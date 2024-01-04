import React from 'react';
// import Project from '../ui/projects/project';
import ProjectList from '../ui/projects/project-list';

const projectData = [
  {
    title: 'MeChat',
    color: 'hsl(264, 100%, 61%)',
    type: 'Frontend',
    href: '/projects/mechat',
  },
  {
    title: 'Il Dashboard',
    color: 'hsl(234, 49%, 30%)',
    type: 'Frontend',
    href: '/projects/il',
  },
  {
    title: 'Metrics',
    color: 'hsl(337, 97%, 65%)',
    type: 'Frontend',
    href: '/projects/metrics',
  },
  {
    title: 'Conference',
    color: 'hsl(6, 82%, 59%)',
    type: 'Frontend',
    href: '/projects/conference',
  },
  {
    title: 'ToDo',
    color: 'hsl(223, 8%, 36%)',
    type: 'Frontend',
    href: '/projects/todo',
  },
  {
    title: 'Bookstore',
    color: 'hsl(206, 100%, 50%)',
    type: 'Frontend',
    href: '/projects/bookstore',
  }
]

const Projects = () => {
  return (
    <section className='min-h-[calc(100vh-8rem)] flex flex-col justify-center'>
      <div className='flex flex-col gap-4'>
        {projectData.map((project) => {
          const { title, color, type, href } = project
          return (
            <ProjectList key={title} title={title} color={color} type={type} href={href} />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
