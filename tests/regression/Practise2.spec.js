const{test,expect}=require('@playwright/test');

test("Mouse Actions",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("#nav-link-accountList").hover();
    await expect(page.locator("a[data-csa-c-slot-id='nav-link-accountList']")).toBeVisible();
    
    await page.waitForTimeout(3000);

})

test("Right click button",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("a[data-csa-c-slot-id='nav-link-accountList']").click({button:"right"});
    await page.waitForTimeout(5000);
})

test("Dialog practise ",async({page})=>{
     await page.goto("https://www.hyrtutorials.com/p/alertsdemo.html");
     page.on('dialog', async dialog=>{
         console.log(dialog.message());
         await dialog.accept("nitin");
     })
     await page.locator("#promptBox").click();
     await expect(page.locator("#output")).toHaveText("You entered text nitin in propmt popup");
     await page.waitForTimeout(3000);

})

test("Drag and Drop",async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/",{waitUntil: "domcontentloaded" });
    const frame=page.frameLocator("iframe[src*='photo-manager']");
    await frame.locator("ul#gallery li").nth(2).dragTo(frame.locator("#trash"));
    await page.waitForTimeout(3000);

})

test("File upload and download",async({page})=>{
    await page.goto("https://practice-automation.com/file-upload/");
    await page.locator("#file-upload").setInputFiles("tests/Practise1.spec.js-snapshots/sauce-demo-com-1-chromium-win32.png");
    await page.locator("#upload-btn").click();
    await expect(page.locator(".wpcf7-response-output")).toHaveText("Thank you for your message. It has been sent.");
    await page.waitForTimeout(3000);
})

test("Multi window page",async({page,context})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const pagePromise=context.waitForEvent('page');
    await page.getByRole('link',{name:"OrangeHRM, Inc"}).click();
    const newPage=await pagePromise;
    console.log(await newPage.title());
    await page.bringToFront();
    console.log(await page.title());
})

test.only("Multiple windows",async({page,context})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/#");
    const newpage=context.waitForEvent('page');
    await page.getByRole('link',{name:'Free Access to InterviewQues/ResumeAssistance/Material'}).click();
    const childPage=await newpage;
    const text=await childPage.locator(".im-para.red").textContent();
    const text1=text.split("@")[1];
    const text2=text1.split(".com")[0];
    console.log(await text2.trim());
    await page.bringToFront();
    await page.locator("#username").fill(text2);
    await page.locator("#password").fill("Learning@830$3mK2");

    page.on('dialog', async dialog => {
    console.log('Dialog handled:', dialog.message())
    await dialog.accept()  // auto clicks "Okay"
       })
       
    await page.locator("input[value='user']~ span.checkmark").click();
    await page.locator("select[data-style='btn-info']").selectOption({value:"consult"});
    await page.getByRole("checkbox",{name:'I Agree to the terms and conditions'}).click();
    await page.getByRole("button",{name:'Sign In'}).click();
    // await page.waitForTimeout(5000);
    await page.waitForLoadState('networkidle')

    })




