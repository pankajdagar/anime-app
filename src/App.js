import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'

const App = () => {
	document.title = 'Anime App'
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={HomeScreen} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
