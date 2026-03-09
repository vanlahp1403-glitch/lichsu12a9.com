const container = document.querySelector(".container");
const chatsContainer = document.querySelector(".chats-container");
const promptForm = document.querySelector(".prompt-form");
const promptInput = promptForm.querySelector(".prompt-input");
const fileInput = promptForm.querySelector("#file-input");
const fileUploadWrapper = promptForm.querySelector(".file-upload-wrapper");
const themeToggleBtn = document.querySelector("#theme-toggle-btn");
// API Setup
const API_KEY = "AIzaSyD72LyML-qgrZ4Vk92CR4R1uwvip1wNYYE";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${API_KEY}`;
let controller, typingInterval;
const chatHistory = [];
const userData = { message: "", file: {} };
// Bộ nhớ câu hỏi lịch sử
  // ===== KIẾN THỨC LỊCH SỬ =====
const knowledgeBase = [
{
keywords:["chủ đề 5","hoạt động đối ngoại của việt nam thời cận hiện đại"],
answer:`
Chủ đề 5:
HOẠT ĐỘNG ĐỐI NGOẠI CỦA VIỆT NAM THỜI CẬN – HIỆN ĐẠI

A KIẾN THỨC CƠ BẢN

1. Hoạt động đối ngoại chủ yếu của Việt Nam từ đầu thế kỉ XX đến năm 1975

a) Hoạt động đối ngoại của một số nhà yêu nước Việt Nam tiêu biểu đầu thế kỉ XX

* Phan Bội Châu
- Từ năm 1905 đến năm 1908: Sang Nhật Bản, tìm kiếm sự ủng hộ đối với công cuộc đấu tranh giành độc lập dân tộc của Việt Nam; tổ chức phong trào Đông du.
- Từ năm 1909 đến năm 1925: Hoạt động chủ yếu ở Trung Quốc, thành lập và triển kha - các hoạt động của Việt Nam Quang phục Hội; cử người liên lạc với một số tổ chức, đại diện nước ngoài.

* Phan Châu Trinh
- Năm 1906: Sang Nhật Bản, tìm kiếm sự ủng hộ đối với công cuộc đấ tranh giành độc lập dân tộc của Việt Nam; tổ chức phong trào Đông du.
- Từ năm 1911 đến năm 1925: Hoạt động tại Pháp, tìm cách thức tỉnh dư luận Pháp v tình hình Việt Nam, tranh thủ sự giúp đỡ cho cách mạn Việt Nam.

* Nguyễn Ái Quốc
- Từ năm 1918 đến năm 1920: Gia nhập Đảng Xã hội Pháp; gửi bàn Yêu sách của nhà dân An Nam đến Hội nghị Véc-xai; bỏ phiếu tán thành Đảm Xã hội Pháp gia nhập Quốc tế Cộng sản; tham gia sáng là Đảng Cộng sản Pháp.
- Từ năm 1921 đến năm 1930: Tham dự nhiều hoạt động của Quốc tế Cộng sản Liên Xô, Trung Quốc; tham gia sáng lập Hội Liên hiệ thuộc địa và Hội Liên hiệp các dân tộc bị áp bức ở Á Đông.

b) Hoạt động đối ngoại của Đảng Cộng sản Đông Dương thời kì 1930 – 1945

Thời gian Hoạt động

Giai đoạn 1930-1940
- Duy trì liên lạc với Quốc tế Cộng sản, các đảng cộng sản và phong trào vô sản.
- Thể hiện sự ủng hộ phong trào cách mạng thế giới.
- Tìm kiếm sự giúp đỡ đối với công cuộc giải phóng dân tộc của Việt Nam.

Giai đoạn 1941-1945
- Thông qua Mặt trận Việt Minh, thể hiện chủ trương ủng hộ Liên Xô cùng lực lượng Đồng minh trong cuộc chiến chống phát xít.
- Tiến hành vận động ngoại giao để tranh thủ sự ủng hộ, giúp đỡ của lực lượng Đồng mình.

c) Hoạt động đối ngoại chủ yếu của Việt Nam trong kháng chiến chống Pháp (1945-1954)

- Từ năm 1945: Tìm kiếm sự công nhận và giúp đỡ của quốc tế đối với Việt Nam Dân chủ Cộng hoà.
- Trước ngày 6-3-1946: Thực hiện chính sách ngoại giao mềm móng với quân đội Trung Hoa Dân Quốc, kiên quyết chống thực dân Pháp xâm lược.
- Từ ngày 6-3-1946: Ký với Pháp Hiệp định Sơ bộ (6-3-1946): kí với Pháp Tạm ước Việt - Pháp (14-9-1946).
- 1947-1949: Thiết lập cơ quan đại diện ngoại giao, phòng Thông tin tại một số nước; cử đại diện tham gia một số hội nghị quốc tế và khu vực.
- Năm 1950: Thiết lập quan hệ ngoại giao với Trung Quốc, Liên Xô và một số nước Đông Âu.
- Năm 1951: Tổ chức hội nghị thành lập Liên minh nhân dân Việt - Miên - Lào
- Năm 1954: Cử phải đoàn ngoại giao tham dự hội nghị và kí kết Hiệp định Giơ-ne-vơ về Đông Dương.

