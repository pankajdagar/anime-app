import React from 'react'

export const Snackbar = ({ isActive, message }) => {
	return <div className={isActive ? ['snackbar', 'show'].join(' ') : 'snackbar'}>{message}</div>
}
