// Service Selection JavaScript for Uppsy Digital

document.addEventListener('DOMContentLoaded', function() {
    let selectedService = null;
    let serviceDetails = {};
    
    // Service selection logic
    const serviceCards = document.querySelectorAll('.service-card');
    const nextStep1Btn = document.getElementById('next-step-1');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');
    const successMessage = document.getElementById('success-message');
    
    // Progress bar elements
    const progressBar = document.getElementById('progress-bar');
    
    // Service details content
    const serviceDetailsContent = document.getElementById('service-details-content');
    
    // Service selection
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selection from all cards
            serviceCards.forEach(c => c.classList.remove('selected'));
            
            // Add selection to clicked card
            this.classList.add('selected');
            
            // Store selected service
            selectedService = this.getAttribute('data-service');
            
            // Enable next button
            nextStep1Btn.disabled = false;
            nextStep1Btn.classList.remove('disabled:bg-gray-400', 'disabled:cursor-not-allowed');
        });
    });
    
    // Step 1 to Step 2
    nextStep1Btn.addEventListener('click', function(e) {
        e.preventDefault();
        if (selectedService) {
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
            updateProgressBar(66);
            loadServiceDetails(selectedService);
            updateProgressSteps(2);
            // Scroll to top of the page smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // Step 2 navigation
    document.getElementById('prev-step-2').addEventListener('click', function(e) {
        e.preventDefault();
        step2.classList.add('hidden');
        step1.classList.remove('hidden');
        updateProgressBar(33);
        updateProgressSteps(1);
        // Scroll to top of the page smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.getElementById('next-step-2').addEventListener('click', function(e) {
        e.preventDefault();
        collectServiceDetails();
        step2.classList.add('hidden');
        step3.classList.remove('hidden');
        updateProgressBar(100);
        updateProgressSteps(3);
        populateServiceSummary();
        // Scroll to top of the page smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Step 3 navigation
    document.getElementById('prev-step-3').addEventListener('click', function(e) {
        e.preventDefault();
        step3.classList.add('hidden');
        step2.classList.remove('hidden');
        updateProgressBar(66);
        updateProgressSteps(2);
        // Scroll to top of the page smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Form submission
    document.getElementById('quote-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form verilerini topla
        const formData = new FormData(this);
        const requestData = {
            id: Date.now().toString(),
            name: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company') || '',
            subject: `Hizmet Talebi: ${getServiceName(selectedService)}`,
            message: `
Seçilen Hizmet: ${getServiceName(selectedService)}
Bütçe: ${formData.get('budget') || 'Belirtilmedi'}
Ek Notlar: ${formData.get('notes') || 'Yok'}

Proje Detayları:
${formatServiceDetails()}
            `.trim(),
            timestamp: new Date().toISOString(),
            status: 'new',
            type: 'service'
        };

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span> Gönderiliyor...';
        submitBtn.disabled = true;

        // API'ye mesajı gönder
        fetch('api/messages.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                console.log('Hizmet talebi API\'ye kaydedildi:', result);
                // Başarı sayfasını göster
                step3.classList.add('hidden');
                successMessage.classList.remove('hidden');
                updateProgressBar(100);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                console.error('API kayıt hatası:', result.message);
                alert('Teklif talebi gönderilemedi. Lütfen tekrar deneyin.');
            }
        })
        .catch(error => {
            console.error('API bağlantı hatası:', error);
            alert('Bağlantı hatası. Lütfen tekrar deneyin.');
        })
        .finally(() => {
            // Submit butonunu eski haline getir
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
    
    function getServiceName(service) {
        const serviceNames = {
            influencer: 'Influencer Marketing',
            mobile: 'Mobil Uygulama',
            website: 'Web Site',
            social: 'Sosyal Medya Yönetimi',
            ads: 'Google Ads & Meta Reklamları'
        };
        return serviceNames[service] || service;
    }
    
    function formatServiceDetails() {
        if (!serviceDetails || Object.keys(serviceDetails).length === 0) {
            return 'Detay bilgisi girilmedi.';
        }
        
        let details = '';
        Object.entries(serviceDetails).forEach(([key, value]) => {
            if (value && value !== '') {
                if (Array.isArray(value) && value.length > 0) {
                    details += `${key}: ${value.join(', ')}\n`;
                } else if (!Array.isArray(value)) {
                    details += `${key}: ${value}\n`;
                }
            }
        });
        
        return details || 'Detay bilgisi girilmedi.';
    }
    
    function updateProgressBar(percentage) {
        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }
    }
    
    function updateProgressSteps(currentStep) {
        const steps = document.querySelectorAll('.w-8.h-8');
        const stepTexts = document.querySelectorAll('.text-sm.font-medium');
        
        steps.forEach((step, index) => {
            const stepNumber = index + 1;
            if (stepNumber <= currentStep) {
                step.classList.remove('bg-gray-300', 'text-gray-500');
                step.classList.add('bg-blue-600', 'text-white');
                stepTexts[index].classList.remove('text-gray-500');
                stepTexts[index].classList.add('text-blue-600');
            } else {
                step.classList.remove('bg-blue-600', 'text-white');
                step.classList.add('bg-gray-300', 'text-gray-500');
                stepTexts[index].classList.remove('text-blue-600');
                stepTexts[index].classList.add('text-gray-500');
            }
        });
    }
    
    function loadServiceDetails(service) {
        const serviceDetailsTemplates = {
            influencer: `
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Influencer Marketing Detayları</h3>
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Kampanya Türü</label>
                        <select name="campaignType" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option value="">Seçiniz</option>
                            <option value="product-launch">Ürün Lansmanı</option>
                            <option value="brand-awareness">Marka Bilinirliği</option>
                            <option value="sales-conversion">Satış Dönüşümü</option>
                            <option value="event-promotion">Etkinlik Tanıtımı</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Hedef Platform</label>
                        <div class="grid grid-cols-2 gap-4">
                            <label class="flex items-center">
                                <input type="checkbox" name="platforms" value="instagram" class="mr-2">
                                Instagram
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="platforms" value="tiktok" class="mr-2">
                                TikTok
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="platforms" value="youtube" class="mr-2">
                                YouTube
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="platforms" value="twitter" class="mr-2">
                                Twitter
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Influencer Kategorisi</label>
                        <select name="influencerCategory" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option value="">Seçiniz</option>
                            <option value="micro">Micro Influencer (1K-100K)</option>
                            <option value="macro">Macro Influencer (100K-1M)</option>
                            <option value="mega">Mega Influencer (1M+)</option>
                            <option value="celebrity">Celebrity</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Kampanya Süresi</label>
                        <select name="duration" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option value="">Seçiniz</option>
                            <option value="1-month">1 Ay</option>
                            <option value="3-months">3 Ay</option>
                            <option value="6-months">6 Ay</option>
                            <option value="12-months">12 Ay</option>
                        </select>
                    </div>
                </div>
            `,
            mobile: `
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Mobil Uygulama Detayları</h3>
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Uygulama Türü</label>
                        <select name="appType" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option value="">Seçiniz</option>
                            <option value="native">Native (iOS/Android)</option>
                            <option value="hybrid">Hybrid (React Native/Flutter)</option>
                            <option value="pwa">Progressive Web App</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                        <div class="grid grid-cols-2 gap-4">
                            <label class="flex items-center">
                                <input type="checkbox" name="platforms" value="ios" class="mr-2">
                                iOS
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="platforms" value="android" class="mr-2">
                                Android
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Uygulama Kategorisi</label>
                        <select name="category" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option value="">Seçiniz</option>
                            <option value="ecommerce">E-ticaret</option>
                            <option value="social">Sosyal Medya</option>
                            <option value="productivity">Verimlilik</option>
                            <option value="entertainment">Eğlence</option>
                            <option value="education">Eğitim</option>
                            <option value="health">Sağlık & Fitness</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Özellikler</label>
                        <div class="grid grid-cols-2 gap-4">
                            <label class="flex items-center">
                                <input type="checkbox" name="features" value="user-auth" class="mr-2">
                                Kullanıcı Girişi
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="features" value="push-notifications" class="mr-2">
                                Push Bildirimler
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="features" value="payment" class="mr-2">
                                Ödeme Sistemi
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="features" value="geolocation" class="mr-2">
                                Konum Servisleri
                            </label>
                        </div>
                    </div>
                </div>
            `,
            website: `
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Web Site Detayları</h3>
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Web Site Türü</label>
                        <select name="websiteType" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option value="">Seçiniz</option>
                            <option value="corporate">Kurumsal Web Site</option>
                            <option value="ecommerce">E-ticaret</option>
                            <option value="portfolio">Portfolyo</option>
                            <option value="blog">Blog</option>
                            <option value="landing">Landing Page</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Sayfa Sayısı</label>
                        <select name="pageCount" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option value="">Seçiniz</option>
                            <option value="1-5">1-5 Sayfa</option>
                            <option value="6-15">6-15 Sayfa</option>
                            <option value="16-30">16-30 Sayfa</option>
                            <option value="30+">30+ Sayfa</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Özellikler</label>
                        <div class="grid grid-cols-2 gap-4">
                            <label class="flex items-center">
                                <input type="checkbox" name="features" value="cms" class="mr-2">
                                İçerik Yönetim Sistemi
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="features" value="multilingual" class="mr-2">
                                Çoklu Dil Desteği
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="features" value="ecommerce" class="mr-2">
                                E-ticaret Entegrasyonu
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="features" value="booking" class="mr-2">
                                Rezervasyon Sistemi
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Tasarım Tercihi</label>
                        <select name="designStyle" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option value="">Seçiniz</option>
                            <option value="modern">Modern & Minimal</option>
                            <option value="corporate">Kurumsal</option>
                            <option value="creative">Yaratıcı & Artistik</option>
                            <option value="classic">Klasik</option>
                        </select>
                    </div>
                </div>
            `,
            social: `
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Sosyal Medya Yönetimi Detayları</h3>
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Hizmet Türü</label>
                        <select name="serviceType" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option value="">Seçiniz</option>
                            <option value="management">Hesap Yönetimi</option>
                            <option value="content">İçerik Üretimi</option>
                            <option value="strategy">Strateji Danışmanlığı</option>
                            <option value="full-service">Tam Hizmet</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Platformlar</label>
                        <div class="grid grid-cols-2 gap-4">
                            <label class="flex items-center">
                                <input type="checkbox" name="platforms" value="instagram" class="mr-2">
                                Instagram
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="platforms" value="facebook" class="mr-2">
                                Facebook
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="platforms" value="twitter" class="mr-2">
                                Twitter
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="platforms" value="linkedin" class="mr-2">
                                LinkedIn
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="platforms" value="tiktok" class="mr-2">
                                TikTok
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="platforms" value="youtube" class="mr-2">
                                YouTube
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">İçerik Sıklığı</label>
                        <select name="contentFrequency" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option value="">Seçiniz</option>
                            <option value="daily">Günlük</option>
                            <option value="3-times-week">Haftada 3 Kez</option>
                            <option value="weekly">Haftalık</option>
                            <option value="bi-weekly">İki Haftada Bir</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">İçerik Türü</label>
                        <div class="grid grid-cols-2 gap-4">
                            <label class="flex items-center">
                                <input type="checkbox" name="contentTypes" value="photos" class="mr-2">
                                Fotoğraf
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="contentTypes" value="videos" class="mr-2">
                                Video
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="contentTypes" value="stories" class="mr-2">
                                Stories
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="contentTypes" value="reels" class="mr-2">
                                Reels/TikTok
                            </label>
                        </div>
                    </div>
                </div>
            `,
            ads: `
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Reklam Yönetimi Detayları</h3>
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Reklam Platformu</label>
                        <div class="grid grid-cols-2 gap-4">
                            <label class="flex items-center">
                                <input type="checkbox" name="adPlatforms" value="google-ads" class="mr-2">
                                Google Ads
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="adPlatforms" value="facebook-ads" class="mr-2">
                                Facebook Ads
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="adPlatforms" value="instagram-ads" class="mr-2">
                                Instagram Ads
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="adPlatforms" value="youtube-ads" class="mr-2">
                                YouTube Ads
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Kampanya Hedefi</label>
                        <select name="campaignGoal" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option value="">Seçiniz</option>
                            <option value="brand-awareness">Marka Bilinirliği</option>
                            <option value="traffic">Web Sitesi Trafiği</option>
                            <option value="leads">Lead Generation</option>
                            <option value="sales">Satış Dönüşümü</option>
                            <option value="app-installs">Uygulama İndirme</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Aylık Reklam Bütçesi</label>
                        <select name="adBudget" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option value="">Seçiniz</option>
                            <option value="1000-5000">1.000₺ - 5.000₺</option>
                            <option value="5000-15000">5.000₺ - 15.000₺</option>
                            <option value="15000-30000">15.000₺ - 30.000₺</option>
                            <option value="30000+">30.000₺+</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Hedef Kitle</label>
                        <textarea name="targetAudience" rows="3" class="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Hedef kitlenizi tanımlayın (yaş, cinsiyet, ilgi alanları, konum vb.)"></textarea>
                    </div>
                </div>
            `
        };
        
        serviceDetailsContent.innerHTML = serviceDetailsTemplates[service] || '<p>Hizmet detayları yükleniyor...</p>';
    }
    
    function collectServiceDetails() {
        const form = document.querySelector('#step-2 form') || document.querySelector('#step-2');
        const inputs = form.querySelectorAll('input, select, textarea');
        
        serviceDetails = {};
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                if (!serviceDetails[input.name]) {
                    serviceDetails[input.name] = [];
                }
                if (input.checked) {
                    serviceDetails[input.name].push(input.value);
                }
            } else {
                serviceDetails[input.name] = input.value;
            }
        });
    }
    
    function populateServiceSummary() {
        const serviceSummary = document.getElementById('service-summary');
        const serviceNames = {
            influencer: 'Influencer Marketing',
            mobile: 'Mobil Uygulama',
            website: 'Web Site',
            social: 'Sosyal Medya Yönetimi',
            ads: 'Google Ads & Meta Reklamları'
        };
        
        let summaryHTML = `
            <div class="mb-4">
                <h4 class="font-semibold text-gray-900">Seçilen Hizmet:</h4>
                <p class="text-gray-700">${serviceNames[selectedService]}</p>
            </div>
        `;
        
        if (Object.keys(serviceDetails).length > 0) {
            summaryHTML += '<div class="mb-4"><h4 class="font-semibold text-gray-900">Proje Detayları:</h4><ul class="list-disc list-inside text-gray-700 space-y-1">';
            
            Object.entries(serviceDetails).forEach(([key, value]) => {
                if (value && value !== '') {
                    if (Array.isArray(value) && value.length > 0) {
                        summaryHTML += `<li>${key}: ${value.join(', ')}</li>`;
                    } else if (!Array.isArray(value)) {
                        summaryHTML += `<li>${key}: ${value}</li>`;
                    }
                }
            });
            
            summaryHTML += '</ul></div>';
        }
        
        serviceSummary.innerHTML = summaryHTML;
    }
});
