console.log('hello how are you ms.hannah baker');

let accordian = document.getElementById('accordion1');



let xhr = new XMLHttpRequest();

xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=d0c0307dbefb285051b4733d492badb7&country=in&lang=en`, true);

xhr.onload = function () {

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let html ="";
        articles.forEach(function(elements,index) {

            html += `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    ${elements.title}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                data-bs-parent="#accordion1">
                <div class="accordion-body">
                  ${elements.content}<a href="${elements.url}" target="__blank"> Read more</a>
                </div>
            </div>
        </div>`;    
            
        });
        accordian.innerHTML=html;
    }
    else {
        console.log('error occured');
    }
}
xhr.send();