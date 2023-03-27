// React Components
import { useEffect } from 'react';
import { ListItem } from '../components';

//* Access and Render User's ShoppingList
export function List({ data }) {
	console.log({ data });
	let listArray = data;
	console.log({ listArray });

	return (
		<>
			<h2>
				Hello from the <code>/list</code> page!
			</h2>
			<p></p>
			<ul>
				{/* If the imported data array length is not greater than zero (0), i.e. is empty, render a message to the user else render the `<ListItem/>` component */}
				{Object.values(listArray).length > 0 ? (
					<ul>
						{Object.values(listArray).map((listArrayItem, i) => {
							return (
								<>
									<li>
										<ListItem
											key={`${listArrayItem.id}_${i}`}
											name={listArrayItem.name}
										/>
									</li>
								</>
							);
						})}
					</ul>
				) : (
					<>
						<p>
							Your list contains {Object.values(listArray).length} items and is
							currently empty.
						</p>
						<p>Please add some items to your list!</p>
					</>
				)}
				{/**
				 * - [✅] TODO: write some JavaScript that renders the `data` array
				 * using the `ListItem` component that's imported at the top
				 * of this file.
				 */}
			</ul>
		</>
	);
}
