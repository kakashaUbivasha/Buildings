<template>
  <div class="photo-grid mb-100">
    <div v-for="(row, rowIndex) in photoRows" :key="rowIndex" class="photo-row">
      <div v-for="(photo, photoIndex) in row" :key="photo.id" class="photo-item position-relative">
        <img class="" style="height: 300px;" :src="photo.url" :alt="photo.title">
        <p class="position-absolute top-1 start-5 text-start text-white" style="font-weight: 500">{{photo.date}}</p>
        <span class="position-absolute top-1 end-5 text-white"><svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.275 12.796C1.425 11.692 1 11.139 1 9.5C1 7.86 1.425 7.309 2.275 6.204C3.972 4 6.818 1.5 11 1.5C15.182 1.5 18.028 4 19.725 6.204C20.575 7.31 21 7.861 21 9.5C21 11.14 20.575 11.691 19.725 12.796C18.028 15 15.182 17.5 11 17.5C6.818 17.5 3.972 15 2.275 12.796Z" stroke="white" stroke-width="1.5"/>
        <path d="M14 9.5C14 10.2956 13.6839 11.0587 13.1213 11.6213C12.5587 12.1839 11.7956 12.5 11 12.5C10.2044 12.5 9.44129 12.1839 8.87868 11.6213C8.31607 11.0587 8 10.2956 8 9.5C8 8.70435 8.31607 7.94129 8.87868 7.37868C9.44129 6.81607 10.2044 6.5 11 6.5C11.7956 6.5 12.5587 6.81607 13.1213 7.37868C13.6839 7.94129 14 8.70435 14 9.5Z" stroke="white" stroke-width="1.5"/>
      </svg> {{photo.views}}</span>
        <p class="text-start" style="font-weight: 500; font-size: 24px">{{photo.text}}</p>
      <span class="d-flex justify-content-start align-items-center gap-2 pointer mt-3" style="color: #E1AF93; font-weight: 600">
        Подробнее <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.46875 1.375L14.0937 7L8.46875 12.625M13.3125 7L1.90625 7" stroke="#E1AF93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photos: {
      type: Array,
      required: true
    }
  },
  computed: {
    photoRows() {
      const rows = [];
      let currentRow = [];
      let isThreePhotoRow = true;

      this.photos.forEach((photo, index) => {
        currentRow.push(photo);

        if ((isThreePhotoRow && currentRow.length === 3) ||
            (!isThreePhotoRow && currentRow.length === 2)) {
          rows.push(currentRow);
          currentRow = [];
          isThreePhotoRow = !isThreePhotoRow;
        }
      });

      // Добавляем оставшиеся фото, если есть
      if (currentRow.length > 0) {
        rows.push(currentRow);
      }

      return rows;
    }
  }
}
</script>

<style scoped>
.photo-grid {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Расстояние между строками */
}

.photo-row {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Расстояние между фото в строке */
}

.photo-item {
  flex: 1;
  max-width: calc(33.333% - 14px); /* Для строк с 3 фото */
}

.photo-row:nth-child(even) .photo-item {
  max-width: calc(50% - 10px); /* Для строк с 2 фото */
}
.photo-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: brightness(70%);
  margin-bottom: 1em;
}
.top-1{
  top: 5%;
}
.mb-100{
  margin-bottom: 8em;
}
</style>