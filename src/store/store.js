import TopicStore from './topic-store'
import AppState from './app-state'

export { AppState,TopicStore }


export const createStoreMap = () =>{
    return {
        appState:new AppState(),
        topicStore:new TopicStore()
    }
}