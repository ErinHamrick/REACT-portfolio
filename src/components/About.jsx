import React from 'react';

function About() {
	return (
		<section
			id='about'
			className='text-center'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<br />
						<br />
						<div id="profilePic">
            <img 
            src="/Erin-portfolio-pic.jpg"
            alt="smiling selfie" 
			id='selfie'
            />
        </div>
		<br /><br />
						<p>
							Hello! I'm Erin, a passionate web developer with a
							focus on front-end development. I enjoy creating
							responsive and user-friendly web applications using the
							latest technologies. My technical skills include
							proficiency in HTML, CSS, JavaScript, React, Node.js, and more. I am
							committed to continuous learning and staying updated on
							industry trends. Let's connect and discuss exciting
							opportunities!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