d) Hoạt động đối ngoại chủ yếu của Việt Nam trong kháng chiến chống Mỹ (1954-1975)

Đấu tranh yêu cầu thực hiện Hiệp định Giơ-ne-vơ
Từ năm 1954 đến năm 1958, Nhà nước Việt Nam Dân chủ Cộng hoà nhiều lần gửi công hàm cho chính quyền Sài Gòn và các bên liên quan, yêu cầu thực hiện nội dung của Hiệp định Giơ-ne-vơ.

Củng cố, phát triển quan hệ với các nước xã hội chủ nghĩa
Chủ tịch Hồ Chí Minh và lãnh đạo cấp cao của Việt Nam đã có nhiều cuộc tiếp xúc với lãnh đạo các nước xã hội chủ nghĩa, đặc biệt là Trung Quốc, Liên Xô.

Tăng cường mối quan hệ đoàn kết giữa ba nước Đông Dương
- Năm 1965, Hội nghị nhân dân ba nước Đông Dương diễn ra tại Phnôm Pênh (Cam-pu-chia).
- Năm 1970, Hội nghị cấp cao ba nước Đông Dương ra tuyên bố chung.

Đàm phán, kí kết Hiệp định Pa-ri
- Năm 1968, đàm phán chính thức giữa đại diện Chính phủ Việt Nam Dân chủ Cộng hoà và đại diện Chính phủ Mỹ diễn ra tại Pa-ri
- Năm 1973, Hiệp định Pa-ri được kí kết.

Mở rộng quan hệ ngoại giao với các nước
Việt Nam thiết lập, mở rộng quan hệ ngoại giao với nhiều nước như:
Cu-ba (1960), Ca-mo-run (1972), Hà Lan, Nhật Bản, Ô-xtrây-li-a, Pháp (1973), Nê-pan, Ni-giê-ri-a (1975)....

Đẩy mạnh đối ngoại nhân dân
Năm 1968, Uỷ ban Việt Nam đoàn kết với nhân dân Mỹ được thành lập.

2. Hoạt động đối ngoại chủ yếu của Việt Nam từ năm 1975 đến nay

a) Hoạt động đối ngoại của Việt Nam trong giai đoạn 1975-1985

Đẩy mạnh hợp tác toàn diện với Liên Xô và các nước xã hội chủ nghĩa
- Năm 1978, Việt Nam và Liên Xô kí Hiệp ước hữu nghị và hợp tác
- Năm 1978, Việt Nam gia nhập Hội đồng tương trợ kinh tế (SEV) và kỉ nhiều hiệp ước với các nước xã hội chủ nghĩa.

Phát triển quan hệ với các nước láng giềng Đông Nam Á, thúc đẩy đối thoại với ASEAN
- Năm 1977, Việt Nam và Lào ki Hiệp ước hữu nghị và hợp tác
- Năm 1979, Việt Nam giúp nhân dân Cam-pu-chia lật đổ chế độ diệt chủng Khơ-me Đỏ.

Tham gia và đóng góp tích cực vào Phong trào Không liên kết
Năm 1976, nước Việt Nam thống nhất chính thức gia nhập Phong trào Không liên kết.

Phát triển quan hệ đối ngoại với các quốc gia và tổ chức quốc tế
Năm 1977, Việt Nam trở thành thành viên Liên hợp quốc.

Bước đầu đàm phán bình thường hoá quan hệ với Mỹ
Từ năm 1977, nhiều cuộc hội đàm Việt - Mỹ đã diễn ra tại Pa-ri và Hà Nội.

b) Hoạt động đối ngoại của Việt Nam từ năm 1986 đến nay

Phá thế bao vây, cô lập, cấm vận
- Năm 1991, Việt Nam và Trung Quốc bình thường hóa quan hệ ngoại giao.
- Năm 1995, Việt Nam và Mỹ bình thường hoá quan hệ ngoại giao.

Củng cố quan hệ hữu nghị truyền thống với Lào, Cam-pu-chia
Năm 2005, lãnh đạo cấp cao Việt Nam và Cam-pu-chia nhất trí phát triển quan hệ song phương theo phương châm: Láng giếng tốt đẹp, hữu nghị truyền thống, hợp tác toàn diện, bền vững lâu dài.

Tham gia ASEAN, thúc đẩy hoạt động đối ngoại ở Đông Nam Á
- Năm 1995, Việt Nam trở thành thành viên thứ 7 của ASEAN,
- Việt Nam đâm nhiệm vai trò nước Chủ tịch ASEAN vào các năm 1998, 2010, 2020.

Thiết lập và mở rộng quan hệ hợp tác với nhiều đối tác
Từ năm 2008 đến năm 2023, Việt Nam lần lượt thiết lập, năng cấp quan hệ đối tác chiến lược toàn diện với Trung Quốc, Nga, Ấn Độ, Hàn Quốc, Mỹ, Nhật Bản.

Gia nhập và đóng góp tích cực đối với các tổ chức, diễn đàn quốc tế
- Năm 2007, Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO).
- Năm 2014, Việt Nam lần đầu tiên cử quân nhân tham gia hoạt động gìn giữ hoà bình của Liên hợp quốc.

