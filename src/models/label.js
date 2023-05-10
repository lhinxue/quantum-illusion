import {v4} from "uuid";

export default class Label {

    constructor(label) {
        this.id = label?.id ?? v4()
        this.name = label?.name ?? ""
        this.hidden = label?.hidden ?? false
        this.important = label?.important ?? false
    }

    static sort(a, b) {
        if (a.important && !b.important) return -1
        if (!a.important && b.important) return 1
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    }

    isValid() {
        if (!this.name) return false
        return true
    }

}