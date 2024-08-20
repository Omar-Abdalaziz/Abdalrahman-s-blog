$(document).ready(function() {
    const postsPerPage = 6;
    let currentPage = 1;
    const posts = [
        { id: 1, title: "عنوان المقال 1", excerpt: "هذا نص تجريبي للمقال 1.", image: "https://img.freepik.com/free-vector/young-boy-using-tablet-with-education-icons_1308-80697.jpg?t=st=1724086819~exp=1724090419~hmac=65945d0575fbd98c3d4661e68c417b9b6d09bcc71cc6ce07f3bf90a9cc5f8683&w=996", category: "تكنولوجيا" },
        { id: 2, title: "عنوان المقال 2", excerpt: "هذا نص تجريبي للمقال 2.", image: "https://img.freepik.com/free-vector/girl-surrounded-by-germs_1308-129624.jpg?t=st=1724086903~exp=1724090503~hmac=3232a85043ffbc8e5cdd1acb88d928324a9bec6d96047f8880967a0fee77def2&w=740", category: "صحة" },
        { id: 3, title: "عنوان المقال 3", excerpt: "هذا نص تجريبي للمقال 3.", image: "https://img.freepik.com/free-vector/mexican-traditional-culture-icon-cartoon_18591-52736.jpg?t=st=1724086990~exp=1724090590~hmac=dfbf1a81c74229a9c4b1951c223d3961c33cad7d70df84e542adef06c1ab0c2f&w=996", category: "ثقافة" },
        { id: 4, title: "عنوان المقال 4", excerpt: "هذا نص تجريبي للمقال 4.", image: "https://img.freepik.com/free-vector/box-full-sport-equipments_1308-37207.jpg?t=st=1724086750~exp=1724090350~hmac=3919eb941cc5d590b66d5e009b749ffbfa7a22bd4695ce8c5e2570ec3fa93897&w=996", category: "رياضة" },
        { id: 5, title: "عنوان المقال 5", excerpt: "هذا نص تجريبي للمقال 5.", image: "https://img.freepik.com/free-vector/cute-robot-working-laptop-cartoon-vector-icon-illustration-science-technology-isolated-flat_138676-11815.jpg?t=st=1724087055~exp=1724090655~hmac=9957ed421a6afb0436f0dd61a3771e4378bb162a487785943b83b192d3f19b0e&w=740", category: "تكنولوجيا" },
        { id: 6, title: "عنوان المقال 6", excerpt: "هذا نص تجريبي للمقال 6.", image: "https://img.freepik.com/free-vector/hand-drawn-world-book-day-illustration_23-2151351975.jpg?t=st=1724087181~exp=1724090781~hmac=d0a367ce77bd140a8cd93801d5ba7dfb01abebcb574f78bc219252560cc29ff8&w=740", category: "أدب" },
        { id: 7, title: "عنوان المقال 7", excerpt: "هذا نص تجريبي للمقال 7.", image: "https://img.freepik.com/free-vector/flat-lawyers-day-illustration_23-2149218386.jpg?t=st=1724087275~exp=1724090875~hmac=989f0189a04cf494fee47d081e3f38782edc7c1380d44dba0e864f33f0e3aac4&w=740", category: "سياسة" },
        { id: 8, title: "عنوان المقال 8", excerpt: "هذا نص تجريبي للمقال 8.", image: "https://img.freepik.com/free-vector/business-success-financial-growth_1308-170863.jpg?t=st=1724087356~exp=1724090956~hmac=766a4f0e32a0b4ccba35bd2900bd9df4a495cb854c162931ca1cc8bee63ff190&w=740", category: "اقتصاد" },
        { id: 9, title: "عنوان المقال 9", excerpt: "هذا نص تجريبي للمقال 9.", image: "https://img.freepik.com/free-vector/font-design-word-art-craft-with-boy-painting_1308-81942.jpg?t=st=1724087398~exp=1724090998~hmac=01a34caedd5c243cb9930677462a07c6a59881dc8519850697798d7fd3a1a927&w=740", category: "فن" },
    ];

    const categories = [
        { name: "تكنولوجيا", icon: "fas fa-laptop-code" },
        { name: "صحة", icon: "fas fa-heartbeat" },
        { name: "ثقافة", icon: "fas fa-book" },
        { name: "رياضة", icon: "fas fa-football-ball" },
        { name: "أدب", icon: "fas fa-feather-alt" },
        { name: "سياسة", icon: "fas fa-landmark" },
        { name: "اقتصاد", icon: "fas fa-chart-line" },
        { name: "فن", icon: "fas fa-palette" }
    ];

    function renderPosts(container, posts, isFeatured = false) {
        container.empty();
        posts.forEach(post => {
            const postElement = `
                <div class="post-card bg-white rounded-lg shadow-md overflow-hidden fade-in">
                    <img src="${post.image}" alt="${post.title}" class="w-full">
                    <div class="p-4">
                        <span class="text-sm text-blue-600 font-semibold">${post.category}</span>
                        <h3 class="text-xl font-semibold mb-2">${post.title}</h3>
                        <p class="text-gray-600 mb-4">${post.excerpt}</p>
                        <a href="#" class="text-blue-600 hover:underline" data-post-id="${post.id}">اقرأ المزيد</a>
                    </div>
                </div>
            `;
            container.append(postElement);
        });

        if (isFeatured) {
            container.find('.post-card').addClass('featured-post');
        }
    }

    function renderCategories() {
        const categoriesContainer = $('#categories-container');
        categories.forEach(category => {
            const categoryElement = `
                <div class="category-card bg-white rounded-lg shadow-md p-4 text-center cursor-pointer hover:bg-blue-100 transition duration-300">
                    <i class="${category.icon} text-3xl text-blue-600 mb-2"></i>
                    <h3 class="font-semibold">${category.name}</h3>
                </div>
            `;
            categoriesContainer.append(categoryElement);
        });
    }

    function renderPagination() {
        const totalPages = Math.ceil(posts.length / postsPerPage);
        const paginationContainer = $('#pagination');
        paginationContainer.empty();
        
        const prevButton = $('<button id="prev-page" class="mr-2">السابق</button>');
        const nextButton = $('<button id="next-page" class="ml-2">التالي</button>');

        prevButton.prop('disabled', currentPage === 1);
        nextButton.prop('disabled', currentPage === totalPages);

        paginationContainer.append(prevButton);
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = $(`<button class="mx-1 ${i === currentPage ? 'bg-blue-700' : ''}">${i}</button>`);
            pageButton.on('click', function() {
                currentPage = i;
                renderRecentPosts();
            });
            paginationContainer.append(pageButton);
        }
        paginationContainer.append(nextButton);

        $('#prev-page').on('click', function() {
            if (currentPage > 1) {
                currentPage--;
                renderRecentPosts();
            }
        });

        $('#next-page').on('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                renderRecentPosts();
            }
        });
    }

    function renderRecentPosts() {
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const currentPosts = posts.slice(startIndex, endIndex);
        renderPosts($('#recent-posts-container'), currentPosts);
        renderPagination();
    }

    function initializeSearch() {
        $('#search-form').on('submit', function(e) {
            e.preventDefault();
            const searchTerm = $('#search-input').val().toLowerCase();
            const filteredPosts = posts.filter(post => 
                post.title.toLowerCase().includes(searchTerm) || 
                post.excerpt.toLowerCase().includes(searchTerm) ||
                post.category.toLowerCase().includes(searchTerm)
            );
            renderPosts($('#recent-posts-container'), filteredPosts);
            renderPagination();
        });
    }

    function initializeMobileMenu() {
        $('#menu-toggle').on('click', function() {
            $('#mobile-menu').toggleClass('show');
        });
    }

    function initializeContactForm() {
        $('#contact-form').on('submit', function(e) {
            e.preventDefault();
            // ارسال البيانات الى الخادم
            alert('شكراً لتواصلك معنا! سنرد عليك قريباً.');
            this.reset();
        });
    }

    function initializePostViewers() {
        $(document).on('click', '.post-card a', function(e) {
            e.preventDefault();
            const postId = $(this).data('post-id');
            const post = posts.find(p => p.id === postId);
            if (post) {
                alert(`عنوان المقال: ${post.title}\n\nمحتوى المقال: ${post.excerpt}\n\nهنا يمكنك إضافة المزيد من التفاصيل أو فتح صفحة مقال كاملة.`);
            }
        });
    }
    
    function showLoader() {
        $('#loader').removeClass('hidden');
    }

    function hideLoader() {
        $('#loader').addClass('fade-out');
        setTimeout(() => {
            $('#loader').addClass('hidden').removeClass('fade-out');
        }, 500);
    }

    function showPostModal(post) {
        const modalContent = `
            <h2 class="text-2xl font-bold mb-4">${post.title}</h2>
            <img src="${post.image}" alt="${post.title}" class="w-full mb-4 rounded-lg">
            <p class="text-gray-600 mb-4">${post.excerpt}</p>
            <p class="text-sm text-blue-600 font-semibold">${post.category}</p>
        `;
        $('#modal-content').html(modalContent);
        $('#post-modal').removeClass('hidden');
    }

    function initializePostViewers() {
        $(document).on('click', '.post-card a', function(e) {
            e.preventDefault();
            const postId = $(this).data('post-id');
            const post = posts.find(p => p.id === postId);
            if (post) {
                showPostModal(post);
            }
        });

        $('#close-modal').on('click', function() {
            $('#post-modal').addClass('hidden');
        });

        $(document).on('click', function(e) {
            if ($(e.target).is('#post-modal')) {
                $('#post-modal').addClass('hidden');
            }
        });
    }

    // تعديل الدالة الرئيسية
    $(window).on('load', function() {
        showLoader();
        setTimeout(() => {
            hideLoader();
            renderCategories();
            renderPosts($('#featured-posts-container'), posts.slice(0, 3), true);
            renderRecentPosts();
            initializeSearch();
            initializeMobileMenu();
            initializeContactForm();
            initializePostViewers();
        }, 1500); // تأخير لمدة 1.5 ثانية لإظهار اللودر
    });

    renderPosts($('#featured-posts-container'), posts.slice(0, 3), true);
    renderRecentPosts();
    initializeSearch();
    initializeMobileMenu();
    initializeContactForm();
    initializePostViewers();
});