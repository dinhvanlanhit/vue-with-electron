export default {
    name: 'header',
    data () {
        return {
            leftDrawerOpen: false,
        }
    },
    methods: {
        toggleLeftDrawer () {
            this.$emit('toggleLeftDrawer', !this.leftDrawerOpen)
        }
    }
}