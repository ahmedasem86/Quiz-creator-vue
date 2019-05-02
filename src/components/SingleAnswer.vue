<template>
    <div class="m-3">
        <b-card
            @click="isSelected = true"
            :title="answer.text"
            :img-src="`http://quiz-creator-api.pentesttools.net/storage/answerImages/${answer.image}`"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
                {{ answer.description }}
            </b-card-text>

            <div class="form-check">
                <input v-model="isSelected" type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Click to choose</label>
            </div>

        </b-card>
    </div>
</template>

<script>
export default {
    props: ['answer'],
    data () {
        return {
            isSelected: false
        }
    },
    methods: {
        resetForm(id) {
            if (this.answer.id != id) {
                this.isSelected = false
            }
        }
    },
    watch: {
        isSelected (newVal) {
            if (newVal) {
                this.$emit('answerIsSelected', { id: this.answer.id })
            }
        }
    }
}
</script>

<style>

</style>