Đàm phán, thương lượng nhằm bảo vệ chủ quyền lãnh thổ, an ninh biên giới quốc gia; giải quyết tranh chấp, bất đồng trong vẫn để biên giới.
- Năm 1997, Việt Nam và Thái Lan ki Hiệp định phân định ranh giới trên biển.
- Năm 2000, Việt Nam và Trung Quốc kì Hiệp định phân định vịnh Bắc Bộ.

Mở rộng các hoạt động đối ngoại như hỗ trợ nhân đạo, cứu hộ thảm hoạ thiên tai, bảo vệ môi trường, ứng phó biến đổi khí hậu,..
- Năm 1998, Việt Nam ký Nghị định thư Ky-ô-tô.
- Năm 2023, Việt Nam hỗ trợ khẩn cấp về tài chính và cử lực lượng quân đội tham gia hỗ trợ nhân đạo, cứu trợ thảm họa tại Thổ Nhĩ Kỳ.
`},
{
keywords:["hoạt động đối ngoại đầu thế kỉ 20","đối ngoại việt nam 1900-1975","đối ngoại việt nam trước 1975"],
answer:'Hoạt động đối ngoại chủ yếu của Việt Nam từ đầu thế kỉ XX đến năm 1975 gồm nhiều giai đoạn và lực lượng tiêu biểu.'},
{
keywords:["phan bội châu đối ngoại","hoạt động đối ngoại của phan bội châu","phong trào đông du"],
answer:`
Phan Bội Châu:
- 1905-1908: Sang Nhật Bản, tìm kiếm sự ủng hộ cho phong trào giải phóng dân tộc; tổ chức phong trào Đông Du.
- 1909-1925: Hoạt động chủ yếu ở Trung Quốc; thành lập Việt Nam Quang phục Hội.
`},
{
keywords:["phan châu trinh đối ngoại","hoạt động đối ngoại của phan châu trinh","phan chau trinh ở pháp"],
answer:`
Phan Châu Trinh:
- 1906: Sang Nhật Bản.
- 1911-1925: Hoạt động tại Pháp, thức tỉnh dư luận Pháp về tình hình Việt Nam.
`},
{
keywords:["nguyễn ái quốc đối ngoại","hoạt động đối ngoại của nguyễn ái quốc","vai trò nguyễn ái quốc quốc tế"],
answer:`
Nguyễn Ái Quốc:
- 1918-1920: Gia nhập Đảng Xã hội Pháp, gửi bản Yêu sách của nhân dân An Nam.
- 1921-1930: Hoạt động trong Quốc tế Cộng sản, sáng lập Hội Liên hiệp thuộc địa.
`},
{
keywords:["Hoạt động đối ngoại của đảng cộng sản đông dương thời kì 1930-1945","đối ngoại 1930-1945","ngoại giao việt nam 1930"],
answer:`
Thời gian Hoạt động

Giai đoạn 1930-1940
- Duy trì liên lạc với Quốc tế Cộng sản, các đảng cộng sản và phong trào vô sản.
- Thể hiện sự ủng hộ phong trào cách mạng thế giới.
- Tìm kiếm sự giúp đỡ đối với công cuộc giải phóng dân tộc của Việt Nam.

Giai đoạn 1941-1945
- Thông qua Mặt trận Việt Minh, thể hiện chủ trương ủng hộ Liên Xô cùng lực lượng Đồng minh trong cuộc chiến chống phát xít.
- Tiến hành vận động ngoại giao để tranh thủ sự ủng hộ, giúp đỡ của lực lượng Đồng mình.
`},
{
keywords:["hoạt động đối ngoại của việt nam trong giai đoạn đối ngoại kháng chiến chống pháp","ngoại giao việt nam 1945 1954","hiệp định giơ ne vơ"],
answer:`
- Từ năm 1945: Tìm kiếm sự công nhận và giúp đỡ của quốc tế đối với Việt Nam Dân chủ Cộng hoà.
- Trước ngày 6-3-1946: Thực hiện chính sách ngoại giao mềm móng với quân đội Trung Hoa Dân Quốc, kiên quyết chống thực dân Pháp xâm lược.
- Từ ngày 6-3-1946: Ký với Pháp Hiệp định Sơ bộ (6-3-1946): kí với Pháp Tạm ước Việt - Pháp (14-9-1946).
- 1947-1949: Thiết lập cơ quan đại diện ngoại giao, phòng Thông tin tại một số nước; cử đại diện tham gia một số hội nghị quốc tế và khu vực.
- Năm 1950: Thiết lập quan hệ ngoại giao với Trung Quốc, Liên Xô và một số nước Đông Âu.
- Năm 1951: Tổ chức hội nghị thành lập Liên minh nhân dân Việt - Miên - Lào
- Năm 1954: Cử phải đoàn ngoại giao tham dự hội nghị và kí kết Hiệp định Giơ-ne-vơ về Đông Dương.
`},
{
keywords:["hoạt động đối ngoại của việt nam trong giai đoạn kháng chiến chống mỹ","ngoại giao việt nam 1954-1975","hiệp định pa ri"],
answer:`
ấu tranh yêu cầu thực hiện Hiệp định Giơ-ne-vơ
Từ năm 1954 đến năm 1958, Nhà nước Việt Nam Dân chủ Cộng hoà nhiều lần gửi công hàm cho chính quyền Sài Gòn và các bên liên quan, yêu cầu thực hiện nội dung của Hiệp định Giơ-ne-vơ.

