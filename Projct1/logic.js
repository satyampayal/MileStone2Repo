const createBlogBtn = document.querySelector('#createBlog');
const hideOrShowBtn = document.querySelector('.createBlogSection')
//console.log(createBlog);
const fillBlogForm = document.querySelector('.fillBlogForm');
const blogSection = document.querySelector('.blogContainer');
function hideOrShow() {
   // console.log(hideOrShowBtn);
    hideOrShowBtn.classList.toggle('hideOrShow');
}
//getDataFromLS
var GlobaldataFromLs;
const getDataFromLS = () => {
    const dataFromLs = localStorage.getItem('BlogDatapro1');
    GlobaldataFromLs = JSON.parse(dataFromLs);
    // console.log();
    if (GlobaldataFromLs.length > 0) {
        blogSection.innerHTML = "";
    }

    GlobaldataFromLs.map((item) => {
        //console.log(item.url);
        //Make Blog Post Card
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog_card')
        blogCard.innerHTML = `
        <img src=${item.url} alt="no image found" class="blogCardIMG">
        <h1 class="blogCardTitle">Blog Title:${item.title}</h1>
        <h2 class="blogCardDesc">Blog Descripation:${item.desc}</h2>
        <button class="blogCardBtn" type="button">Read</button>
        

        `
        // apen Blog Card in BlogSection
        blogSection.appendChild(blogCard);
        //Particular Blog Details
        const particularBlog = document.querySelector('.blogCardBtn');
      //  console.log(particularBlog);
    

    })
    // console.log(GlobaldataFromLs)
}
// Delte post particular
const deletPOST = () => {
}
// submit handler....
var lsDataArray = [];
const submitHandler = (e) => {
    try {
        e.preventDefault();
        const url = e.target.url.value;
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        const write = e.target.write.value;
        // local storage data define
        const data = {
            url,
            title,  // mena inki value iss liye nahi ikhi because of 
            desc,   //ES6 is very powerfull it take automatically above define value respectively
            write
        };
        // after submit form clean 
        e.target.url.value = '';
        e.target.title.value = '';
        e.target.desc.value = '';
        e.target.write.value = '';
        lsDataArray.push(data)
        localStorage.setItem("BlogDatapro1", JSON.stringify(lsDataArray))
        //call getDataFromLS
        getDataFromLS();
    } catch (error) {
        console.log(error)
    }

}
// form subit handler
fillBlogForm.addEventListener('submit', submitHandler)
getDataFromLS();
