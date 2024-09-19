<template>
  <div class="mb-250">
    <div class="d-flex justify-content-between align-items-center mt-2">
      <div class="d-flex justify-content-center align-items-center">
        <label class="option me-2" style="color: #858585" for="comments-per-page">Показывать на странице:</label>
        <select id="comments-per-page" v-model="commentsPerPage">
          <option v-for="option in options" :key="option" :value="option"><span class="option">{{ option }}</span></option>
        </select>
      </div>
      <div class="pagination">
        <paginate
            :page-count="pageCount"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination-container'"
            :page-class="'page-item'"
            :page-link-class="'page-link'"
            :prev-class="'page-item'"
            :prev-link-class="'page-link prev-next'"
            :next-class="'page-item'"
            :next-link-class="'page-link prev-next'"
            :active-class="'active'"
            :click-handler="handlePageChange"
            :initial-page="currentPage - 1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";
export default {
  components: {Paginate},
  data(){
    return{
      commentsPerPage: 6,
      currentPage: 1,
      options: [6, 9, 12, 15],
    }
  },
  props:{
    comments:{
      type: Array,
      required: true
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.comments.length / this.commentsPerPage);
    },
  },
  methods: {
    handlePageChange(page) {
      this.$emit('handlePageChange',page)
    },
  },
  watch: {
    commentsPerPage() {
      this.currentPage = 1;
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  gap: 0.5em;
  font-size: 14px;
}

:deep(.page-item) {
  .page-link {
    color: #000;
    background-color: #fff;
    border: 1px solid #dee2e6;
    box-shadow: none;
  }

  &.active .page-link {
    color: #fff !important;
    background-color: #E1AF93;
    border-color: #E1AF93;
    box-shadow: none;
  }
}

:deep(.prev-next) {
  background-color: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

#comments-per-page {
  border: 1px solid #EAEAEA;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#comments-per-page:focus {
  border-color: #858585;
  outline: none;
}
</style>