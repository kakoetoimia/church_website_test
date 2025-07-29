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
        let article_content=['<img src="style/img/news/1.jpg" alt="" class="article_img"><a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><p class="article_txt">22 ИЮНЯ 2025 ГОДА В НАШЕМ ХРАМЕ СОСТОЯЛСЯ ПРЕСТОЛЬНЫЙ ПРАЗДНИК, ГЛАВНЫЙ ПРАЗДНИК ХРАМА, НАША МАЛАЯ ПАСХА.<br>ВО ВТОРОЕ ВОСКРЕСЕНЬЕ ПОСЛЕ ТРОИЦЫ РУССКАЯ ПРАВОСЛАВНАЯ ЦЕРКОВЬ ВСПОМИНАЕТ СОБОР ВСЕХ СВЯТЫХ, В ЗЕМЛЕ РУССКОЙ ПРОСИЯВШИХ.<br>ГОСПОДЬ БЛАГОСЛОВИЛ РУССКУЮ ЗЕМЛЮ ТЕМ, ЧТО ДАРОВАЛ НА ЭТОЙ ЗЕМЛЕ МНОГО СВЯТЫХ ИЗ СРЕДЫ РУССКИХ ЛЮДЕЙ. ЭТО ПАМЯТЬ ОБО ВСЕХ НАШИХ СВЯТЫХ ПРЕДКАХ, КОТОРЫЕ НЕПРЕСТАННО МОЛЯТСЯ И О НАС, И О НАШЕЙ РУССКОЙ ЗЕМЛЕ.<br>УЖЕ ВТОРОЙ ГОД В ЧЕСТЬ ПРЕСТОЛЬНОГО ПРАЗДНИКА НАСТОЯТЕЛЕМ ХРАМА ОТЦОМ АНДРЕЕМ МОХОВЫМ ОРГАНИЗУЕТСЯ КРЕСТНЫЙ ХОД ПО ПОСЕЛКУ УПРАВЛЕНЧЕСКИЙ. ПО СЛОВАМ ОТЦА АНДРЕЯ, КРЕСТНЫЙ ХОД - ЭТО НЕ ПРОСТО ХОДЬБА! ЭТО, ВО-ПЕРВЫХ, МОЛИТВЕННОЕ ШЕСТВИЕ, ВО ВРЕМЯ КОТОРОГО МЫ МОЛИМСЯ ЗА НАШУ РОДНУЮ ЗЕМЛЮ И ЗА ВСЕХ, КТО НА НЕЙ ЖИВЕТ, ЧТОБЫ ГОСПОДЬ БЛАГОСЛОВИЛ НАШУ ЖИЗНЬ. А ВО-ВТОРЫХ, ЭТО ПРОПОВЕДЬ ПРАВОСЛАВНОЙ ВЕРЫ ДЛЯ ВСЕХ ТЕХ НАШИХ ЗЕМЛЯКОВ, КТО ПОКА ЕЩЕ НЕ НАШЁЛ ДОРОГИ К ЦЕРКВИ И БОГУ! ОЧЕНЬ ВАЖНО, ЧТО В ЭТОМ ГОДУ ЧИСЛЕННОСТЬ УЧАСТНИКОВ, МОЛИТВЕННИКОВ КРЕСТНОГО ХОДА ЗНАЧИТЕЛЬНО УВЕЛИЧИЛАСЬ. А ЭТО ЗНАЧИТ, ЧТО ЗАДАЧИ, ПОСТАВЛЕННЫЕ НАШИМ НАСТОЯТЕЛЕМ, С БОЖИЕЙ ПОМОЩЬЮ ВЫПОЛНЯЮТСЯ, ЧТО НЕ МОЖЕТ НЕ РАДОВАТЬ НАС!<br>ЕЩЕ ОДНИМ ПОДАРКОМ ОТ ОТЦА АНДРЕЯ БЫЛ ПРИЕЗД САМАРСКОЙ РУССКОЙ ОБЩИНЫ, КОТОРАЯ ДЛЯ ПРИХОЖАН ХРАМА, ГОСТЕЙ И ЖИТЕЛЕЙ ПОСЕЛКА УПРАВЛЕНЧЕСКИЙ ОРГАНИЗОВАЛА ФЕСТИВАЛЬ «РУССКИЙ ДВОР» С ПЕСНЯМИ, ИГРАМИ, ТАНЦАМИ.<br>ОЧЕНЬ РАДОСТНО ПРОВЕЛИ СЕГОДНЯШНИЙ ДЕНЬ: МОЛИЛИСЬ, ПЕЛИ, ИГРАЛИ, ТАНЦЕВАЛИ, ВОДИЛИ ХОРОВОДЫ И ПИЛИ ЧАЙ ИЗ САМОВАРА НА ДРОВАХ С ПИРОЖКАМИ, БАРАНКАМИ И КОНФЕТАМИ!<br>НАШ ПРАЗДНИК УДАЛСЯ!<br>СЛАВА БОГУ ЗА ВСЁ!!!</p>',
            '<img src="style/img/news/2.1.jpg" alt="" class="article_img"><a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><p class="article_txt">Дорогие мои!<br>С сердечной радостью поздравляю вас с Днём Святой Троицы, или Пятидесятницей!<br>Это один из самых главных праздников православных христиан — день рождения Церкви. Мы вспоминаем и заново переживаем событие, которое произошло на пятидесятый день от Воскресения Христова — сошествие на апостолов Святого Духа Божия.<br>Христос Спаситель по Своему обещанию, о котором мы знаем из Евангелия, послал в мир Святого Духа-Утешителя. И из обычных людей — простых, нерешительных, немощных — Дух соделал пламенных апостолов, которые смогли обойти весь мир и убедить его в истинности Евангелия. Так возникла Церковь Христова, которая существует до сего дня, и членами которой мы являемся.<br>На Троицу храмы принято украшать ветвями деревьев и цветами, и люди часто спрашивают, почему. Свежая зелень начала лета — это очень глубокий образ обновления человеческой души Божественной силой, вызвавшей к жизни из небытия все живое.<br>По известным словам преподобного Серафима Саровского, цель жизни христианина — стяжание Святого Духа. Для этого необходимо, прежде всего, очищение своего сердца и исправление жизни.<br>Всех вас, дорогие братия и сестры, от души поздравляю с праздником и желаю, чтобы благодать Святого Духа Утешителя укрепила нас в вере и любви, преобразила нашу жизнь, даровала нам мир и радость о Господе!</p>',
        '<img src="style/img/news/3.jpg" alt="" class="article_img"><a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><p class="article_txt">Глава Самары Иван Носков и председатель Думы городского округа Самара Алексей Дегтев вручили многодетным семьям Почетные знаки «За заслуги в воспитании детей». В этом году награды получили семьи Ольги и Андрея Моховых, Анжелики и Александра Плужниковых, Юлии и Александра Челноковых, а также Надежды Шакшиной.<br>«Сегодня мы по доброй традиции пригласили семьи, которыми наш город гордится. Благодарю каждого, кто отдает всю любовь, нежность и заботу своим детям, воспитывая их достойными гражданами нашей страны. Отдельно хочу сказать спасибо ребятам, чьи поступки и мужество, несмотря на молодой возраст, стали примером силы духа и готовности прийти на помощь другим. А их истории — это напоминание о том, что настоящая храбрость проявляется в самых искренних и бескорыстных делах», — отметил председатель Думы городского округа Самара Алексей Дегтев.</p>',
        '<img src="style/img/news/4.1.jpg" alt="" class="article_img"><a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><p class="article_txt">Сегодня, 24 июля, Православная церковь празднует память блаженной боголюбивой равноапостольной княгини Ольги. А прихожане Храма Всех святых, в земле Русской просиявших, ещё и поздравляют с днем рождения и с Днем Ангела матушку Ольгу Мохову.<br>Да поможет матушке Господь и Небесная заступница во всех ее благих начинаниях. Благодати Божией, благоденствия, многая и благая лета матушке Ольге и всем именинникам!!!<br>Пусть помощь великой святой жены Ольги, обладавшей огромной силой духа и невероятным обаянием и мудростью, пребывает со всеми нами!!!<br>Аминь!<br>Слава Богу за все!</p>',
        '<img src="style/img/news/5.jpg" alt="" class="article_img"><a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><p class="article_txt">Настоятель Храма Всех святых, в земле Русской просиявших, отец Андрей Мохов:<br>Дорогие мои!<br>От всей души поздравляю вас с великим православным праздником – Днём Казанской иконы Божией Матери! Это один из самых любимых и почитаемых образов Богородицы, который олицетворяет силу веры, надежду и любовь к Богу.<br>Эта икона стала символом победы над врагом, защиты и помощи в трудных жизненных ситуациях. Именно благодаря ее чудотворной силе Россия смогла преодолеть многие беды и опасности.<br>В этот светлый день хочу пожелать вам крепкого здоровья, семейного благополучия и успехов во всех делах и начинаниях. Пусть Казанская икона Богородицы оберегает вас и ваших близких от всех невзгод и испытаний, дарит радость, утешение и вдохновение на каждый день.<br>Еще раз поздравляю вас с этим замечательным праздником и желаю мира, добра, любви и счастья!</p>',
        '<img src="style/img/news/6.1.jpg" alt="" class="article_img"><a onclick="event.preventDefault();" class="close_button"><img src="style/img/Union (1).png" alt=""></a><p class="article_txt">Настоятель Храма Всех святых, в земле Русской просиявших, отец Андрей Мохов:<br>Дорогие мои!<br>От всего сердца поздравляю вас с праздником — Днём семьи, любви и верности, установленным в память святых благоверных князей Петра и Февронии, покровителей христианского брака. Их жизнь является примером верности, самоотдачи и жертвенности, даже в испытаниях. Они показали, что семья, основанная на вере и любви, преодолевает любые трудности.<br>Сегодня во всех храмах Русской Православной Церкви возносятся особые молитвы о супругах, детях, родителях и всех, кого соединили семейные узы. Да ниспошлет Господь Свое благословение на каждую христианскую семью.<br>В этот праздник желаю вам крепкой семьи, неугасимой любви и нерушимой верности. Пусть ваши дома будут благословенны, а сердца — открыты для добра и милосердия. Да хранит вас Господь молитвами святых Петра и Февронии!</p>'
        ]
        
            
        
            article.innerHTML=article_content[Number(item.id)]
            var close_button=document.querySelector('.close_button');
            close_button.addEventListener('click',function(){
                article.classList.remove('article_content');
                article.innerHTML=""
                article.classList.add('article_content_hidden');
                body.style.overflow="auto";
                })
            document.addEventListener('keyup',function(event){
                if(event.key=="Escape"){
                    article.classList.remove('article_content');
                    article.innerHTML=""
                    article.classList.add('article_content_hidden');
                    body.style.overflow="auto";
                }
                
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
