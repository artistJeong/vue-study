<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">번호</th>
        <th class="text-left">제목</th>
        <th class="text-left">작성자</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.writer }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-btn color="secondary" @click="onClickWrite">글쓰기</v-btn>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

interface BoardList {
  id: number
  title: number
  writer: 'artistjay' | 'artist'
}

const list: BoardList[] = [
  { id: 1, title: '첫 번째 게시글', writer: 'dartistjay' },
  { id: 2, title: '두 번째 게시글', writer: 'artistjay' },
  { id: 3, title: '세 번째 게시글', writer: 'artistjay' },
  { id: 4, title: '네 번째 게시글', writer: 'artistjay' },
  { id: 5, title: '다섯 번째 게시글', writer: 'artistjay' },
  { id: 6, title: '여섯 번째 게시글', writer: 'artistjay' },
]

const router = useRouter()

function onClickWrite() {
  router.push('/write')
}
</script>
