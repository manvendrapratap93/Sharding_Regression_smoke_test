const{test,expect}=require('@playwright/test')

test(" first test",async({page})=>{
     await page.goto("https://www.google.com/");
     await page.locator(".gLFyf").fill("playwright");
     await page.waitForSelector("ul[jsname='bw4e9b'] li");
     const allcounts=await page.locator("ul[jsname='bw4e9b'] li");
     console.log("Total counts :"+await allcounts.count());
     for(let i=0;i<await allcounts.count();i++){
        const optionText=(await allcounts.nth(i).innerText()).trim();
        console.log(optionText);
        if(optionText.includes("playwright interview questions")){
           await allcounts.nth(i).click();
           break;
        }}
        await page.waitForTimeout(3000);
    })

test("second test",async({browser})=>{
   const context=await browser.newContext();
   const page=  await context.newPage();
   await page.goto("https://www.easemytrip.com/");
   await page.locator("#rtrip").click();
   await page.locator("#frmcity").click();
   await page.locator("#a_FromSector_show").pressSequentially("America ");
//    await page.waitForSelector('div[id="fromautoFill"] ul li');
//    const allOptions=page.locator('div[id="fromautoFill"] ul li');
   const allOptions = page.locator('div[id="fromautoFill"] ul li');
   await allOptions.first().waitFor({ state: "visible" });
   console.log("Total counts :"+await allOptions.count());
   for(let i=0;i<await allOptions.count();i++){
      const option=((await allOptions.nth(i).innerText())).trim();
      console.log(option);
      if(option.includes("Fitiuta Airport")){
            await allOptions.nth(i).click();
            break;
   }}
   await page.locator("#a_Editbox13_show").pressSequentially("Delhi");
//    await page.waitForSelector('div[id="toautoFill"] ul li');
//    const allOptions2=page.locator('div[id="toautoFill"] ul li');
  await page.waitForSelector('div[id="toautoFill"] ul li');

const allOptions2 = page.locator('div[id="toautoFill"] ul li');
   console.log("Total counts :"+await allOptions2.count());
   for(let i=0;i<await allOptions2.count();i++){
      const option2=((await allOptions2.nth(i).innerText())).trim();
      console.log(option2);
        if(option2.includes("Indira Gandhi International Airport")){
            await allOptions2.nth(i).click();
            break;
        }
   }

   const monthandyear="Dec 2026";
   const date="15";
   while(true){
       const monthandyearText=await page.locator('div[id="dvcalendar"] div[class="month2"]').first().textContent();
       if(monthandyearText.trim()===monthandyear){
           break;
       }
       await page.locator('div[class="month-sec"] div[class="month3"]').click();
   }
    const dates=page.locator('#dvcalendar li[style*="visibility:show"]:not([class="old-dt"])');
    for(let i=0;i<await dates.count();i++){
        if((await dates.nth(i).textContent()).trim()===date){
            await dates.nth(i).click();
            break;
        }
    }
   const rmonthandyear="Dec 2026";
   const rdate="25";
   while(true){
       const rmonthandyearText=await page.locator('div[id="dvcalendar"] div[class="month2"]').first().textContent();
       if(rmonthandyearText.trim()===rmonthandyear){
           break;
       }
       await page.locator('div[class="month-sec"] div[class="month3"]').click();
   }
    const rdates=page.locator('#dvcalendar li[style*="visibility:show"]:not([class="old-dt"])');
    for(let i=0;i<await rdates.count();i++){
        if((await rdates.nth(i).textContent()).trim()===rdate){
            await rdates.nth(i).click();
            break;
        }
    }
    await page.locator("#myFunction4").click();
    const traveller=await page.locator(".flex-adltcol");

    for(let i=1;i<=4;i++){
        const text=await traveller.nth(i).innerText();
        if(text.includes("Adults")){
            await traveller.nth(i).locator('#add').click();
            await page.waitForTimeout(2000);
        }
    } 

    for(let i=1;i<=3;i++){
        const text=await traveller.nth(i).innerText();
        if(text.includes("Children")){
            await traveller.nth(i).locator('#add').click();
            
        }
    } 

    for(let i=1;i<=2;i++){
        const text=await traveller.nth(i).innerText();
        if(text.includes("Infant")){
            await traveller.nth(i).locator('#add').click();
            await page.waitForTimeout(2000);
        }
    } 

   await page.getByRole('link', { name: 'Done' }).click();
   await page.getByRole('button', { name: 'Search' }).click();

   await page.waitForTimeout(3000);

})

test("third test",async({page})=>{
   await page.goto("https://vinothqaacademy.com/drop-down/");
   await page.locator("#simpleDropdown").selectOption({value:"LD"});
   await page.locator("#FromAccount").selectOption({value:"NRI"});
   await page.locator('select[name="programming"]').selectOption({value:"JAVA"},{value:"RUBY"});
   await page.waitForTimeout(5000);

})



