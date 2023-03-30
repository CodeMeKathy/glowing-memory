import './ListItem.css';

export function ListItem({ name }) {
	return (
		<li className="ListItem" style={{ textTransform: 'capitalize' }}>
			{name}
		</li>
	);
}
