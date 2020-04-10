<template>
    <div class="right-side-bar col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <div>
            <b-tabs
                content-class="mt-3"
                v-model="selectedTabIndex"
                active-nav-item-class="bg-success"
                justified
            >
                <top-comics
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :active="selectedTabIndex === index"
                    :tab="tab"
                ></top-comics>
                <b-button
                    class="bg-primary text-light w-100"
                >
                    Xem tất cả
                </b-button>
            </b-tabs>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import TopComics from './TopComics.vue';

export default Vue.extend({
    name: 'right-side-bar',
    components: {
        TopComics,
    },
    data: function() {
        return {
            tabs: [
                {
                    title: 'Top Tháng',
                    comics: [
                        {
                            id: 1,
                            comic_name: 'Võ Luyện Đỉnh Phong',
                            image: 'http://st.truyenchon.com/data/comics/32/vo-luyen-dinh-phong.jpg',
                            last_chapter: 'Chapter 511',
                            total_views: 10970947
                        },
                        {
                            id: 2,
                            comic_name: 'Trọng Sinh Đô Thị Tu Tiên',
                            image: 'http://st.truyenchon.com/data/comics/213/trong-sinh-do-thi-tu-tien.jpg',
                            last_chapter: 'Chapter 367',
                            total_views: 8461059
                        },
                        {
                            id: 3,
                            comic_name: 'Cô Vợ Hợp Đồng Bỏ Trốn Của Tổng Giám Đốc',
                            image: 'http://st.truyenchon.com/data/comics/182/co-vo-hop-dong-bo-tron-cua-tong-giam-doc-2344.jpg',
                            last_chapter: 'Chapter 227',
                            total_views: 8071683
                        },
                        {
                            id: 4,
                            comic_name: 'Thông Linh Phi',
                            image: 'http://st.truyenchon.com/data/comics/143/thong-linh-phi.jpg',
                            last_chapter: 'Chapter 495',
                            total_views: 8035334
                        },
                        {
                            id: 5,
                            comic_name: 'Trọng Sinh Để Ngủ Với Ảnh Đế',
                            image: 'http://st.truyenchon.com/data/comics/173/trong-sinh-de-ngu-voi-anh-de.jpg',
                            last_chapter: 'Chapter 233',
                            total_views: 6975412
                        }
                    ]
                },
                {
                    title: 'Top Tuần',
                    comics: [
                        {
                            id: 1,
                            comic_name: 'Võ Luyện Đỉnh Phong',
                            image: 'http://st.truyenchon.com/data/comics/32/vo-luyen-dinh-phong.jpg',
                            last_chapter: 'Chapter 511',
                            total_views: 10970947
                        },
                        {
                            id: 2,
                            comic_name: 'Trọng Sinh Đô Thị Tu Tiên',
                            image: 'http://st.truyenchon.com/data/comics/213/trong-sinh-do-thi-tu-tien.jpg',
                            last_chapter: 'Chapter 367',
                            total_views: 8461059
                        },
                        {
                            id: 3,
                            comic_name: 'Cô Vợ Hợp Đồng Bỏ Trốn Của Tổng Giám Đốc',
                            image: 'http://st.truyenchon.com/data/comics/182/co-vo-hop-dong-bo-tron-cua-tong-giam-doc-2344.jpg',
                            last_chapter: 'Chapter 227',
                            total_views: 8071683
                        },
                        {
                            id: 4,
                            comic_name: 'Thông Linh Phi',
                            image: 'http://st.truyenchon.com/data/comics/143/thong-linh-phi.jpg',
                            last_chapter: 'Chapter 495',
                            total_views: 8035334
                        },
                        {
                            id: 5,
                            comic_name: 'Trọng Sinh Để Ngủ Với Ảnh Đế',
                            image: 'http://st.truyenchon.com/data/comics/173/trong-sinh-de-ngu-voi-anh-de.jpg',
                            last_chapter: 'Chapter 233',
                            total_views: 6975412
                        }
                    ]
                },
                {
                    title: 'Top Ngày',
                    comics: [
                        {
                            id: 1,
                            comic_name: 'Võ Luyện Đỉnh Phong',
                            image: 'http://st.truyenchon.com/data/comics/32/vo-luyen-dinh-phong.jpg',
                            last_chapter: 'Chapter 511',
                            total_views: 10970947
                        },
                        {
                            id: 2,
                            comic_name: 'Trọng Sinh Đô Thị Tu Tiên',
                            image: 'http://st.truyenchon.com/data/comics/213/trong-sinh-do-thi-tu-tien.jpg',
                            last_chapter: 'Chapter 367',
                            total_views: 8461059
                        },
                        {
                            id: 3,
                            comic_name: 'Cô Vợ Hợp Đồng Bỏ Trốn Của Tổng Giám Đốc',
                            image: 'http://st.truyenchon.com/data/comics/182/co-vo-hop-dong-bo-tron-cua-tong-giam-doc-2344.jpg',
                            last_chapter: 'Chapter 227',
                            total_views: 8071683
                        },
                        {
                            id: 4,
                            comic_name: 'Thông Linh Phi',
                            image: 'http://st.truyenchon.com/data/comics/143/thong-linh-phi.jpg',
                            last_chapter: 'Chapter 495',
                            total_views: 8035334
                        },
                        {
                            id: 5,
                            comic_name: 'Trọng Sinh Để Ngủ Với Ảnh Đế',
                            image: 'http://st.truyenchon.com/data/comics/173/trong-sinh-de-ngu-voi-anh-de.jpg',
                            last_chapter: 'Chapter 233',
                            total_views: 6975412
                        }
                    ]
                },
            ],
            selectedTabIndex: 0,
        }
    },
})
</script>
<style scoped>
</style>