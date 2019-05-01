<template>
    <div class="m-3">
        <b-card
            :title="question.title"
            :img-src="`http://quiz.loc/storage/questionImages/${question.image}`"
            img-alt="https://vuejsdevelopers.com/images/posts/vue-laravel-crud.jpg"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
                {{ question.description }}
            </b-card-text>

            <b-link class="btn btn-primary" :to="{ name: 'QuestionPage', params: {id: question.id} }" variant="primary">Answer now</b-link >
        </b-card>
    </div>
</template>

<script>
export default {
    props: ['question']
}
</script>

<style>

</style>
