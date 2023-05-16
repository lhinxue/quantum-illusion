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
            const tempElement = document.createElement('div');
            tempElement.innerHTML = this.content
            const divElements = tempElement.getElementsByTagName('div');
            for (const div of divElements) {
                const innerHTML = div.innerHTML
                if (innerHTML.match(new RegExp(`(${keyword})`, "gi"))) {
                    return true
                }
            }
            return false
        }
    }

    highlightContentMatch(keyword) {
        console.log(keyword)
        if (!keyword) {
            return this.content
        } else {
            const tempElement = document.createElement('div');
            tempElement.innerHTML = this.content
            const divElements = tempElement.getElementsByTagName('div');
            for (const div of divElements) {
                const innerHTML = div.innerHTML
                if (innerHTML.match(new RegExp(`(${keyword})`, "gi"))) {
                    const highlightedInnerHTML = innerHTML.replace(new RegExp(`(${keyword})`, "gi"), '<span class="highlight">$1</span>')
                    div.innerHTML = highlightedInnerHTML
                }
            }
            return tempElement.innerHTML
        }
    }

    isValid() {
        if (!this.title || !this.content) return false
        return true
    }

}