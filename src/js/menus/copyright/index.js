/*
    menu - copyright
*/
import $ from '../../util/dom-core.js'

// 构造函数
function Copyright(editor) {
    this.editor = editor
    this.$elem = $('<div class="w-e-menu"><i class="w-e-icon-copyright"><i/></div>')
    this.type = 'click'

    // 当前是否 active 状态
    this._active = false
}

// 原型
Copyright.prototype = {
    constructor: Copyright,

    onClick: function () {
        const editor = this.editor
        editor.cmd.do('insertHTML', '<span>&copy;</span>')
    },
}

export default Copyright
