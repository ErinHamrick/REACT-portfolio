// Resume.js
import React from 'react';

const FullResume = () => {
	return (
		<div className='resume-container'>
			<section>
				Nashville, TN | erin.hamrick76@gmail.com | 615-887-1814 |
				github.com/ErinHamrick
				<hr />
			</section>

			<section>
				<h2 className='heading'>Summary</h2>
				Enthusiastic Front-End Web Developer with a passion for creating
				engaging user experiences. Proficient in CSS styling and design,
				dedicated to ensuring visually appealing and responsive interfaces.
				Combines a background in medical transcription with a life-long
				dedication to learning. Known for creativity, problem-solving and a
				drive for crafting user-friend applications. Recently graduated from
				Vanderbilt University’s Full Stack Web Dev Bootcamp.
				{/* Front-End Web Developer with a strong passion for creating engaging user
				experiences. Particularly enthusiastic about CSS styling and design,
				ensuring visually appealing and responsive interfaces. Recently
				graduated from Vanderbilt University's Full Stack Web Dev Bootcamp,
				dedicated to crafting seamless and visually appealing user
				interfaces. */}
			</section>

			<section>
				<h2 className='heading'>Technical Skills</h2>
				<span className='subHeading'>Technical Languages:</span>{' '}
				<span>HTML, CSS, JavaScript</span> <br />
				<span className='subHeading'>Related Technologies: </span>
				<span>
					Git, Node, Express, mySQL, <br /> Apollo/GraphQL,
					MongoDB/Compass, React, Heroku, Netlify
				</span>
			</section>
			<section>
				<h2 className='heading'>Projects</h2>
				<h3 className='heading'>Tasty Jams </h3>
				<div className='linksContainer'>
					<a
						className='projectLinks'
						href='https://github.com/ErinHamrick/tasty-jams'>
						Repository
					</a>{' '}
					<a
						className='projectLinks'
						href='https://erinhamrick.github.io/tasty-jams/'>
						Live Link
					</a>
				</div>
				<p>
					<ul>
						<li>
							"Tasty Jams" is a music rating app that allows users to
							rate songs on a scale of one to five. Integrated Spotify
							API for BillboardTop 100 songs and utilized Wikipedia API
							for additional song information.
						</li>
						<li>
							As the primary UI developer, I crafted the user interface
							and styling.
						</li>
						<li>
							Technologies utilized include HTML, CSS, JavaScript,
							Spotify API, Wikipedia API and Materialize;
						</li>
					</ul>
				</p>

				<h3 className='heading'>Mischief-Managed</h3>

				<div className='linksContainer'>
					<a
						className='projectLinks'
						href='https://github.com/joseph-s-foster/Mischief-Managed'>
						Repository
					</a>{' '}
					<a
						className='projectLinks'
						href='https://mischief-managed-04c91ebdf0c9.herokuapp.com/'>
						Live Link
					</a>
				</div>
				<p>
					<ul>
						<li>
							"Mischief Managed" is a Harry Potter book progress tracker,
							allowing users to log completion percentages and receive
							trivia facts at 25% milestones.
						</li>
						<li>
							Primarily involved in front-end development, including page
							structure and styling. Assisted in writing server routes
							for the back end.
						</li>
						<li>
							Technologies utilized includ HTML, CSS, JavaScript, RESTful
							API, SQL and Heroku.
						</li>
					</ul>
				</p>
				<h3 className='heading'>To Be Frank</h3>
				<div className='linksContainer'>
					<a
						className='projectLinks'
						href='https://github.com/mstrnes2/to-be-frank'>
						Repository
					</a>
					<a
						className='projectLinks'
						href='https://to-be-frank-9e501319d50a.herokuapp.com/'>
						Live Link
					</a>
				</div>
				<p>
					<ul>
						<li>
							"To Be Frank" is a web application designed to match users
							with their desired fast-food hotdog. After logging in,
							users answer a series of questions and the profile page
							displays quiz results with a link to place an order.
						</li>
						<li>
							Assisted in crafting the user interface and styling.
							Developed React components and pages.
						</li>
						<li>
							This application utilizes HTML, CSS, JavaScript, React,
							GraphQL and Heroku.
						</li>
					</ul>
				</p>
			</section>

			<section>
				<h2 className='heading'>Experience</h2>
				<span className='subHeading'>
					Residential Property Manager{' '}
				</span>{' '}
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span> 2021 - Present </span>
				<br />
				<span className='subHeading'>
					{' '}
					Kentucky-Tennessee SDA Conference
				</span>{' '}
				&nbsp;&nbsp;&nbsp; <span>Nashville, TN</span>
				<p>
					As a Residential Property Manager, I oversee a portfolio of 11
					residential units, comprising single-family homes. My
					responsibilities include promptly responding to tenant inquiries,
					managing the entire rental process from advertising to lease
					agreements, and coordinating maintenance and repairs with vendors
					and contractors. I maintain accurate financial records and
					prepare monthly reports.
				</p>
				<h3 className='subHeading'>Key Accomplishments: </h3>
				<ul>
					<li>
						Sucessfully managed a portfolio of residential properties,
						ensuring long-term success.
					</li>
					<li>
						Demonstrated excellent verbal and written communication
						skills.
					</li>
					<li>
						Exhibited strong organizational and time management abilities.
					</li>
					<li>Independently handled all aspects of the rental process.</li>
				</ul>
			</section>

			<section>
				<h2 className='heading'>Education</h2>
				<span className='subHeading'>
					Full Stack Web Development Book Camp Certificate:{' '}
				</span>{' '}
				&nbsp; <span> Vanderbilt University, Nashville, TN</span>
				<p>
					A 24-week intensive program focused on gaining technical
					programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap,
					Node.js, MySQL, MongoDB, Express.js, GraphQL and React.
				</p>
			</section>
		</div>
	);
};

export default FullResume;
