// Resume.js
import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
	return (
		<div>
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
						<li>Bootstrap/Materialize</li>
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
					<a
						href='/ErinHamrickResume.pdf'
						download>
						Download Resume
					</a>
				</p>
				<p id='resumeLinkDiv' >
					<Link id='resumeLink' to='../FullResume'>View my full resume here</Link>
				</p>
			</div>
		</div>
	);
};

export default Resume;