Củng cố, phát triển quan hệ với các nước xã hội chủ nghĩa
Chủ tịch Hồ Chí Minh và lãnh đạo cấp cao của Việt Nam đã có nhiều cuộc tiếp xúc với lãnh đạo các nước xã hội chủ nghĩa, đặc biệt là Trung Quốc, Liên Xô.

Tăng cường mối quan hệ đoàn kết giữa ba nước Đông Dương
- Năm 1965, Hội nghị nhân dân ba nước Đông Dương diễn ra tại Phnôm Pênh (Cam-pu-chia).
- Năm 1970, Hội nghị cấp cao ba nước Đông Dương ra tuyên bố chung.

Đàm phán, kí kết Hiệp định Pa-ri
- Năm 1968, đàm phán chính thức giữa đại diện Chính phủ Việt Nam Dân chủ Cộng hoà và đại diện Chính phủ Mỹ diễn ra tại Pa-ri
- Năm 1973, Hiệp định Pa-ri được kí kết.

Mở rộng quan hệ ngoại giao với các nước
Việt Nam thiết lập, mở rộng quan hệ ngoại giao với nhiều nước như:
Cu-ba (1960), Ca-mo-run (1972), Hà Lan, Nhật Bản, Ô-xtrây-li-a, Pháp (1973), Nê-pan, Ni-giê-ri-a (1975)....

Đẩy mạnh đối ngoại nhân dân
Năm 1968, Uỷ ban Việt Nam đoàn kết với nhân dân Mỹ được thành lập.

`},
{
keywords:["hoạt động đối ngoại của việt nam từ 1975-nay","ngoại giao việt nam hiện đại"],
answer:`
) Hoạt động đối ngoại của Việt Nam trong giai đoạn 1975-1985

Đẩy mạnh hợp tác toàn diện với Liên Xô và các nước xã hội chủ nghĩa
- Năm 1978, Việt Nam và Liên Xô kí Hiệp ước hữu nghị và hợp tác
- Năm 1978, Việt Nam gia nhập Hội đồng tương trợ kinh tế (SEV) và kỉ nhiều hiệp ước với các nước xã hội chủ nghĩa.

Phát triển quan hệ với các nước láng giềng Đông Nam Á, thúc đẩy đối thoại với ASEAN
- Năm 1977, Việt Nam và Lào ki Hiệp ước hữu nghị và hợp tác
- Năm 1979, Việt Nam giúp nhân dân Cam-pu-chia lật đổ chế độ diệt chủng Khơ-me Đỏ.

Tham gia và đóng góp tích cực vào Phong trào Không liên kết
Năm 1976, nước Việt Nam thống nhất chính thức gia nhập Phong trào Không liên kết.

Phát triển quan hệ đối ngoại với các quốc gia và tổ chức quốc tế
Năm 1977, Việt Nam trở thành thành viên Liên hợp quốc.

Bước đầu đàm phán bình thường hoá quan hệ với Mỹ
Từ năm 1977, nhiều cuộc hội đàm Việt - Mỹ đã diễn ra tại Pa-ri và Hà Nội.

b) Hoạt động đối ngoại của Việt Nam từ năm 1986 đến nay

Phá thế bao vây, cô lập, cấm vận
- Năm 1991, Việt Nam và Trung Quốc bình thường hóa quan hệ ngoại giao.
- Năm 1995, Việt Nam và Mỹ bình thường hoá quan hệ ngoại giao.

Củng cố quan hệ hữu nghị truyền thống với Lào, Cam-pu-chia
Năm 2005, lãnh đạo cấp cao Việt Nam và Cam-pu-chia nhất trí phát triển quan hệ song phương theo phương châm: Láng giếng tốt đẹp, hữu nghị truyền thống, hợp tác toàn diện, bền vững lâu dài.

Tham gia ASEAN, thúc đẩy hoạt động đối ngoại ở Đông Nam Á
- Năm 1995, Việt Nam trở thành thành viên thứ 7 của ASEAN,
- Việt Nam đâm nhiệm vai trò nước Chủ tịch ASEAN vào các năm 1998, 2010, 2020.

Thiết lập và mở rộng quan hệ hợp tác với nhiều đối tác
Từ năm 2008 đến năm 2023, Việt Nam lần lượt thiết lập, năng cấp quan hệ đối tác chiến lược toàn diện với Trung Quốc, Nga, Ấn Độ, Hàn Quốc, Mỹ, Nhật Bản.

Gia nhập và đóng góp tích cực đối với các tổ chức, diễn đàn quốc tế
- Năm 2007, Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO).
- Năm 2014, Việt Nam lần đầu tiên cử quân nhân tham gia hoạt động gìn giữ hoà bình của Liên hợp quốc.

