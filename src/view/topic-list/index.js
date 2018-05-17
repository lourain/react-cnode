import React, { Component } from 'react'
import QueryString from 'query-string'
import {observer,inject} from 'mobx-react'
import Tabs, { Tab } from 'material-ui/Tabs'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'
import {CircularProgress} from "material-ui/Progress"
import Container from '../layout/container'
import TopicListItem from './list-item'
import AppState from '../../store/app-state'
import TopicStore from '../../store/topic-store'


const styles = {
	flex: {
		flex: 1
	}
}

@inject(stores => {
	return {
		appState: stores.appState,
		topicStore: stores.topicStore
	}
}) @observer
class TopicList extends Component {
	static contextTypes = {
		router:PropTypes.object
	}
	constructor() {
		super()

		this.tabChange = this.tabChange.bind(this)
		this.listItemClick = this.listItemClick.bind(this)
		this.getTab = this.getTab.bind(this)
	}
	componentDidMount() {
		const tab = this.getTab()
		this.props.topicStore.fetchTopic(tab)
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.location.search !== this.props.location.search){
			this.props.topicStore.fetchTopic(this.getTab(nextProps.location.search))
		}
	}
	getTab(search) {
		const s = search || this.props.location.search
		const query = QueryString.parse(s)
		const tab = query.tab?query.tab:'all'
		return tab
	}
	tabChange(e,value) {
		this.context.router.history.push({
			pathname:'/list',
			search:`?tab=${value}`
		})
				
	}
	listItemClick(topic) {
		this.context.router.history.push(`/detail?id=${topic.id}`)
	}
    render() {
		const {classes,topicStore}  = this.props
		const topicList = topicStore.topics
		const syncingTopics = topicStore.syncing
		const tab = this.getTab()

		return (
			<Container>
				<Tabs value={tab} onChange={this.tabChange} indicatorColor="primary" textColor="primary">
					<Tab label="全部" className={classes.flex} value="all"/>
					<Tab label="分享" className={classes.flex} value="share"/>
					<Tab label="工作" className={classes.flex} value="job"/>
					<Tab label="问答" className={classes.flex} value="ask"/>	
					<Tab label="精品" className={classes.flex} value="good"/>
					<Tab label="测试" className={classes.flex} value="test"/>
				</Tabs>
				{
					syncingTopics?(<div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}><CircularProgress color='secondary' size={100} /></div>):null
				}
				<List>
					{topicList.map((topic,index)=><TopicListItem key={index} test={index} onClick={this.listItemClick.bind(undefined,topic)} topic={topic}/>)}
				</List>
			</Container>
		)
	}
}
TopicList.wrappedComponent.propTypes = {
	classes: PropTypes.object.isRequired,
	appState:PropTypes.instanceOf(AppState),
	topicStore: PropTypes.instanceOf(TopicStore)
}

TopicList.propTypes = {
	classes:PropTypes.object.isRequired,
	location:PropTypes.object.isRequired
}
export default withStyles(styles)(TopicList)
