import React,{Component} from 'react'
import ReactDom from 'react-dom'

// const Content = () =>{
// 	return <p>this is test!</p>
// }
export default class Test extends Component{
	render() {
		return ReactDom.createPortal(
			this.props.children,
			document.body
		)
	}
}
