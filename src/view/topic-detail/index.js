import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Container from '../layout/container'
import topicStore from '../../store/topic-store'
import QueryString from 'query-string'
import { createStoreMap } from '../../store/store'
import Marked from 'marked'

@inject(stores => {
	return {
		appState: stores.appState,
		topicStore: stores.topicStore
	}
}) @observer

class TopicDetail extends Component {
	constructor() {
		super()

	}

	componentDidMount() {
		const id = QueryString.parse(this.props.location.search).id
		this.props.topicStore.TopicDetail(id)

	}
	render() {
		const { topicStore } = this.props;
		const content = topicStore.details

		return (
			<Container>
				<div dangerouslySetInnerHTML={{ __html: Marked(content)}}></div>
			</Container>
		)
	}
}
TopicDetail.wrappedComponent.propTypes = {

}
export default TopicDetail
