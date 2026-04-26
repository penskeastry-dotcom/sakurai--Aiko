document.addEventListener('DOMContentLoaded', function() {
    // 1. 获取汉堡菜单按钮元素
    const toggleButton = document.querySelector('.menu-toggle');
    // 2. 获取导航列表元素 (使用您在 HTML 中设置的 ID: main-nav-list)
    const navList = document.getElementById('main-nav-list');
    
    // 确保这两个元素都存在于页面上
    if (toggleButton && navList) {
        // 监听按钮的点击事件
        toggleButton.addEventListener('click', function() {
            // 切换 CSS 类名 'active'。CSS 会根据这个类名来显示/隐藏菜单
            navList.classList.toggle('active');
            
            // 辅助功能 (Accessibility) 优化：切换按钮的展开状态
            const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
});

// 语言包，包含所有文本的翻译
const translations = {
    "tw": { // 台语
        "site_title": "奢寵之美 | 美容院",
        "brand_name": "奢寵之美",
        "nav_home": "首頁",
        "nav_services": "服務項目",
        "nav_about": "關於我們",
        "nav_contact": "聯絡我們",
        "nav_booking_cta": "立即預約",
        "hero_title": "煥發由內而外的光彩",
        "hero_subtitle": "為您量身定制的奢華護膚體驗。",
        "hero_cta": "立即預約",
        "section_title_services": "我們的服務",
        "service_face_care_title": "面部護理",
        "service_face_care_desc": "使用頂級產品，為您帶來深層滋養與修護。",
        "service_body_care_title": "身體護理",
        "service_body_care_desc": "舒緩身心，喚醒肌膚活力。",
        "service_nail_art_title": "美甲美睫",
        "service_nail_art_desc": "精緻細節，打造您的完美指尖。",
        "section_title_about": "關於我們",
        "about_desc": "我們致力於提供最專業的美容服務，讓每一位顧客都能在這裡找到真正的放鬆與美麗。我們的專業團隊擁有多年經驗，確保您獲得最頂級的護理。",
        "section_title_contact": "聯絡我們",
        "contact_address_label": "地址",
        "contact_address_value": "上海市长宁区忠孝東路四段216巷",
        "contact_phone_label": "電話",
        "contact_phone_value": "+852 5948 6027",
        "contact_hours_label": "營業時間",
        "contact_hours_value": "週一至週五 10:00 - 20:00",
        "booking_title": "線上預約",
        "form_name_placeholder": "您的姓名",
        "form_phone_placeholder": "您的電話",
        "form_select_option_default": "選擇服務項目",
        "form_submit_btn": "提交預約",
        "copyright_text": "© 2021 奢寵之美. 保留所有權利。"
    },
    "jp": { // 日语
        "site_title": "奢宠之美 | 美容院",
        "brand_name": "奢宠之美",
        "nav_home": "首页",
        "nav_services": "服务项目",
        "nav_about": "关于我们",
        "nav_contact": "联系我们",
        "nav_booking_cta": "立即预约",
        "hero_title": "焕发由内而外的光彩",
        "hero_subtitle": "为您量身定制的奢华护肤体验。",
        "hero_cta": "立即预约",
        "section_title_services": "我们的服务",
        "service_face_care_title": "面部护理",
        "service_face_care_desc": "使用顶级产品，为您带来深层滋养与修护。",
        "service_body_care_title": "身体护理",
        "service_body_care_desc": "舒缓身心，唤醒肌肤活力",
        "service_nail_art_title": "美甲美睫",
        "service_nail_art_desc": "精致细节，打造您的完美指尖。",
        "section_title_about": "关于我们",
        "about_desc": "我们致力于提供最专业的美容服务，让每一位顾客都能在这里找到真正的放松与美丽。我们的专业团队拥有多年经验，确保您获得最顶级的护理。",
        "section_title_contact": "联系我们",
        "contact_address_label": "地址",
        "contact_address_value": "上海市长宁区忠孝东路四段216巷",
        "contact_phone_label": "电话",
        "contact_phone_value": "+852 5948 6027",
        "contact_hours_label": "营业时间",
        "contact_hours_value": "周一至周五 10:00 - 20:00",
        "booking_title": "线上预约",
        "form_name_placeholder": "您的姓名",
        "form_phone_placeholder": "您的电话",
        "form_select_option_default": "选择服务项目",
        "form_submit_btn": "提交预约",
        "copyright_text": "© 2021 奢宠之美. 保留所有权利。"
    }
};

const defaultLanguage = 'jp'; // 默认语言为台语
let currentLanguage = localStorage.getItem('currentLang') || defaultLanguage;

// 切换语言函数
function setLanguage(lang) {
    // 遍历所有有 data-lang-key 属性的元素
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            // 根据元素类型设置文本
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // 更新当前语言，并保存到本地存储
    currentLanguage = lang;
    localStorage.setItem('currentLang', lang);

    // 更新按钮的 active 状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
}

// 页面加载时设置默认语言或上次选择的语言
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);

    // 绑定语言切换按钮的点击事件
    document.getElementById('lang-tw').addEventListener('click', () => {
        setLanguage('tw');
    });
    document.getElementById('lang-jp').addEventListener('click', () => {
        setLanguage('jp');
    });
    // 在页面加载后显示语言切换按钮
    document.querySelector('.language-switcher').classList.remove('hidden-by-default');

});






