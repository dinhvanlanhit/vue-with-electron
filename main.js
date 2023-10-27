
import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        headless: false, // Chạy trình duyệt mà bạn có thể thấy
        defaultViewport: false, // Mở rộng trình duyệt
        args: [
            '--proxy-server=http://156.239.50.250:3128',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.60'
        ],
        executablePath :"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    });
    const page = await browser.newPage();
    // Tùy chỉnh trình duyệt với các tùy chọn để tạo vân tay
    await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, 'language', {
            get: () => 'en-US', // Ngôn ngữ
        });
        Object.defineProperty(navigator, 'webdriver', {
            get: () => false, // Không phải là trình duyệt tự động
        });
        // Bạn có thể tùy chỉnh thêm nhiều thông tin khác tại đây

    });
    await page.setViewport({ width: 1920, height: 1080 });

    // // Mở trình duyệt và truy cập trang web
    await page.goto('https://iphey.com');
    //
    // // Làm bất kỳ thao tác nào bạn cần
    // // Ví dụ: Lấy tiêu đề của trang
    // const title = await page.title();
    // console.log('Tiêu đề trang web:', title);
    //
    // // Đóng trình duyệt
    // await browser.close();
})();
