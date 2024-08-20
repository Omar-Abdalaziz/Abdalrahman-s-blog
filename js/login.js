$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); // لمنع إرسال النموذج الافتراضي

        // الحصول على القيم المدخلة
        var email = $('#email').val();
        var password = $('#password').val();

        // التحقق من صحة البيانات
        if (email === '' || password === '') {
            alert('يرجى ملء جميع الحقول');
        } else {
            // هنا يمكن إضافة كود للتحقق من بيانات المستخدم
            alert('تم تسجيل الدخول بنجاح');
        }
    });
});