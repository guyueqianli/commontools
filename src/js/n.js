import Vue from 'vue';

Vue.directive('n', {
    bind: function(el, binging) {
        el.textContent = Math.pow(binging.value, 2)
    },
    update: function(el, binging) {
        el.textContent = Math.pow(binging.value, 2)
    }
})