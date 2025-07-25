//скрипт для темы
/*var body=document.querySelector('body');
var theme_selector=document.querySelector('.theme');
let changeThemeButtons = document.querySelectorAll('.changeTheme'); 
changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () { // К каждой добавляем обработчик событий на клик
        let theme = this.dataset.theme; // Помещаем в переменную название темы из атрибута data-theme
        applyTheme(theme); // Вызываем функцию, которая меняет тему и передаем в нее её название
    });
});
function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `style/${themeName}.css`); // Помещаем путь к файлу темы в пустой link в head
    changeThemeButtons.forEach(button => {
        button.style.display = 'block'; // Показываем все кнопки смены темы
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; // Но скрываем кнопку для активной темы
}
let activeTheme = localStorage.getItem('theme'); // Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.

if(activeTheme === null || activeTheme === 'light') { // Если значение не записано, или оно равно 'light' - применяем светлую тему
    applyTheme('light');
} else if (activeTheme === 'dark') { // Если значение равно 'dark' - применяем темную
    applyTheme('dark');
}*/
var newsTxt=document.querySelector(".article_txt");//текст окна. пустой(пока не используется)
var newsImg=document.querySelector(".article_img");//картинка. пустая(пока не используется)
var newsContent=["some txt", "debug content", "txt3", "txt4", "txt5", "txt6"];//текстовый контент (выбор должен зависеть от id нажатой кнопки)(пока не используется)
var newsImgSrc=[];//адреса картинок (пока не используется)






