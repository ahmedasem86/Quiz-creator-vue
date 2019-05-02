<template>
    <div class="container">
        <h1>{{ question.title }}</h1>
        <p>{{ question.description }}</p>

        <div class="row">
            <single-answer
                :ref="`answer_${answer.id}`"
                @answerIsSelected="handleAnswerIsSelected"
                v-for="answer in question.answers"
                :key="answer.id"
                :answer="answer"
                >{{ answer.text }}</single-answer>
        </div>

        <form @submit.prevent="submit" class="col-md-6">
            <div class="form-group ">
                <!-- <label for="exampleInputEmail1" class="col-md-4">Email address</label> -->
                <input v-model="form.email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email" required>
            </div>
            <div class="form-group ">
                <!-- <label for="exampleInputPassword1">Name</label> -->
                <input v-model="form.username" type="text" class="form-control" placeholder="Name" required>
            </div>
            <button type="submit" class="btn btn-primary col-md-12">Submit</button>
        </form>

    </div>
</template>

<script>
import axios from 'axios'
import SingleAnswer from './SingleAnswer'

export default {
    components: {
        SingleAnswer
    },
    data () {
        return {
            question: {},
            form: {
                email: '',
                username: '',
                answer_id: null,
                question_id: this.$route.params.id
            }
        }
    },
    mounted () {
        axios.get(`http://quiz-creator-api.pentesttools.net/user/questions/${this.$route.params.id}`)
        .then(res => {
            this.question = res.data.data
        })
        .catch(err => {
            console.log('err', err)
        })
    },
    methods: {
        handleAnswerIsSelected({id}) {
            this.form.answer_id = id
            for (var key in this.$refs) {
                if (this.$refs.hasOwnProperty(key)) {
                    this.$refs[key][0].resetForm(id)
                }
            }
        },
        submit () {
            axios.post(`http://quiz-creator-api.pentesttools.net/user/questions/submission`, {...this.form})
            .then(() => {
                let answer = this.question.answers.find(a => a.id == this.form.answer_id)
                // 1 == redirect to static url
                if (answer.answer_sumbit_response_type == 0) {
                    window.location.href = answer.answer_sumbit_response
                }
                // redirect to render html
                else if(answer.answer_sumbit_response_type == 1){
                    this.$router.push({
                        name: 'RenderHTML',
                        params: {
                            answer_id: this.form.answer_id
                        }
                    })
                }
            })
            .catch(() => {

            })
        }
    }
}
</script>

<style>

</style>
