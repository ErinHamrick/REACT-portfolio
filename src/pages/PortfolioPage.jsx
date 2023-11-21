import Project from '../components/Project';

const PortfolioPage = () => {
	const projectData = [
		{
			id: 1,
			image: '/portfolio1.jpeg',
			title: 'Tasty Jams',
			github: 'https://github.com/ErinHamrick/tasty-jams',
			link: 'https://erinhamrick.github.io/tasty-jams/',
		},
		{
			id: 2,
			image: '/portfolio2.jpeg',
			title: 'Weather App',
			github: 'https://github.com/ErinHamrick/WeatherApp',
			link: 'https://erinhamrick.github.io/WeatherApp/'
		},
		{
			id: 3,
			image: './portfolio3.jpeg',
			title: 'Text Editor',
			github: 'https://github.com/ErinHamrick/text-editor',
			link: 'https://aqueous-shore-39946-f57d6b195de0.herokuapp.com/'
		},
		{
			id: 4,
			image: './portfolio4.jpeg',
			title: 'Daily Planner',
			github: 'https://github.com/ErinHamrick/daily-planner',
			link: ''
		},
		{
			id: 5,
			image: './portfolio5.jpeg',
			title: 'Note-Taker',
			github: 'https://github.com/ErinHamrick/NoteTaker',
			link: 'https://salty-retreat-81729-571e72e7135e.herokuapp.com/'
		},
		{
			id: 6,
			image: './portfolio7.jpeg',
			title: 'Password Generator',
			github: 'https://github.com/ErinHamrick/PasswordGenerator',
			link: 'https://erinhamrick.github.io/PasswordGenerator/'
		}
	];
	return (
		<>
			<div className='portfolio-container'>
				<h1>Portfolio</h1>
				<div className='projects-container'>
				{projectData.map((project) => (
					<Project
						key={project.id}
						image={project.image}
						title={project.title}
						github={project.github}
						link={project.link}
					/>
				))}
				</div>
			</div>
		</>
	);
};

export default PortfolioPage;
