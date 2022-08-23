<template>
    <v-form>
        <v-text-field
            label="제목"
        ></v-text-field>
        <v-textarea
          label="내용"
        ></v-textarea>
    </v-form>
    <v-btn color="secondary" @click="onClickBack">뒤로가기</v-btn>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function onClickBack() {
    router.push('/')
}
</script>