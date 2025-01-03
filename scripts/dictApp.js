// Хеш, содержащий термины и их определения
const wordList = {
    'Алукадр':
        'Вампир. Циничен. Безжалостен, как по отношению к врагам, так и по отношению к союзникам. Единственный человек, которого он считает себе ровней — Интегра Хеллсинг, его теперешняя хозяйка. Невероятно силён, предел его возможностей неизвестен. Его навыки включают в себя телепортацию, ускоренную регенерацию, изменение внешности, возможность призыва поглощённых им душ. В бою обычно ограничивает свои возможности, для того чтобы поиздеваться над противником, так как результат схватки с Алукардом неизменно плачевен для его врагов. За свою долгую жизнь Алукард попробовал практически всё что мог и теперь жаждет только достойного противника, «человека, который прервет его затянувшийся сон». Презирает вампиров, считая, что они растеряли всякое достоинство, так как стали ими из-за желания обрести силу, или из страха смерти. Тем не менее сам создал вампиршу — Викторию Серас, ставшую его напарницей.',
    'Александр Андерсон':
        'Святой отец Ватикана. Паладин. Член ордена Искариот. Один из лучших бойцов ордена. Двухметрового роста мужчина с короткими светлыми волосами. Носит очки. Цвет глаз переменчив, возможно: серые, голубые или зелёные. Одет в брюки строгого покроя, простые чёрные ботинки, аккуратный пиджак с белым воротничком священника и длинный тёмный плащ. Носит перчатки. На левой написано «Jesus Christ is in Heaven» (рус. «Иисус Христос на Небе»), а на правой — «Speak with Dead» (рус. «Говорю с мёртвыми»). Эксперт рукопашного боя. Прекрасно владеет холодным оружием. Может использовать некоторые заклятия (телепортация и установка магических барьеров). Регенератор, способен пережить ранение экспансивной пулей в голову или восстановить утраченные конечности. Фанатично предан Католической Вере и Господу Богу. Абсолютно безжалостен. Ради победы готов на любые жертвы. Один из немногих людей, которых Алукард счёл достойным сразиться с ним.',
    'Интегра Фэйрбрук Уингейтс Хеллсинг':
        'Двадцатидвухлетняя глава организации «Хеллсинг». Правнучка Абрахама Ван Хеллсинга и последняя представительница рода Хеллсинг. Повелительница Алукарда, который уже несколько поколений прислуживает семье Интегры. Стала главой организации в двенадцать лет после смерти своего отца Артура Хеллсинга и его брата Ричарда. Умна, проницательна и отважна. Также Интегра прекрасный стрелок и фехтовальщик. Из огнестрельного оружия предпочитает разнообразные пистолеты и револьверы, а из холодного — палаш. Она и её сотрудники — первая и единственная линия защиты Англии от вампиров и прочей нежити.',
    'Серас Виктория':
        'Бывший офицер полиции Лондона, ставшая членом организации «Хеллсинг». Родителей Серас убили у неё на глазах, когда она была ещё ребёнком. Её отец также был офицером полиции, поэтому Виктория твёрдо решила пойти по его стопам, несмотря на возражения окружающих. В период службы в полиции получила прозвище Котёнок. В ходе инцидента в деревне Чеддар была смертельно ранена и обращена в вампира Алукардом с её собственного согласия. Называет Алукарда «хозяином», а тот, в свою очередь, редко обращается к ней по имени, обычно называя «полицейской».',
    'Хайнкель Вульф':
        'Монахиня. Член ордена Искариот. Напарница Юмиэ. Высокая блондинка с короткой стрижкой. Несмотря на то, что является девушкой, ни разу не появляется в женской одежде, предпочитая носить одежду священника. Из оружия использует парные пистолеты. Обладательница мрачного чувства юмора. Как и большинство Искариотов фанатично предана Католической Церкви. Всецело убеждена в необходимости искоренять ересь и язычество, не считаясь с потерями и жертвами',
    'Шрёдингер':
        'Мальчик-кот, выглядит примерно на 14 лет, хотя реальный возраст около семидесяти. Среднего роста, волосы светло-русые, растрепанные, глаза ярко-алые (согласно OVA). Одет в форму гитлерюгенда. Вооружен символическим ножом гитлерюгенда. Очень привязан к Монтане, с которым ведёт себя как домашнее животное. Также очень привязан к капитану Гансу Гюнше, который выглядит на первый взгляд, как отец Шрёдингера. Производит впечатление милого сорванца, но на деле жесток и безжалостен. Владеет способностями регенерации и перемещения в пространстве, способен посещать чужой разум.',
    'Люк Валентайн':
        'Старший из двух братьев Валентайн. В оригинальной манге и OVA — искусственный вампир, созданный организацией «Миллениум». В телевизионном сериале — совладелец вампирского ночного клуба. Спокоен и сдержан, имеет вычурные манеры и внешность типичного денди. Обладает сверхъестественной скоростью и силой, а также сильной способностью к регенерации. Не боится ни солнечного света, ни серебряных пуль.',
};

// Получаем элемент активного списка терминов
const activeList = document.getElementById('show');

// Получаем элемент поля поиска
const termSeaech = document.getElementById('search');

// Получаем элемент поля вывода объяснения
const explanation = document.getElementById('explain');

const logOutBtn = document.getElementById('logout-btn');
const accountBtn = document.getElementById('account-btn');

// Функция для компановки нового списка терминов
function listMaker(obj) {
    // Преобразуем пустой массив
    let newList = new Array();

    // Проходимся по элементам переданного объекта
    for (i of obj) {
        // Заполняем список элементами объекта
        newList.push(i);
    }

    return newList;
}

// Функция для постановки объяснения термина в указанное место
function explain(terms, place) {
    // Применяем ко всем элементами списка колбэк-функцию
    terms.forEach(item => {
        // Добавляем обработчик события "нажатия" для каждого термина
        item.addEventListener('click', () => {
            // Подстявляем термин и его значение в указанное место
            place.innerHTML = `<b>${item.innerText}</b> - ${wordList[item.innerText]}`;
        });
    });
}

// Создаём первичный реестр терминов, обратившись к именам ключей хеш-таблицы
Object.keys(wordList).forEach(item => {
    // Создаём новый элемент в HTML-разметке
    let newTerm = document.createElement('term');
    // Заполняем ново-созданный элемент именем ключа (термином)
    newTerm.innerText = item;
    // Добавляем элемент в поле вывода терминов
    activeList.appendChild(newTerm);
});

// Выводим пояснение к первому термину в ассоциативном-массиве (по-умолчанию)
explain(listMaker(activeList.children), explanation);

// Добавляем обработчик события ввода текста в поле поиска
termSeaech.addEventListener('input', () => {
    // Очищаем прежний список терминов
    activeList.innerHTML = '';

    // Сопоставляем введённый текст с содержимым реестра терминов
    Object.keys(wordList).forEach(item => {
        // При наличии совпадений, добавляем элемент в новый список
        if (item.toLowerCase().includes(termSeaech.value.toLowerCase())) {
            let newTerm = document.createElement('term');
            newTerm.innerText = item;
            activeList.appendChild(newTerm);
        }
    });

    // Добавляем возможность вывода значений терминов
    let terms = listMaker(activeList.children);
    explain(terms, explanation);
});

accountBtn.innerText = `${sessionStorage.getItem('userLogin')}`;

logOutBtn.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.replace('./index.html');
});