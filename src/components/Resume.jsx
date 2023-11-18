// Resume.js
import React from 'react';

const Resume = () => {
	return (
		<div className='resume-container'>
			{/* <h1 id='myName'>Erin Hamrick</h1> */}

			<section>
				Nashville, TN | erin.hamrick76@gmail.com | 615-887-1814 |
				github.com/ErinHamrick
			</section>

			<section>
				<h2 className='heading'>Summary</h2>
				Front-End Web Developer with a strong passion for creating engaging
				user experiences. Particularly enthusiastic about CSS styling and
				design, ensuring visually appealing and responsive interfaces.
				Recently graduated from Vanderbilt University's Full Stack Web Dev
				Bootcamp, dedicated to crafting seamless and visually appealing user
				interfaces.
			</section>

			<section>
				<h2 className='heading'>Projects</h2>
				<h3 className='heading'>Tasty Jams </h3>
				<div className='linksContainer'>
					<a
						className='projectLinks'
						href='https://github.com/ErinHamrick/tasty-jams'>
						Tasty Jams repository
					</a>{' '}
					<a
						className='projectLinks'
						href='https://erinhamrick.github.io/tasty-jams/'>
						Tasty Jams Live Link
					</a>
				</div>
				<p>
					“Tasty Jams” is a music rating app that allows users to rate
					songs on a scale of one to five. The app uses the Spotify API to
					pull songs from the Billboard Top 100 playlist, and the Wikipedia
					API to provide more information about the songs. The app is built
					using HTML, CSS, and JavaScript, and utilizes the Materialize CSS
					library for advanced styling.
				</p>
				<h3 className='heading'>Weather App </h3>
				<div className='linksContainer'>
					<a
						className='projectLinks'
						href='https://github.com/ErinHamrick/WeatherApp'>
						{' '}
						Weather App repository
					</a>{' '}
					<a
						className='projectLinks'
						href='https://erinhamrick.github.io/WeatherApp/'>
						Weather App Live Link
					</a>
				</div>
				<p>
					Weather App allows users to search for any city and view the
					current conditions and a 5-day forecast. Each search is saved to
					a button at the bottom of the page for quick access, and the page
					can be cleared with a single click. The app uses multiple weather
					APIs to provide accurate and up-to-date information.{' '}
				</p>
				<h3 className='heading'>Mischief-Managed</h3>

				<div className='linksContainer'>
					<a
						className='projectLinks'
						href='github.com/joseph-s-foster/Mischief-Managed'>
						Mischief Managed Repository
					</a>{' '}
					<a
						className='projectLinks'
						href='https://mischief-managed-04c91ebdf0c9.herokuapp'>
						Mischief Managed Live Link
					</a>
				</div>
				<p>
					Mischief-Managed is a Harry Potter book progress tracker that
					allows users to log their completion percentage for each book.
					The application provides trivia facts at each 25% milestone.
				</p>
			</section>

			<section>
				<h2 className='heading'>Technical Skills</h2>
				<br />
				<ul>
					Front-End Development:{' '}
					<ul>
						<li> DOM Manipulation</li> <li>jQuery </li> <li>React</li>
					</ul>
					<br />
					Back-End Development:{' '}
					<ul>
						<li>Creating RESTful APIs </li> <li>Node.js </li>{' '}
						<li>MySQL </li>
						<li>NoSQL (MongoDB) </li>
						<li>Express.js </li>
						<li>GraphQL</li>
					</ul>
					<br />
					Data Handling:
					<ul>
						<li>JSON </li>{' '}
						<li>AJAX (Asynchronous JavaScript and JSON) </li>{' '}
						<li>Version Control: Git </li>{' '}
						<li>Command Line: Terminal Commands </li>
					</ul>
				</ul>
			</section>

			<section>
				<h2 className='heading'>Technical Languages</h2>
				<ul>
					<li>Programming: JavaScript</li>
					<li>Markup: HTML</li>
					<li>Styling: CSS</li>
				</ul>
			</section>

			<section>
				<h2 className='heading'>Related Technologies</h2>
				<ul>
					<li>Heroku</li>
					<li>Insomnia</li>
					<li>MongoDB Compass</li>
					<li>PWAs</li>
				</ul>
			</section>

			<section>
				<h2 className='heading'>Work History</h2>
				<h3 className='subHeading'>Organization</h3>
				<p>
					Kentucky-Tennessee SDA Conference <br />
					Nashville, TN
				</p>
				<h3 className='subHeading'>Residential Property Manager</h3>
				<ul>
					<li>
						Manage a portfolio of 11 residential units, single-family
						homes.
					</li>
					<li>Respond to tenant inquiries promptly and professionally.</li>
					<li>
						Handle all aspects of the rental process, from advertising and
						showings to lease agreements and move-in/move-out procedures.
					</li>
					<li>
						Oversee and coordinate maintenance and repairs, coordinating
						with vendors and contractors.
					</li>
					<li>
						Maintain accurate financial records and prepare monthly
						reports.
					</li>
				</ul>
				<h3 className='subHeading'>Skills and Outcomes</h3>
				<ul>
					<li>
						Proven ability to successfully manage a portfolio of
						residential properties long-term.
					</li>
					<li>Excellent verbal and written communication skills.</li>
					<li>Strong organizational and time-management skills.</li>
					<li>Ability to work indepenedently and as part of a team.</li>
					<li>
						Comprehensive knowledge of all aspects of the rental process
					</li>
				</ul>
			</section>
		</div>
	);
};

export default Resume;
