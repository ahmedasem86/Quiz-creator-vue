<template>
    <div>
        <div v-html="htmlText"></div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            htmlText: ""
        }
    },
    mounted () {
        axios.get(`http://quiz.loc/user/questions/respond/${this.$route.params.answer_id}`)
        .then((res) => {
            this.htmlText = res.data.data
        })
    }
}
</script>

<style>

</style>
