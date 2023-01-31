// React Components Imports
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';

// Custom Components Imports
import './Home.css';

export function Home(listToken) {
	useEffect(() => {
		if (listToken) {
			console.log(listToken);
			redirect('/list');
		} else {
			return redirect('/');
		}
	}, [listToken]);
	return (
		<div className="Home">
			<p>
				Hello from the home (<code>/</code>) page!
			</p>
		</div>
	);
}