Đàm phán, thương lượng nhằm bảo vệ chủ quyền lãnh thổ, an ninh biên giới quốc gia; giải quyết tranh chấp, bất đồng trong vẫn để biên giới.
- Năm 1997, Việt Nam và Thái Lan ki Hiệp định phân định ranh giới trên biển.
- Năm 2000, Việt Nam và Trung Quốc kì Hiệp định phân định vịnh Bắc Bộ.

Mở rộng các hoạt động đối ngoại như hỗ trợ nhân đạo, cứu hộ thảm hoạ thiên tai, bảo vệ môi trường, ứng phó biến đổi khí hậu,..
- Năm 1998, Việt Nam ký Nghị định thư Ky-ô-tô.
- Năm 2023, Việt Nam hỗ trợ khẩn cấp về tài chính và cử lực lượng quân đội tham gia hỗ trợ nhân đạo, cứu trợ thảm họa tại Thổ Nhĩ Kỳ.
`},
{
keywords:["hoạt động đối ngoại của việt nam từ 1975-1986"],
answer:`Đẩy mạnh hợp tác toàn diện với Liên Xô và các nước xã hội chủ nghĩa
- Năm 1978, Việt Nam và Liên Xô kí Hiệp ước hữu nghị và hợp tác
- Năm 1978, Việt Nam gia nhập Hội đồng tương trợ kinh tế (SEV) và kỉ nhiều hiệp ước với các nước xã hội chủ nghĩa.

Phát triển quan hệ với các nước láng giềng Đông Nam Á, thúc đẩy đối thoại với ASEAN
- Năm 1977, Việt Nam và Lào ki Hiệp ước hữu nghị và hợp tác
- Năm 1979, Việt Nam giúp nhân dân Cam-pu-chia lật đổ chế độ diệt chủng Khơ-me Đỏ.

Tham gia và đóng góp tích cực vào Phong trào Không liên kết
Năm 1976, nước Việt Nam thống nhất chính thức gia nhập Phong trào Không liên kết.

Phát triển quan hệ đối ngoại với các quốc gia và tổ chức quốc tế
Năm 1977, Việt Nam trở thành thành viên Liên hợp quốc.

Bước đầu đàm phán bình thường hoá quan hệ với Mỹ
Từ năm 1977, nhiều cuộc hội đàm Việt - Mỹ đã diễn ra tại Pa-ri và Hà Nội.
`},
{
keywords:["Hoạt động đối ngoại của việt nam từ 1986-nay"],
answer:`Phá thế bao vây, cô lập, cấm vận
- Năm 1991, Việt Nam và Trung Quốc bình thường hóa quan hệ ngoại giao.
- Năm 1995, Việt Nam và Mỹ bình thường hoá quan hệ ngoại giao.

Củng cố quan hệ hữu nghị truyền thống với Lào, Cam-pu-chia
Năm 2005, lãnh đạo cấp cao Việt Nam và Cam-pu-chia nhất trí phát triển quan hệ song phương theo phương châm: Láng giếng tốt đẹp, hữu nghị truyền thống, hợp tác toàn diện, bền vững lâu dài.

Tham gia ASEAN, thúc đẩy hoạt động đối ngoại ở Đông Nam Á
- Năm 1995, Việt Nam trở thành thành viên thứ 7 của ASEAN,
- Việt Nam đâm nhiệm vai trò nước Chủ tịch ASEAN vào các năm 1998, 2010, 2020.

Thiết lập và mở rộng quan hệ hợp tác với nhiều đối tác
Từ năm 2008 đến năm 2023, Việt Nam lần lượt thiết lập, năng cấp quan hệ đối tác chiến lược toàn diện với Trung Quốc, Nga, Ấn Độ, Hàn Quốc, Mỹ, Nhật Bản.

Gia nhập và đóng góp tích cực đối với các tổ chức, diễn đàn quốc tế
- Năm 2007, Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO).
- Năm 2014, Việt Nam lần đầu tiên cử quân nhân tham gia hoạt động gìn giữ hoà bình của Liên hợp quốc.

Đàm phán, thương lượng nhằm bảo vệ chủ quyền lãnh thổ, an ninh biên giới quốc gia; giải quyết tranh chấp, bất đồng trong vẫn để biên giới.
- Năm 1997, Việt Nam và Thái Lan ki Hiệp định phân định ranh giới trên biển.
- Năm 2000, Việt Nam và Trung Quốc kì Hiệp định phân định vịnh Bắc Bộ.

Mở rộng các hoạt động đối ngoại như hỗ trợ nhân đạo, cứu hộ thảm hoạ thiên tai, bảo vệ môi trường, ứng phó biến đổi khí hậu,..
- Năm 1998, Việt Nam ký Nghị định thư Ky-ô-tô.
- Năm 2023, Việt Nam hỗ trợ khẩn cấp về tài chính và cử lực lượng quân đội tham gia hỗ trợ nhân đạo, cứu trợ thảm họa tại Thổ Nhĩ Kỳ.
`},
];
const sampleQA = {
"Hãy kể các hoạt động đối ngoại của Việt Nam trong giai đoạn kháng chiến chống pháp":
`- Chính phủ Việt Nam đã gửi thư, công hàm đề nghị Đại hội đồng Liên hợp quốc và các nước lớn công nhận Nhà nước Việt Nam Dân chủ Cộng hoà.

