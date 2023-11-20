import Project from '../components/Project';

const PortfolioPage = () => {
	const projectData = [
		{ title: 'Project1', github: 'github.com/123' },
		{ title: 'Project2', github: 'github.com/456' },
	];
	return (
		<>
			<h1>Portfolio</h1>
			{/* <Project
				title='Project 1'
				github='github.com/123'
			/>
			<Project
				title='Project 2'
				github='github.com/456'
			/> */}
            {projectData.map(project => (
                <Project title={project.title} github={project.github}/>
            ))}
		</>
	);
};

export default PortfolioPage;
