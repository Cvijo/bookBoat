import React from 'react'
import { Dimmer } from 'semantic-ui-react';

const HomePage = (props) => {
	const history = props.history;
	return (
		
		<div className="backgroundImageHomePage" style={{height: '100vh'}}>
		<Dimmer active/>
			<div className="ui inverted vertical masthead center aligned segment">
				<div className="ui text container">
				
					<h1 className="ui inverted stackable header">
						<img
							className="ui image massive"
							src="/assets/logo.png"
							alt="logo"
						/>
						<div className="content">Book boat</div>
					</h1>
					<h2>Do whatever you want to do</h2>
					<div onClick={() => history.push('/bookList')} className="ui huge white inverted button">
						Get Started
          <i className="right arrow icon" />
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default HomePage
