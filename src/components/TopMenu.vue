<template>
    <div class="top-menu">
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <top-menu-item
                        v-for="(item, index) in menu"
                        v-on:click.native="selectMenuItem(index)"
                        :key="index"
                        :item="item"
                    ></top-menu-item>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import TopMenuItem from './TopMenuItem.vue';

export default Vue.extend({
    name: 'top-menu',
    components: {
        TopMenuItem,
    },
    data: function () {
        return {
            menu: [
                { icon: 'home', active: true },
                { title: 'Hot', active: false },
                { title: 'Theo dõi', active: false },
                { title: 'Lịch sử', active: false },
                {   
                    title: 'Thể loại',
                    active: false,
                    subMenu: [
                        { title: 'Tất cả', highlight: true, description: 'Tất cả thể loại truyện tranh' },
                        { title: 'Action', description: 'Thể loại này thường có nội dung về đánh nhau, bạo lực, hỗn loạn, với diễn biến nhanh' },
                        { title: 'Adult', description: 'Thể loại Adult đề cập đến vấn đề nhạy cảm, chỉ dành cho tuổi 17+' },
                        { title: 'Adventure', description: 'Thể loại phiêu lưu, mạo hiểm, thường là hành trình của các nhân vật' },
                        { title: 'Anime', description: 'Truyện đã được chuyển thể thành film Anime' },
                        { title: 'Chuyển sinh', description: 'Thể loại này là những câu chuyện về người ở một thế giới này xuyên đến một thế giới khác, có thể là thế giới mang phong cách trung cổ với kiếm sĩ và ma thuật, hay thế giới trong game, hoặc có thể là bạn chết ở nơi này và được chuyển sinh đến nơi khác' },
                        { title: 'Comedy', description: 'Thể loại có nội dung trong sáng và cảm động, thường có các tình tiết gây cười, các xung đột nhẹ nhàng' },
                        { title: 'Comic', description: 'Truyện tranh Châu Âu và Châu Mĩ' },
                        { title: 'Cooking', description: 'Thể loại có nội dung về nấu ăn, ẩm thực' },
                        { title: 'Cổ đại', highlight: true, description: 'Truyện có nội dung xảy ra ở thời cổ đại phong kiến.' },
                        { title: 'Doujinshi', description: 'Thể loại truyện phóng tác do fan hay có thể cả những Mangaka khác với tác giả truyện gốc. Tác giả vẽ Doujinshi thường dựa trên những nhân vật gốc để viết ra những câu chuyện theo sở thích của mình' },
                        { title: 'Drama', description: 'Thể loại mang đến cho người xem những cảm xúc khác nhau: buồn bã, căng thẳng thậm chí là bi phẫn' },
                        { title: 'Đam mỹ', highlight: true, description: 'Truyện tình cảm giữa nam và nam.' },
                        { title: 'Ecchi', description: 'Thường có những tình huống nhạy cảm nhằm lôi cuốn người xem' },
                        { title: 'Fantasy', description: 'Thể loại xuất phát từ trí tưởng tượng phong phú, từ pháp thuật đến thế giới trong mơ thậm chí là những câu chuyện thần tiên' },
                        { title: 'Gender Bender', description: 'Là một thể loại trong đó giới tính của nhân vật bị lẫn lộn: nam hoá thành nữ, nữ hóa thành nam...' },
                        { title: 'Harem', description: 'Thể loại truyện tình cảm, lãng mạn mà trong đó, nhiều nhân vật nữ thích một nam nhân vật chính' },
                        { title: 'Historical', description: 'Thể loại có liên quan đến thời xa xưa' },
                        { title: 'Horror', description: 'Horror là: rùng rợn, nghe cái tên là bạn đã hiểu thể loại này có nội dung thế nào. Nó làm cho bạn kinh hãi, khiếp sợ, ghê tởm, run rẩy, có thể gây sock - một thể loại không dành cho người yếu tim' },
                        { title: 'Josei', description: 'Thể loại của manga hay anime được sáng tác chủ yếu bởi phụ nữ cho những độc giả nữ từ 18 đến 30. Josei manga có thể miêu tả những lãng mạn thực tế , nhưng trái ngược với hầu hết các kiểu lãng mạn lí tưởng của Shoujo manga với cốt truyện rõ ràng, chín chắn' },
                        { title: 'Live action', description: 'Truyện đã được chuyển thể thành phim' },
                        { title: 'Manga', description: 'Truyện tranh của Nhật Bản' },
                        { title: 'Manhua', highlight: true, description: 'Truyện tranh của Trung Quốc' },
                        { title: 'Manhwa', description: 'Truyện tranh Hàn Quốc, đọc từ trái sang phải' },
                        { title: 'Martial Arts', description: 'Giống với tên gọi, bất cứ gì liên quan đến võ thuật trong truyện từ các trận đánh nhau, tự vệ đến các môn võ thuật như akido, karate, judo hay taekwondo, kendo, các cách né tránh' },
                        { title: 'Mature', description: 'Thể loại dành cho lứa tuổi 17+ bao gồm các pha bạo lực, máu me, chém giết, tình dục ở mức độ vừa' },
                        { title: 'Mecha', description: 'Mecha, còn được biết đến dưới cái tên meka hay mechs, là thể loại nói tới những cỗ máy biết đi (thường là do phi công cầm lái)' },
                        { title: 'Mystery', description: 'Thể loại thường xuất hiện những điều bí ấn không thể lí giải được và sau đó là những nỗ lực của nhân vật chính nhằm tìm ra câu trả lời thỏa đáng' },
                        { title: 'Ngôn tình', highlight: true, description: 'Truyện thuộc kiểu lãng mạn, kể về những sự kiện vui buồn trong tình yêu của nhân vật chính.' },
                        { title: 'One shot', description: 'Những truyện ngắn, thường là 1 chapter' },
                        { title: 'Psychological', description: 'Thể loại liên quan đến những vấn đề về tâm lý của nhân vật ( tâm thần bất ổn, điên cuồng ...)' },
                        { title: 'Romance', highlight: true, description: 'Thường là những câu chuyện về tình yêu, tình cảm lãng mạn. Ớ đây chúng ta sẽ lấy ví dụ như tình yêu giữa một người con trai và con gái, bên cạnh đó đặc điểm thể loại này là kích thích trí tưởng tượng của bạn về tình yêu' },
                        { title: 'School Life', description: 'Trong thể loại này, ngữ cảnh diễn biến câu chuyện chủ yếu ở trường học' },
                        { title: 'Sci-fi', description: 'Bao gồm những chuyện khoa học viễn tưởng, đa phần chúng xoay quanh nhiều hiện tượng mà liên quan tới khoa học, công nghệ, tuy vậy thường thì những câu chuyện đó không gắn bó chặt chẽ với các thành tựu khoa học hiện thời, mà là do con người tưởng tượng ra' },
                        { title: 'Seinen', description: 'Thể loại của manga thường nhằm vào những đối tượng nam 18 đến 30 tuổi, nhưng người xem có thể lớn tuổi hơn, với một vài bộ truyện nhắm đến các doanh nhân nam quá 40. Thể loại này có nhiều phong cách riêng biệt , nhưng thể loại này có những nét riêng biệt, thường được phân vào những phong cách nghệ thuật rộng hơn và phong phú hơn về chủ đề, có các loại từ mới mẻ tiên tiến đến khiêu dâm' },
                        { title: 'Shoujo', description: 'Đối tượng hướng tới của thể loại này là phái nữ. Nội dung của những bộ manga này thường liên quan đến tình cảm lãng mạn, chú trọng đầu tư cho nhân vật (tính cách,...)' },
                        { title: 'Shoujo Ai', description: 'Thể loại quan hệ hoặc liên quan tới đồng tính nữ, thể hiện trong các mối quan hệ trên mức bình thường giữa các nhân vật nữ trong các manga, anime' },
                        { title: 'Shounen', description: 'Đối tượng hướng tới của thể loại này là phái nam. Nội dung của những bộ manga này thường liên quan đến đánh nhau và/hoặc bạo lực (ở mức bình thường, không thái quá)' },
                        { title: 'Shounen Ai', description: 'Thể loại có nội dung về tình yêu giữa những chàng trai trẻ, mang tính chất lãng mạn nhưng ko đề cập đến quan hệ tình dục' },
                        { title: 'Slice of Life', description: 'Nói về cuộc sống đời thường' },
                        { title: 'Smut', description: 'Những truyện có nội dung hơi nhạy cảm, đặc biệt là liên quan đến tình dục' },
                        { title: 'Soft Yaoi', description: 'Boy x Boy. Nặng hơn Shounen Ai tí.' },
                        { title: 'Soft Yuri', description: 'Girl x Girl. Nặng hơn Shoujo Ai tí' },
                        { title: 'Sports', description: 'Đúng như tên gọi, những môn thể thao như bóng đá, bóng chày, bóng chuyền, đua xe, cầu lông,... là một phần của thể loại này' },
                        { title: 'Supernatural', description: 'Thể hiện những sức mạnh đáng kinh ngạc và không thể giải thích được, chúng thường đi kèm với những sự kiện trái ngược hoặc thách thức với những định luật vật lý' },
                        { title: 'Thiếu Nhi', description: 'Truyện tranh dành cho lứa tuổi thiếu nhi' },
                        { title: 'Tragedy', description: 'Thể loại chứa đựng những sự kiện mà dẫn đến kết cục là những mất mát hay sự rủi ro to lớn' },
                        { title: 'Trinh thám', description: 'Các truyện có nội dung về các vụ án, các thám tử cảnh sát điều tra...' },
                        { title: 'Truyện scan', description: 'Các truyện đã phát hành tại VN được scan đăng online' },
                        { title: 'Truyện màu', description: 'Tổng hợp truyện tranh màu, rõ, đẹp' },
                        { title: 'Webtoon', description: 'Là truyện tranh được đăng dài kỳ trên internet của Hàn Quốc chứ không xuất bản theo cách thông thường' },
                        { title: 'Xuyên Không', highlight: true, description: 'Xuyên Không, Xuyên Việt là thể loại nhân vật chính vì một lý do nào đó mà bị đưa đến sinh sống ở một không gian hay một khoảng thời gian khác. Nhân vật chính có thể trực tiếp xuyên qua bằng thân xác mình hoặc sống lại bằng thân xác người khác.' },
                    ],
                    columns: 4,
                },
                {                    
                    title: 'Xếp hạng',
                    active: false,
                    subMenu: [
                        { title: 'Top all', icon: 'eye', description: '' },
                        { title: 'Top tháng', icon: 'eye', description: '' },
                        { title: 'Top tuần', icon: 'eye', description: '' },
                        { title: 'Top ngày', icon: 'eye', description: '' },
                        { title: 'Truyện full', icon: 'bar-chart', highlight: true, description: '' },
                        { title: 'Yêu thích', icon: 'thumbs-up', description: '' },
                        { title: 'Mới cập nhật', icon: 'refresh', description: '' },
                        { title: 'Truyện mới', icon: 'upload', description: '' },
                    ],
                    columns: 2,             
                },
                { title: 'Tìm truyện', active: false },
                { title: 'Con gái', active: false },
                { title: 'Con trai', active: false },
                { title: 'Group', active: false },
                { title: 'Góp ý', active: false },
            ],
        }
    },
    methods: {
        selectMenuItem: function (index) {
            this.menu.forEach((item, i) => {
                if (i === index) {
                    item.active = true;
                } else {
                    if (item.active) {
                        item.active = false;
                    }
                }
            });
        },
        isMenuItemContainSubMenu: function(item) {
            return !_.isNil(item) && !_.isNil(item.subMenu) && item.subMenu.length > 0;
        }
    },
    filters: {
        upperCase: function (value) {
            if (!value) return '';

            value = value.toString();
            return value.toUpperCase();
        }
    }
})
</script>
<style scoped>
.navbar-nav {
    margin: 0 auto;
    font-size: 20px;
}

.dropdown:hover .dropdown-menu {
    display: block;
}
</style>