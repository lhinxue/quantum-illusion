import {v4} from "uuid";

export default class Memory {

    constructor(memory) {
        this.id = memory?.id ?? v4()
        this.title = memory?.title ?? ""
        this.content = memory?.content ?? ""
        this.labels = memory?.labels ?? []
    }

    titleMatch(keyword) {
        if (!keyword) {
            return false
        } else {
            return Boolean(this.title.match(new RegExp(`(${keyword})`, "gi")))
        }
    }

    highlightTitleMatch(keyword) {
        if (!keyword) {
            return this.title
        } else {
            return this.title.replace(new RegExp(`(${keyword})`, "gi"), '<span class="highlight">$1</span>')
        }
    }

    contentMatch(keyword) {
        if (!keyword) {
            return false
        } else {
            return Boolean(this.content.match(new RegExp(`(${keyword})`, "gi")))
        }
    }

    highlightContentMatch(keyword) {
        if (!keyword) {
            return this.content
        } else {
            return this.content.replace(new RegExp(`(${keyword})`, "gi"), '<span class="highlight">$1</span>')
        }
    }

    isValid() {
        if (!this.title || !this.content) return false
        return true
    }

}