import React from 'react'
import PropTypes from 'prop-types'
import List, { ListItem, ListItemText, ListItemAvatar } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'
import cx from 'classnames'
import tabs from './convert.js'
import { topicPrimaryStyle } from './styles'
import { topicSecondaryStyle } from './styles'


const Primary = ({ classes, topic }) => {
	const classNames = cx({
		[classes.tab]:true,
		[classes.top]:topic.top
	})
	return (
		<div className={classes.root}>
			<span className={classNames}>{topic.top ? '置顶' : tabs[topic.tab]}</span>
			<span className={classes.title}>{topic.title}</span>
		</div>
	)
}

const Secondary = ({ classes, topic }) => {
	return (
		<span className={classes.root}>
			<span key='username' className={classes.userName}>{topic.author.loginname}</span>
			<span key="count" className={classes.count}>
				<span className={classes.accentColor}>{topic.reply_count}</span>
				<span>/</span>
				<span>{topic.visit_count}</span>
			</span>
			<span key="creatAt">创建时间：{topic.create_at}</span>
		</span>
	)
}

const PrimaryStyle = withStyles(topicPrimaryStyle)(Primary)
const SecondaryStyle = withStyles(topicSecondaryStyle)(Secondary)
Primary.propTypes = {
	topic: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}
Secondary.propTypes = {
	topic: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const TopicListItem = ({ onClick, topic,test }) => (
	<ListItem button onClick={onClick}>
		<ListItemAvatar>
			<Avatar src={topic.author.avatar_url}/>
		</ListItemAvatar>
		<ListItemText primary={<PrimaryStyle topic={topic} />} secondary={<SecondaryStyle topic={topic} />}>
		</ListItemText>
	</ListItem>
)

TopicListItem.propTypes = {
	onClick: PropTypes.any.isRequired,
	topic: PropTypes.object.isRequired
}

export default TopicListItem