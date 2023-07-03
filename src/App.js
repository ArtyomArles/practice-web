import React from 'react'
import SelectBlock from './components/SelectBlock'
import Profile from './components/Profile'
import TableComponent from './components/TableComponent'

function App() {

	// 	// Preorder.find(21).then(result => console.log(result)) ПОИСК

	return (<div className='main'>
		<aside>
			<Profile name="AC Практика" />
			<SelectBlock/>
		</aside>
		<main>
			<TableComponent/>
		</main>
	</div>
	)
}
export default App