//скрипт для всплывающего окна
var newsA=document.querySelectorAll(".news_card");//кнопка, которая при нажатии должна вызывать окно (их 6 штук)
var article=document.querySelector("#article_window");//окно,display = none 
var body=document.querySelector("body")
var prop=document.querySelector("#article_window_2")
newsA.forEach((item)=>{
    item.addEventListener("click", function(){
        article.classList.remove('article_content_hidden');
        article.classList.add('article_content')
        body.style.overflow="hidden";
        //пробуем более рациональный способ
        let article_content=['<img src="style/img/news/1.jpg" alt="" class="article_img"><a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><p class="article_txt">22 июня будет празднование нашего Престольного праздника - Дня Всех Святых в Земле Русской просиявших. В честь этого события мы совместно с Русской общиной подготовили интересную программу. Ждем всех жителей поселка Управленческий и не только! Мероприятие пройдет в 12:30</p>',
            '<img src="style/img/news/2.1.jpg" alt="" class="article_img"><a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><p class="article_txt">Дорогие мои!<br>С сердечной радостью поздравляю вас с Днём Святой Троицы, или Пятидесятницей!<br>Это один из самых главных праздников православных христиан — день рождения Церкви. Мы вспоминаем и заново переживаем событие, которое произошло на пятидесятый день от Воскресения Христова — сошествие на апостолов Святого Духа Божия.<br>Христос Спаситель по Своему обещанию, о котором мы знаем из Евангелия, послал в мир Святого Духа-Утешителя. И из обычных людей — простых, нерешительных, немощных — Дух соделал пламенных апостолов, которые смогли обойти весь мир и убедить его в истинности Евангелия. Так возникла Церковь Христова, которая существует до сего дня, и членами которой мы являемся.<br>На Троицу храмы принято украшать ветвями деревьев и цветами, и люди часто спрашивают, почему. Свежая зелень начала лета — это очень глубокий образ обновления человеческой души Божественной силой, вызвавшей к жизни из небытия все живое.<br>По известным словам преподобного Серафима Саровского, цель жизни христианина — стяжание Святого Духа. Для этого необходимо, прежде всего, очищение своего сердца и исправление жизни.<br>Всех вас, дорогие братия и сестры, от души поздравляю с праздником и желаю, чтобы благодать Святого Духа Утешителя укрепила нас в вере и любви, преобразила нашу жизнь, даровала нам мир и радость о Господе!</p>',
        '<img src="style/img/news/3.jpg" alt="" class="article_img"><a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><p class="article_txt">Глава Самары Иван Носков и председатель Думы городского округа Самара Алексей Дегтев вручили многодетным семьям Почетные знаки «За заслуги в воспитании детей». В этом году награды получили семьи Ольги и Андрея Моховых, Анжелики и Александра Плужниковых, Юлии и Александра Челноковых, а также Надежды Шакшиной.<br>«Сегодня мы по доброй традиции пригласили семьи, которыми наш город гордится. Благодарю каждого, кто отдает всю любовь, нежность и заботу своим детям, воспитывая их достойными гражданами нашей страны. Отдельно хочу сказать спасибо ребятам, чьи поступки и мужество, несмотря на молодой возраст, стали примером силы духа и готовности прийти на помощь другим. А их истории — это напоминание о том, что настоящая храбрость проявляется в самых искренних и бескорыстных делах», — отметил председатель Думы городского округа Самара Алексей Дегтев.</p>',
        '<img src="style/img/news/4.jpg" alt="" class="article_img"><a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><p class="article_txt">1 июня 2025 года в День защиты детей в Детском духовно-просветительском центре «Держава» в честь окончания учебного года состоялась паломническая поездка в Храм Новомучеников и исповедников Российских (п. Прибрежный), а также поход-пикник на фестивальную поляну имени Валерия Грушина.Традиционно мы завершаем учебный год совместным походом на природу. Погода нас сегодня не подвела. Мы посмотрели, послушали, побегали, попили чай, поиграли - теперь уходим на каникулы! Всем хорошего отдыха! Встречаемся в сентябре!<br>Слава Богу за всё!!!</p>',
        '<img src="style/img/news/5.jpg" alt="" class="article_img"><a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><p class="article_txt">Сегодня, 29 мая 2025 года, празднуется один из двунадесятых праздников - Вознесение Господне! Завершились 40 дней после Светлого Христова Воскресения, и наступил День, когда Воскресший Спаситель простился с Пресвятой Богородицей и апостолами и Вознесся на Небеса.<br>Вот, как о Вознесении Господнем говорил Святой праведный Иоанн Кронштадтский:<br>«Господь вознесся от нас на Небо, чтобы приготовить каждому из праведных и благочестивых людей место на Небеси, а также и нам, грешным, если обратимся и покаемся от всего сердца».<br>С Праздником!!!<br>Слава Богу за всё!</p>',
        '<img src="style/img/news/6.jpg" alt="" class="article_img"><a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><p class="article_txt">В полночь с 27 на 28 мая состоялась последняя в 2025 году Пасхальная служба с крестным ходом. Ночное богослужение было особенно праздничным и радостным. У всех присутствующих была возможность еще раз прикоснуться к праздничному торжеству и напитаться Пасхальной радостью на целый год.<br>ХРИСТОС ВОСКРЕСЕ!<br>Слава Богу за всё!!!</p>'
        ]
        
            
        
            article.innerHTML=article_content[Number(item.id)]
            var close_button=document.querySelector('.close_button');
            close_button.addEventListener('click',function(){
                article.classList.remove('article_content');
                article.innerHTML=""
                article.classList.add('article_content_hidden');
                body.style.overflow="auto";
                })
        
        
        
        
});




})
let propA=document.querySelectorAll(".news_card_2");
propA.forEach((item)=>{
    item.addEventListener("click", function(){
        prop.classList.remove('article_content_hidden');
        prop.classList.add('article_content')
        body.style.overflow="hidden";
        //пробуем более рациональный способ
        
        let propovedi_content=[
                '<a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><iframe class="video" src="https://rutube.ru/play/embed/dd823282e5c532aaab93f4b6c9239a1f/?skinColor=00cbff" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
                '<a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><video controls src=""></video>',
                '<a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><video controls src=""></video>',
                '<a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><video controls src=""></video>',
                '<a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><video controls src=""></video>',
                '<a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><video controls src=""></video>'
            ]
            
            
        
            prop.innerHTML=propovedi_content[Number(item.id)]
            var close_button=document.querySelector('.close_button');
            close_button.addEventListener('click',function(){
                prop.classList.remove('article_content');
                prop.innerHTML=""
                prop.classList.add('article_content_hidden');
                body.style.overflow="auto";
                })
        
        
        
        
        
        
});




})