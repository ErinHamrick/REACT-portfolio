// Resume.js
import React from 'react';
const Resume = () => {
	return (
	<div >
		<div className='profContainer'>
		<div>
			Front-End Proficiencies:
			<ul> 
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>jQuery</li>
				<li>Responsive design</li>
				<li>React</li>
				<li>Bootstrap</li>
				<li>Materialize</li>
			</ul>
		</div>
		<div>
			Back-End Proficiencies: 
			<ul>
				<li>APIs</li>
				<li>Node</li>
				<li>Express</li>
				<li>MySQL/Sequelize</li>
				<li>MongoDB/Mongoose</li>
				<li>GraphQL</li>
			</ul>
		</div>
		</div>
		<div>
		<p className='downloadLink'>
			<a href="/ErinHamrickResume.pdf" download>
				Download Resume
			</a>		
		</p>
		{/* <p>
		<Link to='./FullResume'>View Full Resume</Link>
		</p> */}
	
		</div>
	</div>
	)
};

export default Resume;
