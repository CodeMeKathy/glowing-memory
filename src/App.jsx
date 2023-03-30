// React Components Imports
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { redirect } from 'react-router-dom';

// Custom Components Imports
import { AddItem, Home, Layout, List } from './views';

// Custom Utilities Imports
import { getItemData, streamListItems } from './api';
import { useStateWithStorage } from './utils';

export function App() {
	const [data, setData] = useState([]);
	/**
	 * Here, we're using a custom hook to create `listToken` and a function
	 * that can be used to update `listToken` later.
	 *
	 * `listToken` is `my test list` by default so you can see the list
	 * of items that was pre-populated for this project.
	 *
	 * 	// TODO:: ->Set to `null` by default (since new users do not have tokens), and use `setListToken` when you allow a user to create and join a new list.
	 */
	const [listToken, setListToken] = useStateWithStorage(
		// null,
		'my test list', //Add as a new collection within Firebase to manual add and view items
		'tcl-shopping-list-token',
	);

	useEffect(() => {
		if (!listToken) return;

		/**
		 * streamListItems` takes a `listToken` so it can communicate
		 * with our database, then calls a callback function with
		 * a `snapshot` from the database.
		 *
		 * Refer to `api/firebase.js`.
		 */
		return streamListItems(listToken, (snapshot) => {
			/**
			 * 	// TODO:: -> Read the documents in the snapshot and do some work on them, so we can save them in our React state.
			 *
			 * Refer to `api/firebase.js`
			 */
			const nextData = getItemData(snapshot);

			/** Finally, we update our React state. */
			setData(nextData);
		});
	}, [listToken]);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={<Home setListToken={setListToken} listToken={listToken} />}
					/>
					<Route
						path="/list"
						element={<List listToken={listToken} data={data} />}
					/>
					<Route path="/add-item" element={<AddItem listToken={listToken} />} />
				</Route>
			</Routes>
		</Router>
	);
}
