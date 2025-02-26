        const navIcon = document.querySelector('.header-icon');
        const navigator = document.querySelector('.navigator');
        const overlay = document.querySelector('.overlay');
    
        
        navIcon.addEventListener('click', function() {
            navigator.classList.toggle('open');
            overlay.classList.toggle('show');
        });
    
        
        overlay.addEventListener('click', function() {
            navigator.classList.remove('open');
            overlay.classList.remove('show');
        });
    
        
        document.querySelector('.menu-icon').addEventListener('click', function() {
            navigator.classList.remove('open');
            overlay.classList.remove('show');
        });
        const menuItems = document.querySelectorAll('.menu-item');
        
        const articleContent = document.querySelector('.inner-article'); 

        const navContent = document.querySelector('.nav-menu')
        
        const pageBarItems = document.querySelectorAll('.page-bar-item');

        pageBarItems.forEach((item, index) => {
            item.addEventListener('click', function(e) {
                e.preventDefault(); 
    
                pageBarItems.forEach(i => i.classList.remove('active'));
                menuItems.forEach(i => i.classList.remove('active'));
    
                this.classList.add('active');
                menuItems[index].classList.add('active');

                const id = this.id;

                if (id === "monhoc") {
                    articleContent.innerHTML = `
                        <div class="article">
                            <div class="article-content" id="article1">
                                <h2>IT4409 Công nghệ web và dịch vụ trực tuyến (Web technologies and e-Services)</h2>
                                <p>
                                    <span class="font-weight">- Khối lượng (Credits):</span> 3(2-2-0-6)
                                    <br>
                                    <span class="font-weight">- Học phần tiên quyết (Prerequisite):</span> Không (None)
                                    <br>
                                    <span class="font-weight">- Học phần học trước (Pre-courses):</span> (IT3090 hoặc/or IT3091) và/and (IT3100 hoặc/or IT3600)
                                    <br>
                                    <span class="font-weight">- Học phần song hành (Corequisite Courses):</span> Không (None)
                                </p>
                            </div>
                            <div class="article-ad">
                                <div class="ad-box small-box ad ad-1"></div>
                                <div class="ad-box large-box ad ad-2"></div>
                            </div>
                        </div>
                        <div class="article">
                            <div class="article-content" id="article2">
                                <h2>Mục tiêu</h2>
                                <p>
                                    Học phần cung cấp các kiến thức cần thiết để xây dựng và phát triển các ứng dụng, dịch vụ trực tuyến trên môi trường web. Sau khi học xong học phần này, sinh viên có khả năng:
                                    <br>
                                    ● Có thể sử dụng một ngôn ngữ lập trình như JSP, PHP để phát triển ứng dụng web cho các lĩnh vực khác nhau như: hệ quản trị nội dung (CMS), cổng thông tin (Portal), hay các ứng dụng điện tử (eCommerce, eLearning, eGoverment,…)
                                    <br>
                                    ● Nắm vững được các công nghệ web, các platform, framework hiện đang thịnh hành.
                                    <br>
                                    Ngoài ra học phần cũng cung cấp cho sinh viên các kỹ năng làm việc nhóm, thuyết trình và thái độ cần thiết để làm việc và ứng dụng các kỹ thuật trong các dự án, công ty về phần mềm sau này.
                                </p>
                            </div>
                            <div class="article-ad">
                                <div class="ad-box small-box ad ad-3"></div>
                                <div class="ad-box large-box ad ad-4"></div>
                            </div>
                        </div>
                        <div class="article">
                            <div class="article-content" id="article3">
                                <h2>Nội dung</h2>
                                <p>Internet, web, kiến trúc ứng dụng web, HTML, CSS, Javascript, PHP, JSP, Ajax, DOM, XML, SOA, An toàn bảo mật web, v.v</p>
                            </div>
                            <div class="article-ad">
                                <div class="ad-box small-box ad ad-5"></div>
                                <div class="ad-box large-box ad ad-6"></div>
                            </div>
                        </div>
                    `;
                    navContent.innerHTML = `
                        <ul>
                            <li>
                                <a href="#article1">IT4409</a>
                            </li>
                            <li>
                                <a href="#article2">Mục tiêu</a>
                            </li>
                            <li>
                                <a href="#article3">Nội dung</a>
                            </li>
                        </ul>
                    `;
                } else if (id === "congnghe") {
                    articleContent.innerHTML = `
                        <div class="article">
                            <div class="article-content" id="article1">
                                <h2>Các công nghệ Web</h2>
                                <p>
                                    Các công nghệ Web hiện đại bao gồm HTML5, CSS3, JavaScript, và các framework phổ biến như React, Angular, và Vue. Những công nghệ này giúp xây dựng các ứng dụng web tương tác và mạnh mẽ.
                                    <br>
                                    ● HTML5: Cung cấp các thẻ ngữ nghĩa mới để tối ưu hóa việc hiển thị nội dung trên web.
                                    <br>
                                    ● CSS3: Hỗ trợ các tính năng như Flexbox, Grid Layout, và các hiệu ứng chuyển động.
                                    <br>
                                    ● JavaScript: Ngôn ngữ lập trình giúp trang web trở nên tương tác và năng động.
                                </p>
                            </div>
                            <div class="article-ad">
                                <div class="ad-box small-box ad ad-1"></div>
                                <div class="ad-box large-box ad ad-2"></div>
                            </div>
                        </div>
                    `;
                    navContent.innerHTML = `
                        <ul>
                            <li>
                                <a href="#article1">Các công nghệ Web</a>
                            </li>
                        </ul>
                    `;
                } else if (id === "sinhvien") {
                    articleContent.innerHTML = `
                        <div class="article">
                            <div class="article-content" id="article1">
                                <h2>Thông tin sinh viên</h2>
                                <div class="info">
                                    <div class="info1">
                                        <span class="font-weight">Họ và tên: </span>Nguyễn Thành Long
                                        <br>
                                        <span class="font-weight">Năm vào trường: </span>2022
                                        <br>
                                        <span class="font-weight">Bậc đào tạo: </span>KSCLC-TN-TT-VNVP-ICT
                                        <br>
                                        <span class="font-weight">Chương trình: </span>Công nghệ thông tin Việt-Nhật 2022
                                        <br>
                                        <span class="font-weight">Khoa/Viện quản lí: </span>Trường Công nghệ thông tin và Truyền thông
                                        <br>
                                        <span class="font-weight">Tình trạng học tập: </span>Học
                                    </div>
                                    <div class="info2">
                                        <span class="font-weight">Giới tính: </span>Nam
                                        <br>
                                        <span class="font-weight">Lớp: </span>Việt Nhật 02-K67
                                        <br>
                                        <span class="font-weight">Khóa học: </span>K67
                                        <br>
                                        <span class="font-weight">Email: </span>long.nt225736@sis.hust.edu.vn
                                    </div>
                                </div>
                            </div>
                            <div class="article-img">
                                <img src="Assets/Image/anhthe.jpg" alt="Ảnh thẻ">
                                <p><span class="font-weight">MSSV: </span>20225736</p>
                            </div>
                        </div>
                        <div class="article">
                            <div class="article-content"  id="article2">
                                <h2>Thông tin học tập</h2>
                                <div class="info">
                                    <div class="info1">
                                        <span class="font-weight">Tổng kết học kỳ: </span>20232
                                        <br>
                                        <span class="font-weight">Trung bình tích lũy: </span>2.89
                                        <br>
                                        <span class="font-weight">Số TC nợ đăng ký: </span>3
                                    </div>
                                    <div class="info2">
                                        <span class="font-weight">Số TC tích lũy: </span>60
                                        <br>
                                        <span class="font-weight">Trình độ sinh viên: </span>2
                                        <br>
                                        <span class="font-weight">Mức cảnh báo: </span>M0
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="article">
                            <div class="article-content"  id="article3">
                                <h2>Sở thích</h2>
                                <div class="info">
                                    <div class="info1">
                                        Xem anime, chơi game,...
                                        <br>
                                        <span class="font-weight">Đặc biệt: </span>lonhidol
                                    </div>
                                </div>
                            </div>
                            <div class="article-img2">
                                <img src="Assets/Image/ire.webp" alt="Furina">
                            </div>
                        </div>
                    `;
                    navContent.innerHTML = `
                        <ul>
                            <li>
                                <a href="#article1">Thông tin sinh viên</a>
                            </li>
                            <li>
                                <a href="#article2">Thông tin học tập</a>
                            </li>
                            <li>
                                <a href="#article3">Thông tin sở thích</a>
                            </li>
                        </ul>
                    `;
                } else if (id === "logo2") {
                    articleContent.innerHTML = `
                        <div class="article">
                        <div class="article-content" id="article1">
                            <h2>Thông tin khai giảng</h2>
                            <p>
                                <span class="font-weight">Thời gian:</span> Thứ tư ngày 09/10/2024, am
                                <br>
                                <span class="font-weight">Thành phần/Mời dự:</span> ĐUĐH; Hội đồng ĐH; BGĐ; BCH Công đoàn ĐH; BCH Đoàn TNĐH; BCH Hội SV; Chủ tịch Hội CCB; Chủ tịch Hội CGC; Chủ tịch mạng lưới CSV; Ban TTND; Lãnh đạo các đơn vị cấp 3 trở lên. Văn phòng ĐH chuẩn bị.
                                <br>
                                <span class="font-weight">Địa điểm:</span> Hội trường C2
                            </p>
                        </div>
                        <div class="article-ad">
                            <div class="ad-box small-box ad ad-1"></div>
                            <div class="ad-box large-box ad ad-2"></div>
                        </div>
                    </div>
                    <div class="article">
                        <div class="article-content" id="article2">
                            <h2>Thông tin về HUST</h2>
                            <p>
                                Đại học Bách Khoa Hà Nội (HUST) là một trong những trường đại học hàng đầu tại Việt Nam, nổi tiếng với chất lượng đào tạo và nghiên cứu khoa học trong các lĩnh vực kỹ thuật và công nghệ. Với hơn 60 năm lịch sử, HUST không ngừng đổi mới, tiên phong trong ứng dụng công nghệ và hợp tác quốc tế để nâng cao chất lượng giáo dục.
                            </p>
                        </div>
                        <div class="article-ad">
                            <div class="ad-box small-box ad ad-3"></div>
                            <div class="ad-box large-box ad ad-4"></div>
                        </div>
                    </div>
                    <div class="article">
                        <div class="article-content" id="article3">
                            <h2>Công ty quan tâm</h2>
                            <p>Hiện tại chưa có ạ :D</p>
                        </div>
                        <div class="article-ad">
                            <div class="ad-box small-box ad ad-5"></div>
                            <div class="ad-box large-box ad ad-6"></div>
                        </div>
                    </div>
                    `;
                    navContent.innerHTML = `
                        <ul>
                            <li>
                                <a href="#article1">Thông tin khai giảng</a>
                            </li>
                            <li>
                                <a href="#article2">Thông tin về HUST</a>
                            </li>
                            <li>
                                <a href="#article3">Công ty quan tâm</a>
                            </li>
                        </ul>
                    `;
                }
            });
        });
        
        menuItems.forEach((item, index) => {
            item.addEventListener('click', function(e) {
                e.preventDefault(); 
    
                menuItems.forEach(i => i.classList.remove('active'));
                pageBarItems.forEach(i => i.classList.remove('active'));
    
                this.classList.add('active');
                pageBarItems[index].classList.add('active');

                const id = this.id;

                if (id === "mon-hoc") {
                    articleContent.innerHTML = `
                        <div class="article">
                            <div class="article-content" id="article1">
                                <h2>IT4409 Công nghệ web và dịch vụ trực tuyến (Web technologies and e-Services)</h2>
                                <p>
                                    <span class="font-weight">- Khối lượng (Credits):</span> 3(2-2-0-6)
                                    <br>
                                    <span class="font-weight">- Học phần tiên quyết (Prerequisite):</span> Không (None)
                                    <br>
                                    <span class="font-weight">- Học phần học trước (Pre-courses):</span> (IT3090 hoặc/or IT3091) và/and (IT3100 hoặc/or IT3600)
                                    <br>
                                    <span class="font-weight">- Học phần song hành (Corequisite Courses):</span> Không (None)
                                </p>
                            </div>
                            <div class="article-ad">
                                <div class="ad-box small-box ad ad-1"></div>
                                <div class="ad-box large-box ad ad-2"></div>
                            </div>
                        </div>
                        <div class="article">
                            <div class="article-content" id="article2">
                                <h2>Mục tiêu</h2>
                                <p>
                                    Học phần cung cấp các kiến thức cần thiết để xây dựng và phát triển các ứng dụng, dịch vụ trực tuyến trên môi trường web. Sau khi học xong học phần này, sinh viên có khả năng:
                                    <br>
                                    ● Có thể sử dụng một ngôn ngữ lập trình như JSP, PHP để phát triển ứng dụng web cho các lĩnh vực khác nhau như: hệ quản trị nội dung (CMS), cổng thông tin (Portal), hay các ứng dụng điện tử (eCommerce, eLearning, eGoverment,…)
                                    <br>
                                    ● Nắm vững được các công nghệ web, các platform, framework hiện đang thịnh hành.
                                    <br>
                                    Ngoài ra học phần cũng cung cấp cho sinh viên các kỹ năng làm việc nhóm, thuyết trình và thái độ cần thiết để làm việc và ứng dụng các kỹ thuật trong các dự án, công ty về phần mềm sau này.
                                </p>
                            </div>
                            <div class="article-ad">
                                <div class="ad-box small-box ad ad-3"></div>
                                <div class="ad-box large-box ad ad-4"></div>
                            </div>
                        </div>
                        <div class="article">
                            <div class="article-content" id="article3">
                                <h2>Nội dung</h2>
                                <p>Internet, web, kiến trúc ứng dụng web, HTML, CSS, Javascript, PHP, JSP, Ajax, DOM, XML, SOA, An toàn bảo mật web, v.v</p>
                            </div>
                            <div class="article-ad">
                                <div class="ad-box small-box ad ad-5"></div>
                                <div class="ad-box large-box ad ad-6"></div>
                            </div>
                        </div>
                    `;
                    navContent.innerHTML = `
                        <ul>
                            <li>
                                <a href="#article1">IT4409</a>
                            </li>
                            <li>
                                <a href="#article2">Mục tiêu</a>
                            </li>
                            <li>
                                <a href="#article3">Nội dung</a>
                            </li>
                        </ul>
                    `;
                } else if (id === "cong-nghe") {
                    articleContent.innerHTML = `
                        <div class="article">
                            <div class="article-content" id="article1">
                                <h2>Các công nghệ Web</h2>
                                <p>
                                    Các công nghệ Web hiện đại bao gồm HTML5, CSS3, JavaScript, và các framework phổ biến như React, Angular, và Vue. Những công nghệ này giúp xây dựng các ứng dụng web tương tác và mạnh mẽ.
                                    <br>
                                    ● HTML5: Cung cấp các thẻ ngữ nghĩa mới để tối ưu hóa việc hiển thị nội dung trên web.
                                    <br>
                                    ● CSS3: Hỗ trợ các tính năng như Flexbox, Grid Layout, và các hiệu ứng chuyển động.
                                    <br>
                                    ● JavaScript: Ngôn ngữ lập trình giúp trang web trở nên tương tác và năng động.
                                </p>
                            </div>
                            <div class="article-ad">
                                <div class="ad-box small-box ad ad-1"></div>
                                <div class="ad-box large-box ad ad-2"></div>
                            </div>
                        </div>
                    `;
                    navContent.innerHTML = `
                        <ul>
                            <li>
                                <a href="#article1">Các công nghệ Web</a>
                            </li>
                        </ul>
                    `;
                } else if (id === "sinh-vien") {
                    articleContent.innerHTML = `
                        <div class="article">
                            <div class="article-content" id="article1">
                                <h2>Thông tin sinh viên</h2>
                                <div class="info">
                                    <div class="info1">
                                        <span class="font-weight">Họ và tên: </span>Nguyễn Thành Long
                                        <br>
                                        <span class="font-weight">Năm vào trường: </span>2022
                                        <br>
                                        <span class="font-weight">Bậc đào tạo: </span>KSCLC-TN-TT-VNVP-ICT
                                        <br>
                                        <span class="font-weight">Chương trình: </span>Công nghệ thông tin Việt-Nhật 2022
                                        <br>
                                        <span class="font-weight">Khoa/Viện quản lí: </span>Trường Công nghệ thông tin và Truyền thông
                                        <br>
                                        <span class="font-weight">Tình trạng học tập: </span>Học
                                    </div>
                                    <div class="info2">
                                        <span class="font-weight">Giới tính: </span>Nam
                                        <br>
                                        <span class="font-weight">Lớp: </span>Việt Nhật 02-K67
                                        <br>
                                        <span class="font-weight">Khóa học: </span>K67
                                        <br>
                                        <span class="font-weight">Email: </span>long.nt225736@sis.hust.edu.vn
                                    </div>
                                </div>
                            </div>
                            <div class="article-img">
                                <img src="Assets/Image/anhthe.jpg" alt="Ảnh thẻ">
                                <p><span class="font-weight">MSSV: </span>20225736</p>
                            </div>
                        </div>
                        <div class="article">
                            <div class="article-content"  id="article2">
                                <h2>Thông tin học tập</h2>
                                <div class="info">
                                    <div class="info1">
                                        <span class="font-weight">Tổng kết học kỳ: </span>20232
                                        <br>
                                        <span class="font-weight">Trung bình tích lũy: </span>2.89
                                        <br>
                                        <span class="font-weight">Số TC nợ đăng ký: </span>3
                                    </div>
                                    <div class="info2">
                                        <span class="font-weight">Số TC tích lũy: </span>60
                                        <br>
                                        <span class="font-weight">Trình độ sinh viên: </span>2
                                        <br>
                                        <span class="font-weight">Mức cảnh báo: </span>M0
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="article">
                            <div class="article-content"  id="article3">
                                <h2>Sở thích</h2>
                                <div class="info">
                                    <div class="info1">
                                        Xem anime, chơi game,...
                                        <br>
                                        <span class="font-weight">Đặc biệt: </span>Lonhidol 
                                    </div>
                                </div>
                            </div>
                            <div class="article-img2">
                                <img src="Assets/Image/ire.webp" alt="Furina">
                            </div>
                        </div>
                    `;
                    navContent.innerHTML = `
                        <ul>
                            <li>
                                <a href="#article1">Thông tin sinh viên</a>
                            </li>
                            <li>
                                <a href="#article2">Thông tin học tập</a>
                            </li>
                            <li>
                                <a href="#article3">Thông tin sở thích</a>
                            </li>
                        </ul>
                    `;
                } else if (id === "logo") {
                    articleContent.innerHTML = `
                        <div class="article">
                        <div class="article-content" id="article1">
                            <h2>Thông tin khai giảng</h2>
                            <p>
                                <span class="font-weight">Thời gian:</span> Thứ tư ngày 09/10/2024, am
                                <br>
                                <span class="font-weight">Thành phần/Mời dự:</span> ĐUĐH; Hội đồng ĐH; BGĐ; BCH Công đoàn ĐH; BCH Đoàn TNĐH; BCH Hội SV; Chủ tịch Hội CCB; Chủ tịch Hội CGC; Chủ tịch mạng lưới CSV; Ban TTND; Lãnh đạo các đơn vị cấp 3 trở lên. Văn phòng ĐH chuẩn bị.
                                <br>
                                <span class="font-weight">Địa điểm:</span> Hội trường C2
                            </p>
                        </div>
                        <div class="article-ad">
                            <div class="ad-box small-box ad ad-1"></div>
                            <div class="ad-box large-box ad ad-2"></div>
                        </div>
                    </div>
                    <div class="article">
                        <div class="article-content" id="article2">
                            <h2>Thông tin về HUST</h2>
                            <p>
                                Đại học Bách Khoa Hà Nội (HUST) là một trong những trường đại học hàng đầu tại Việt Nam, nổi tiếng với chất lượng đào tạo và nghiên cứu khoa học trong các lĩnh vực kỹ thuật và công nghệ. Với hơn 60 năm lịch sử, HUST không ngừng đổi mới, tiên phong trong ứng dụng công nghệ và hợp tác quốc tế để nâng cao chất lượng giáo dục.
                            </p>
                        </div>
                        <div class="article-ad">
                            <div class="ad-box small-box ad ad-3"></div>
                            <div class="ad-box large-box ad ad-4"></div>
                        </div>
                    </div>
                    <div class="article">
                        <div class="article-content" id="article3">
                            <h2>Công ty quan tâm</h2>
                            <p>Hiện tại chưa có ạ :D</p>
                        </div>
                        <div class="article-ad">
                            <div class="ad-box small-box ad ad-5"></div>
                            <div class="ad-box large-box ad ad-6"></div>
                        </div>
                    </div>
                    `;
                    navContent.innerHTML = `
                        <ul>
                            <li>
                                <a href="#article1">Thông tin khai giảng</a>
                            </li>
                            <li>
                                <a href="#article2">Thông tin về HUST</a>
                            </li>
                            <li>
                                <a href="#article3">Công ty quan tâm</a>
                            </li>
                        </ul>
                    `;
                }
            });
        });
