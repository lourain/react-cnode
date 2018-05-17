import { observable, action } from 'mobx'
import {topicSchema} from '../utils/variable-define'
import api from '../api/api.js'
import TopicDetail from '../view/topic-detail';
const createTopic = (topic)=>{
    return Object.assign({},topicSchema,topic)
}

// class Topic {
//     constructor(data){
//         extendObservable(this,data)
//     }
//     @observable syncing = false
// }

class TopicStore {
    @observable topics = []
    @observable syncing = false
    @observable details = ''

    // constructor({syncing,topics}={syncing:false,topics:[]}) {
    //     this.syncing = syncing
    //     this.topics = topics.map(topic=>new Topic(createTopic(topic)))
    //     this.addTopic = this.addTopic.bind(this)
    // }
    addTopic(topic) {
        this.topics.push(topic)
    }
    @action fetchTopic(tab) {
        this.topics = []
        this.syncing = true
        api.getList(tab).then(res=>{
            if(res.data && res){
                this.topics = res.data.data
            }
            this.syncing = false
        })
    }
    @action TopicDetail(id) {
        api.getDetail(id).then(res=>{
            if(res.data && res){
                this.details = res.data.data.content
                
            }
        })
    }
}

export default TopicStore
