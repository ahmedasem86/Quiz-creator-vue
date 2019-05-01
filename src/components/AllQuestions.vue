<template>
    <div class="container mt-5">
      <h1>Try to solve your quiz now</h1>

        <div class="row">
            <question-card v-for="q in questions" :key="q.id" :question="q" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import QuestionCard from './QuestionCard'

export default {
    components: {
        QuestionCard
    },
    data () {
        return {
            questions: []
        }
    },
    mounted () {
        axios.get('http://quiz.loc/user/questions')
        .then(res => {
            this.questions = res.data.data
        })
        .catch(err => {
            console.log('an error occured while fetching questions', err)
        })
    }
}
</script>

<style>

</style>
