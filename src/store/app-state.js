import { observable, computed, action, autorun } from 'mobx'

class AppState {
	@observable count = 0
	@observable name = 'jOKCY'
	@computed get msg() {
		return `${this.name} say count is ${this.count}`
	}
	@action add() {
		this.count += 1
	}
	@action changeName(name) {
		this.name = name
	}

}
const appState = new AppState()
setInterval(function() {
	appState.add()
}, 1000);
autorun(() => {

})
export default AppState