+ Với Trung Hoa Dân quốc, ta chủ động vừa đấu tranh chính trị, vừa vận động ngoại giao; thực hiện các hoạt động hữu nghị, thân thiện và hoà hoãn để tranh thủ thời gian củng cố chính quyền cách mạng.

+ Với Pháp, Việt Nam ký Hiệp định Sơ bộ (6 - 3 - 1946) đồng ý để quân đội Pháp thay quân đội Trung Hoa Dân quốc làm nhiệm vụ giải giáp quân đội Nhật Bản ở miền Bắc.

Sau đó Chủ tịch Hồ Chí Minh tiếp tục kí bản Tạm ước Việt - Pháp (14 - 9 - 1946) để kéo dài thời gian hoà bình, chuẩn bị kháng chiến.

- Từ khi cuộc kháng chiến toàn quốc chống Pháp bùng nổ (12 - 1946), Việt Nam vẫn thể hiện thiện chí hòa bình và kêu gọi nhân dân Pháp chống chiến tranh.

- Từ năm 1950, hoạt động đối ngoại của Việt Nam Dân chủ Cộng hòa được đẩy mạnh.

+ Năm 1950, Việt Nam thiết lập quan hệ ngoại giao với Trung Quốc, Liên Xô và các nước xã hội chủ nghĩa khác.

+ Năm 1951, Liên minh nhân dân Việt – Miên – Lào được thành lập.

- Tháng 5 - 1954, Hội nghị quốc tế về Đông Dương tổ chức tại Giơ-ne-vơ.

