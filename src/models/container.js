import Memory from "./memory"
import Label from "./label"

export default class Container {

    EIDOLON = [
        "Memory of You.",
        "Memory of It.",
        "Memory of Everything.",
        "Don't Want to Lose.",
        "Don't Want to Forget.",
        "Just Like This. Always……"
    ].join('\n')

    constructor(container) {
        this.name = container?.name ?? ""
        this.memories = (container?.memories ?? []).map(memory => new Memory(memory))
        this.labels = (container?.labels ?? []).map(label => new Label(label))
        this.preference = {
            themeColor: container?.preference?.themeColor ?? 'blue',
            displayLanguage: container?.preference?.displayLanguage ?? 'en'
        }
    }

    interpret(data, key, onSucceed = console.log, onFail = console.error) {
        try {
            const key1 = binary16(key)
            const key2 = binary16(key.split('').reverse().join(''))
            data = binary16(data)
            data = binary16(data.map((char, i) => xor(char, key1[i % key1.length])))
            data = binary16(data)
            data = binary16(data.map((char, i) => xor(char, this.EIDOLON[i % this.EIDOLON.length])))
            data = binary16(data)
            data = binary16(data.map((char, i) => xor(char, key2[i % key2.length])))
            const newMemory = new Memory(JSON.parse(data))
            Object.assign(this, newMemory)
            onSucceed(newMemory)
        } catch (error) {
            onFail(error)
        }
    }

    transcribe(key, onSucceed = console.log, onFail = console.error) {
        try {
            const key1 = binary16(key)
            const key2 = binary16(key.split('').reverse().join(''))
            let data = binary16(JSON.stringify(this))
            data = binary16(data.map((char, i) => xor(char, key2[i % key2.length])))
            data = binary16(data)
            data = binary16(data.map((char, i) => xor(char, this.EIDOLON[i % this.EIDOLON.length])))
            data = binary16(data)
            data = binary16(data.map((char, i) => xor(char, key1[i % key1.length])))
            onSucceed(data)
        } catch (error) {
            onFail(error)
        }
    }

    addOrUpdateMemory(id, title, content, labels) {
        const i = this.memories.findIndex(memory => memory.id === id)
        if (i === -1) {
            const memory = new Memory({title, content, labels})
            this.memories.push(memory)
        } else {
            const memory = this.memories[i]
            memory.title = title
            memory.content = content
            memory.labels = labels
        }
    }

    deleteMemory(id) {
        const i = this.memories.findIndex(memory => memory.id === id)
        if (i !== -1) {
            this.memories.splice(i, 1)
        }
    }

    findMemories(keyword = "", labels = [], matchAll = false) {
        console.log(labels)
        if (labels === null) {
            return this.memories.filter(memory => memory.labels.length === 0)
        }
        const memories = this.memories.filter(memory => {
            console.log(memory.labels)
            if (matchAll) {
                if (labels.length === 0 || labels.every(label => memory.labels.includes(label))) {
                    if (keyword === null) {
                        return true
                    } else {
                        return memory.titleMatch(keyword) || memory.contentMatch(keyword)
                    }
                }
            } else {
                if (labels.length === 0 || labels.some(label => memory.labels.includes(label))) {
                    if (keyword === null) {
                        return true
                    } else {
                        return memory.titleMatch(keyword) || memory.contentMatch(keyword)
                    }
                }
            }
            return false
        })
        return memories
    }

    addOrUpdateLabel(id, name, hidden, important) {
        const i = this.labels.findIndex(label => label.id === id)
        if (i === -1) {
            const label = new Label({name, hidden, important})
            this.labels.push(label)
        } else {
            const label = this.labels[i]
            label.name = name
            label.hidden = hidden
            label.important = important
            this.memories.forEach(memory => {
                const i = memory.labels.indexOf(label.name)
                if (i !== -1) {
                    memory.labels[i] = name
                }
            })
        }
    }

    deleteLabel(id) {
        const i = this.labels.findIndex(label => label.id === id)
        if (i !== -1) {
            const label = this.labels[i]
            this.labels = this.labels.filter(label => label.id !== id)
            this.labels.sort(label.sort)
            this.memories.forEach(memory => {
                memory.labels = memory.labels.filter(name => name !== label.name)
            })
        }
    }

    updatePreferences(preference) {
        preference.forEach(({key, value}) => {
            if (this.preference.hasOwnProperty(key)) {
                this.preference[key] = value
            }
        })
    }

}

function binary16(obj) {
    if (obj.constructor.name === 'Array') {
        return obj.map(char => String.fromCharCode(parseInt(char, 2))).join('')
    } else {
        let padding = '0000000000000000'
        return obj.split('').map(char => {
            let binary = char.charCodeAt(0).toString(2)
            return padding.slice(binary.length) + binary
        })
    }
}

function xor(a, b = '') {
    let ans = ''
    if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b[i]) {
                ans = ans + '0'
            } else {
                ans = ans + '1'
            }
        }
        return ans
    }
    return a
}