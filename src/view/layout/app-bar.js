import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import PropTypes from 'prop-types'
import ToolBar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'

const styles = {
	root: {
		width: '100%'
	},
	flex: {
		flex: 1
	},
	color: {
		color: '#fff'
	}
}

class MainAppBar extends React.Component {
	constructor() {
		super()
		this.onHomeIconClick = this.onHomeIconClick.bind(this)
		this.createButtonClick = this.createButtonClick.bind(this)
		this.loginButtonClick = this.loginButtonClick.bind(this)
	}
	onHomeIconClick() {

	}
	createButtonClick() {

	}
	loginButtonClick() {

	}
	render() {
		const { classes } = this.props;
		return (
			<div>
				<AppBar position="fixed">
					<ToolBar>
						<IconButton className={classes.color} onClick={this.onHomeIconClick}>
							<HomeIcon />
						</IconButton>
						<Typography type='title' color="inherit" className={classes.flex}>
							JNODE
						</Typography>
						<Button variant="raised" color="primary" onClick={this.createButtonClick}>
							新建话题
						</Button>
						<Button color="inherit" onClick={this.loginButtonClick}>
							登陆
						</Button>
					</ToolBar>
				</AppBar>
			</div>
		)
	}
}
MainAppBar.propTypes = {
	classes: PropTypes.object.isRequired
}
export default withStyles(styles)(MainAppBar)