- Ngày 21 - 7 - 1954, Hiệp định Giơ-ne-vơ được ký kết, ghi nhận các quyền dân tộc cơ bản của nhân dân Đông Dương.`,

"Hãy kể tên các hoạt động đối ngoại của Việt Nam trong giai đoạn kháng chiến chống Mỹ":
`+ Đấu tranh yêu cầu thực hiện Hiệp định Giơ-ne-vơ: Từ năm 1954 đến năm 1958, Nhà nước Việt Nam Dân chủ Cộng hoà nhiều lần gửi công hàm cho chính quyền Sài Gòn và các bên liên quan, yêu cầu thực hiện nội dung của Hiệp định Giơ-ne-vơ.
 + Củng cố, phát triển quan hệ với các nước xã hội chủ nghĩa: Từ năm 1954 đến năm 1975, Chủ tịch Hồ Chí Minh và lãnh đạo cấp cao của Việt Nam đã có nhiều cuộc tiếp xúc với lãnh đạo các nước xã hội chủ nghĩa, đặc biệt là Trung Quốc, Liên Xô. 
 + Tăng cường mối quan hệ đoàn kết giữa ba nước Đông Dương: 
   ▪ Năm 1965, Hội nghị nhân dân ba nước Đông Dương. 
   ▪ Năm 1970, Hội nghị Cấp cao nhân dân ba nước Đông Dương ra tuyên bố chung.
 + Đàm phán, kí kết Hiệp định Pa-ri: Từ năm 1968 đến năm 1973, Việt Nam cử các phái đoàn ngoại giao, tham gia đàm phán, kí kết Hiệp định Pa-ri, buộc Mỹ rút quân và công nhận các quyền dân tộc cơ bản của Việt Nam.
 + Mở rộng quan hệ ngoại giao với các nước: Việt Nam thiết lập, mở rộng quan hệ ngoại giao với nhiều nước như: Cu-ba (1960), Ca-mơ-run (1972), Hà Lan, Nhật Bản, Ô-xtrây-li-a, Pháp (1973), Nê-pan, Ni-giê-ri-a (1975),... 
 + Đẩy mạnh đối ngoại nhân dân: năm 1968, Uỷ ban Việt Nam đoàn kết với nhân dân Mỹ được thành lập.`,
"Tóm tắt thông tin về những chính sách đối ngoại của Vn trong 1975- 1986":
`  - Đẩy mạnh hợp tác toàn diện với Liên Xô và các nước xã hội chủ nghĩa: 
    + Năm 1975, Tổng Bí thư Lê Duẩn thăm chính thức Liên Xô. Hai bên kí các hiệp định tương trợ. Trên cơ sở đó, Liên Xô giúp Việt Nam xây dựng nhiều công trình lớn như Nhà máy thuỷ điện Hoà Bình, Nhà máy xi măng Bỉm Sơn,… 
    + Năm 1978, Việt Nam và Liên Xô kí Hiệp ước hữu nghị và hợp tác. + Năm 1978, Việt Nam gia nhập Hội đồng Tương trợ Kinh tế (SEV) và kí nhiều hiệp ước hợp tác với các nước xã hội chủ nghĩa trên thế giới.
   - Phát triển quan hệ với các nước láng giềng Đông Nam Á, thúc đẩy đối thoại với ASEAN: 
    + Năm 1977, Việt Nam và Lào kí Hiệp ước Hữu nghị và hợp tác. 
    + Năm 1979, Việt Nam giúp nhân dân Cam-pu-chia lật đổ chế độ diệt chủng Khơ-me Đỏ.
   - Tham gia và đóng góp tích cực vào Phong trào Không liên kết: Năm 1976, nước Việt Nam thống nhất chính thức gia nhập Phong trào Không liên kết.
   - Phát triển quan hệ đối ngoại với các quốc gia và tổ chức quốc tế: 
    + Năm 1977, Việt Nam trở thành thành viên Liên hợp quốc. 
    + Đến năm 1979, Việt Nam đã tham gia 33 tổ chức và 19 điều ước quốc tế. 
   - Bước đầu đàm phán bình thường hoá quan hệ với Mỹ: Từ cuối những năm 70 của thế kỉ XX, Việt Nam đã gửi thông điệp cho chính quyền Mỹ về việc duy trì quan hệ song phương trên cơ sở tôn trọng lẫn nhau, không thù địch. Nhiều cuộc hội đàm Việt - Mỹ đã diễn ra tại Pa-ri và Hà Nội.`,
    "Tóm tắt thông tin về những chính sách đối ngoại của Vn trong 1986-nay":
`   - Phá thế bao vây, cấm vận:
     + Năm 1991, Việt Nam và Trung Quốc bình thường hoá quan hệ ngoại giao.
     + Năm 1995, Việt Nam và Mỹ bình thường hoá quan hệ ngoại giao. 
    - Củng cố quan hệ hữu nghị truyền thống với Lào, Cam-pu-chia; tham gia ASEAN, thúc đẩy hoạt động đối ngoại ở Đông Nam Á: 
     + Năm 1995, Việt Nam trở thành thành viên thứ 7 của ASEAN. + Năm 1995, Việt Nam tham gia Hiệp định thương mại tự do ASEAN (AFTA). 
     + Tổ chức thành công nhiều hoạt động và hội nghị của ASEAN; đảm nhiệm vai trò nước Chủ tịch ASEAN vào các năm 1998, 2010, 2020; có nhiều đóng góp xây dựng Cộng đồng ASEAN. 
    - Thiết lập và mở rộng quan hệ hợp tác với nhiều đối tác: Từ năm 2008 đến năm 2023, Việt Nam lần lượt thiết lập, nâng cấp quan hệ đối tác chiến lược toàn diện với Trung Quốc, Nga, Ấn Độ, Hàn Quốc, Mỹ, Nhật Bản. 
    - Gia nhập và đóng góp tích cực đối với các tổ chức, diễn đàn quốc tế: 
     + Năm 2007, Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO). 
     + Đến năm 2023, Việt Nam là thành viên của 70 diễn đàn và các cơ chế hợp tác quốc tế, có quan hệ với hơn 500 tổ chức phi chính phủ trên thế giới. `,
};
function searchKnowledge(question){
const q = question.toLowerCase();

for(let item of knowledgeBase){
for(let key of item.keywords){
if(q.includes(key)){
return item.answer;
}
}
}
return null;
}
function searchSample(question){

const q = question
.toLowerCase()
.replace(/[?.!]/g,"")   // bỏ dấu chấm, ?, !
.trim();

for(let key in sampleQA){

const k = key
.toLowerCase()
.replace(/[?.!]/g,"")
.trim();

if(q === k){
return sampleQA[key];
}

}

return null;
}
function showAnswer(question, answer){

const userMsgHTML = `<p class="message-text"></p>`;
const userMsgDiv = createMessageElement(userMsgHTML, "user-message");
userMsgDiv.querySelector(".message-text").textContent = question;
chatsContainer.appendChild(userMsgDiv);

const botMsgHTML = `<img class="avatar" src="gemini.svg" />
<p class="message-text">${answer}</p>`;
const botMsgDiv = createMessageElement(botMsgHTML, "bot-message");
chatsContainer.appendChild(botMsgDiv);

scrollToBottom();
}
// Set initial theme from local storage
const isLightTheme = localStorage.getItem("themeColor") === "light_mode";
document.body.classList.toggle("light-theme", isLightTheme);
themeToggleBtn.textContent = isLightTheme ? "dark_mode" : "light_mode";
// Function to create message elements
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};
// Scroll to the bottom of the container
const scrollToBottom = () => container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
// Simulate typing effect for bot responses
const typingEffect = (text, textElement, botMsgDiv) => {
  textElement.textContent = "";
  const words = text.split(" ");
  let wordIndex = 0;
  // Set an interval to type each word
  typingInterval = setInterval(() => {
    if (wordIndex < words.length) {
      textElement.textContent += (wordIndex === 0 ? "" : " ") + words[wordIndex++];
      scrollToBottom();
    } else {
      clearInterval(typingInterval);
      botMsgDiv.classList.remove("loading");
      document.body.classList.remove("bot-responding");
    }
  }, 40); // 40 ms delay
};
// Make the API call and generate the bot's response
const generateResponse = async (botMsgDiv) => {
  const textElement = botMsgDiv.querySelector(".message-text");
  controller = new AbortController();
  // Add user message and file data to the chat history
  chatHistory.push({
    role: "user",
    parts: [{ text: userData.message }, ...(userData.file.data ? [{ inline_data: (({ fileName, isImage, ...rest }) => rest)(userData.file) }] : [])],
  });
  try {
    // Send the chat history to the API to get a response
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: chatHistory }),
      signal: controller.signal,
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);
    // Process the response text and display with typing effect
    const responseText = data.candidates[0].content.parts[0].text.replace(/\*\*([^*]+)\*\*/g, "$1").trim();
    typingEffect(responseText, textElement, botMsgDiv);
    chatHistory.push({ role: "model", parts: [{ text: responseText }] });
  } catch (error) {
    textElement.textContent = error.name === "AbortError" ? "Response generation stopped." : error.message;
    textElement.style.color = "#d62939";
    botMsgDiv.classList.remove("loading");
    document.body.classList.remove("bot-responding");
    scrollToBottom();
  } finally {
    userData.file = {};
  }
};
// Handle the form submission
const handleFormSubmit = (e) => {
  e.preventDefault();
  const userMessage = promptInput.value.trim();

  if (!userMessage) return;

  // kiểm tra câu hỏi mẫu
  const sampleAnswer = searchSample(userMessage);
  if(sampleAnswer){
    showAnswer(userMessage, sampleAnswer);
    promptInput.value="";
    return;
  }

  // kiểm tra dữ liệu lịch sử
  const knowledgeAnswer = searchKnowledge(userMessage);
  if(knowledgeAnswer){
    showAnswer(userMessage, knowledgeAnswer);
    promptInput.value="";
    return;
  }

  if (document.body.classList.contains("bot-responding")) return;
  // Kiểm tra câu hỏi có trong bộ nhớ không
  if (!userMessage || document.body.classList.contains("bot-responding")) return;
  userData.message = userMessage;
  promptInput.value = "";
  document.body.classList.add("chats-active", "bot-responding");
  fileUploadWrapper.classList.remove("file-attached", "img-attached", "active");
  // Generate user message HTML with optional file attachment
  const userMsgHTML = `
    <p class="message-text"></p>
    ${userData.file.data ? (userData.file.isImage ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="img-attachment" />` : `<p class="file-attachment"><span class="material-symbols-rounded">description</span>${userData.file.fileName}</p>`) : ""}
  `;
  const userMsgDiv = createMessageElement(userMsgHTML, "user-message");
  userMsgDiv.querySelector(".message-text").textContent = userData.message;
  chatsContainer.appendChild(userMsgDiv);
  scrollToBottom();
  setTimeout(() => {
    // Generate bot message HTML and add in the chat container
    const botMsgHTML = `<img class="avatar" src="gemini.svg" /> <p class="message-text">Just a sec...</p>`;
    const botMsgDiv = createMessageElement(botMsgHTML, "bot-message", "loading");
    chatsContainer.appendChild(botMsgDiv);
    scrollToBottom();
    generateResponse(botMsgDiv);
  }, 600); // 600 ms delay
};
// Handle file input change (file upload)
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;
  const isImage = file.type.startsWith("image/");
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    fileInput.value = "";
    const base64String = e.target.result.split(",")[1];
    fileUploadWrapper.querySelector(".file-preview").src = e.target.result;
    fileUploadWrapper.classList.add("active", isImage ? "img-attached" : "file-attached");
    // Store file data in userData obj
    userData.file = { fileName: file.name, data: base64String, mime_type: file.type, isImage };
  };
});
// Cancel file upload
document.querySelector("#cancel-file-btn").addEventListener("click", () => {
  userData.file = {};
  fileUploadWrapper.classList.remove("file-attached", "img-attached", "active");
});
// Stop Bot Response
document.querySelector("#stop-response-btn").addEventListener("click", () => {
  controller?.abort();
  userData.file = {};
  clearInterval(typingInterval);
  chatsContainer.querySelector(".bot-message.loading").classList.remove("loading");
  document.body.classList.remove("bot-responding");
});
// Toggle dark/light theme
themeToggleBtn.addEventListener("click", () => {
  const isLightTheme = document.body.classList.toggle("light-theme");
  localStorage.setItem("themeColor", isLightTheme ? "light_mode" : "dark_mode");
  themeToggleBtn.textContent = isLightTheme ? "dark_mode" : "light_mode";
});
// Delete all chats
document.querySelector("#delete-chats-btn").addEventListener("click", () => {
  chatHistory.length = 0;
  chatsContainer.innerHTML = "";
  document.body.classList.remove("chats-active", "bot-responding");
});
// Handle suggestions click
document.querySelectorAll(".suggestions-item").forEach((suggestion) => {
  suggestion.addEventListener("click", () => {
    promptInput.value = suggestion.querySelector(".text").textContent;
    promptForm.dispatchEvent(new Event("submit"));
  });
});
// Show/hide controls for mobile on prompt input focus
document.addEventListener("click", ({ target }) => {
  const wrapper = document.querySelector(".prompt-wrapper");
  const shouldHide = target.classList.contains("prompt-input") || (wrapper.classList.contains("hide-controls") && (target.id === "add-file-btn" || target.id === "stop-response-btn"));
  wrapper.classList.toggle("hide-controls", shouldHide);
});
// Add event listeners for form submission and file input click
promptForm.addEventListener("submit", handleFormSubmit);
promptForm.querySelector("#add-file-btn").addEventListener("click", () => fileInput.click());