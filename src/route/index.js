import React from "react";
import { Route, Redirect } from "react-router-dom";

import TopicDetail from "../view/topic-detail";
import TopicList from '../view/topic-list'

export default () => {
	return [
		<Route path="/" render={() => <Redirect to="/list" />} exact key="/"/>,
		<Route path="/list" component={TopicList} exact  key="list"/>,
		<Route path='/detail' component={TopicDetail} exact key="detail" />
	]

}
