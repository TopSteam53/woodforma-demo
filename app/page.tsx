"use client";

import { FormEvent, useMemo, useState } from "react";

const projects = [
  { title: "Кухня-гостиная с островом", type: "Кухни", price: "от 315 000 ₽", note: "МДФ в эмали, кварцевый агломерат, Blum", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=88", size: "large" },
  { title: "Шкаф во всю стену", type: "Шкафы", price: "от 136 000 ₽", note: "Матовые фасады, скрытые ручки, подсветка", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=88", size: "normal" },
  { title: "Гардеробная с мягким светом", type: "Гардеробные", price: "от 184 000 ₽", note: "Шпон ореха, стекло, встроенная LED-подсветка", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=88", size: "normal" },
  { title: "Домашний кабинет", type: "Рабочие зоны", price: "от 119 000 ₽", note: "Шпон ясеня, металл, скрытый кабель-менеджмент", image: "https://images.unsplash.com/photo-1593476550610-87baa860004a?auto=format&fit=crop&w=1400&q=88", size: "wide" },
];

const categories = [
  { title: "Кухни", text: "Эргономика, системы хранения и материалы под интерьер.", image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=85" },
  { title: "Шкафы", text: "Встроенные решения, которые используют каждый сантиметр.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85" },
  { title: "Гардеробные", text: "Открытые и закрытые системы хранения с подсветкой.", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=85" },
  { title: "Комплексная меблировка", text: "Единый стиль для квартиры, дома или коммерческого пространства.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85" },
];

const process = [
  { number: "01", title: "Консультация", text: "Обсуждаем задачу, стиль, планировку и ориентир по бюджету." },
  { number: "02", title: "Замер и 3D-проект", text: "Замеряем помещение и показываем будущую мебель до производства." },
  { number: "03", title: "Смета и договор", text: "Фиксируем материалы, комплектацию, стоимость и сроки." },
  { number: "04", title: "Производство", text: "Изготавливаем мебель и контролируем качество на каждом этапе." },
  { number: "05", title: "Доставка и монтаж", text: "Привозим, собираем, убираем упаковку и сдаём готовый результат." },
];

const reviews = [
  { name: "Анна и Михаил", project: "Кухня-гостиная, Петроградский район", text: "Команда предложила несколько решений по хранению, о которых мы сами не подумали. Итоговая стоимость совпала со сметой, монтаж прошёл аккуратно." },
  { name: "Екатерина", project: "Гардеробная и прихожая, Приморский район", text: "Понравилось, что материалы можно было спокойно сравнить до подписания договора. Получилось функционально и визуально легче, чем на первоначальном эскизе." },
  { name: "Алексей", project: "Кабинет и встроенные шкафы, Репино", text: "Проект был непростым из-за геометрии помещения. Всё подогнали точно, коммуникации спрятали, а рабочая зона выглядит цельно." },
];

const materials = [
  { name: "Шпон и массив", text: "Натуральная фактура дуба, ясеня и ореха для тёплых интерьерных решений." },
  { name: "Эмаль и Fenix", text: "Матовые поверхности, сложные оттенки и покрытия, устойчивые к повседневной эксплуатации." },
  { name: "Камень и керамика", text: "Практичные столешницы и панели для кухни, ванной и рабочих поверхностей." },
];

const faqs = [
  ["Сколько занимает изготовление?", "Обычно от 30 до 60 рабочих дней после утверждения проекта и материалов. Точный срок фиксируется в договоре."],
  ["Можно ли работать по дизайн-проекту?", "Да. Мы изучим документацию дизайнера, проверим техническую реализуемость и подготовим рабочую деталировку."],
  ["Выезжаете ли вы за пределы Санкт-Петербурга?", "Работаем по Санкт-Петербургу и Ленинградской области. Выезд в другие регионы обсуждается индивидуально."],
  ["Меняется ли цена после подписания договора?", "Нет, если заказчик не меняет комплектацию. Итоговая стоимость фиксируется после замера и согласования проекта."],
];

const furnitureOptions = ["Кухня", "Шкаф", "Гардеробная", "Комплексная меблировка"];
const budgetOptions = ["до 150 000 ₽", "150 000–300 000 ₽", "300 000–500 000 ₽", "от 500 000 ₽"];
const filters = ["Все", "Кухни", "Шкафы", "Гардеробные", "Рабочие зоны"];

export default function Home() {
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [furniture, setFurniture] = useState("Кухня");
  const [budget, setBudget] = useState("300 000–500 000 ₽");
  const [activeFilter, setActiveFilter] = useState("Все");
  const [openFaq, setOpenFaq] = useState(0);

  const visibleProjects = useMemo(() => activeFilter === "Все" ? projects : projects.filter((project) => project.type === activeFilter), [activeFilter]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="siteHeader">
        <div className="container headerInner">
          <a className="logo" href="#top" aria-label="WoodForma, на главную">WOOD<span>FORMA</span></a>
          <nav className="desktopNav" aria-label="Основная навигация">
            <a href="#services">Направления</a><a href="#projects">Проекты</a><a href="#process">Процесс</a><a href="#about">О компании</a><a href="#contact">Контакты</a>
          </nav>
          <div className="headerActions">
            <a className="headerPhone" href="tel:+79990000000">+7 999 000-00-00</a>
            <a className="button buttonPrimary buttonSmall" href="#contact">Получить расчёт</a>
            <button className="menuButton" type="button" aria-label="Открыть меню" onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
          </div>
        </div>
        {menuOpen && <nav className="mobileNav"><a href="#services" onClick={() => setMenuOpen(false)}>Направления</a><a href="#projects" onClick={() => setMenuOpen(false)}>Проекты</a><a href="#process" onClick={() => setMenuOpen(false)}>Процесс</a><a href="#about" onClick={() => setMenuOpen(false)}>О компании</a><a href="#contact" onClick={() => setMenuOpen(false)}>Контакты</a></nav>}
      </header>

      <section className="hero" id="top">
        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="heroBadge">Мебельное производство в Санкт-Петербурге</div>
            <h1>Мебель по индивидуальным размерам — от проекта до монтажа</h1>
            <p className="heroText">Кухни, шкафы, гардеробные и комплексная меблировка. Бесплатный замер, 3D-проект и фиксированная стоимость в договоре.</p>
            <div className="heroButtons"><a className="button buttonPrimary" href="#contact">Рассчитать проект</a><a className="button buttonSecondary" href="#projects">Смотреть работы</a></div>
            <div className="heroProof"><div><strong>8 лет</strong><span>в производстве мебели</span></div><div><strong>420+</strong><span>реализованных проектов</span></div><div><strong>24 месяца</strong><span>официальная гарантия</span></div></div>
          </div>
          <div className="heroVisual">
            <img src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1600&q=90" alt="Современная кухня по индивидуальному проекту" />
            <div className="heroFloating"><span>Бесплатно</span><strong>Замер и 3D-проект</strong><p>До начала производства вы увидите будущий результат и точную смету.</p></div>
          </div>
        </div>
      </section>

      <section className="trustBar"><div className="container trustGrid"><div><strong>Цена фиксируется</strong><span>после согласования проекта</span></div><div><strong>Собственный монтаж</strong><span>без случайных подрядчиков</span></div><div><strong>Материалы E1 и E0</strong><span>для жилых помещений</span></div><div><strong>СПб и Ленобласть</strong><span>выезд на объект</span></div></div></section>

      <section className="section" id="services"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">Что мы создаём</p><h2>Мебель для всего пространства в едином стиле</h2></div><p className="sectionText">Проектируем отдельные изделия и полностью комплектуем квартиры, дома и коммерческие пространства.</p></div>
        <div className="categoryGrid">{categories.map((item) => <article className="categoryCard" key={item.title}><img src={item.image} alt={item.title}/><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </div></section>

      <section className="section portfolioSection" id="projects"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">Реализованные проекты</p><h2>Лучше всего о качестве говорят готовые интерьеры</h2></div><p className="sectionText">Показываем не каталожные рендеры, а решения, созданные под реальные помещения и задачи владельцев.</p></div>
        <div className="filterRow">{filters.map((filter) => <button key={filter} className={`filterChip ${activeFilter === filter ? "active" : ""}`} type="button" onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
        <div className="projectsGrid">{visibleProjects.map((project) => <article className={`projectCard project-${project.size}`} key={project.title}><img src={project.image} alt={project.title}/><div className="projectOverlay"/><div className="projectContent"><span className="projectType">{project.type}</span><h3>{project.title}</h3><p>{project.note}</p><div className="projectBottom"><strong>{project.price}</strong><span>Санкт-Петербург</span></div></div></article>)}</div>
      </div></section>

      <section className="section sectionDark"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow light">Наш подход</p><h2>Без салонных наценок и непредсказуемых доплат</h2></div><p className="sectionText lightText">Вы платите за материалы, проектирование, производство и монтаж. Комплектация и стоимость закрепляются до запуска заказа.</p></div>
        <div className="benefitsGrid"><div className="benefitCard"><span>01</span><h3>Точная смета</h3><p>Подробно расписываем материалы, фурнитуру, доставку и монтаж.</p></div><div className="benefitCard"><span>02</span><h3>3D-проект</h3><p>Показываем пропорции, цвета и компоновку до начала производства.</p></div><div className="benefitCard"><span>03</span><h3>Выбор комплектации</h3><p>Предлагаем несколько вариантов в рамках вашего бюджета.</p></div><div className="benefitCard"><span>04</span><h3>Гарантийный сервис</h3><p>Остаёмся на связи после монтажа и отвечаем за результат.</p></div></div>
      </div></section>

      <section className="section" id="process"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">Этапы работы</p><h2>Пять понятных шагов до готовой мебели</h2></div><p className="sectionText">Каждый этап согласован заранее, поэтому вы понимаете сроки, стоимость и следующий шаг.</p></div>
        <div className="processList">{process.map((item) => <article className="processRow" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </div></section>

      <section className="section materialsSection"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">Материалы</p><h2>Подбираем покрытие и фурнитуру под стиль и нагрузку</h2></div><p className="sectionText">Работаем с Egger, Kronospan, Cleaf, Fenix, Blum, Hettich и другими проверенными производителями.</p></div>
        <div className="materialsGrid">{materials.map((item, index) => <article className={`materialCard material${index + 1}`} key={item.name}><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.text}</p></article>)}</div>
        <div className="brandLine"><span>EGGER</span><span>CLEAF</span><span>FENIX</span><span>BLUM</span><span>HETTICH</span><span>HÄFELE</span></div>
      </div></section>

      <section className="section aboutSection" id="about"><div className="container aboutGrid">
        <div className="aboutVisual"><img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1500&q=88" alt="Производство мебели WoodForma"/><div className="aboutBadge"><strong>420+</strong><span>проектов в Санкт-Петербурге и области</span></div></div>
        <div className="aboutContent"><p className="eyebrow">О компании</p><h2>Контролируем проект от первого замера до финальной регулировки</h2><p className="sectionText">WoodForma объединяет проектировщиков, технологов, мастеров и монтажников. Мы берём ограниченное количество заказов, чтобы сохранять качество и быть на связи на каждом этапе.</p><blockquote>«Наша задача — не просто изготовить красивую мебель, а сделать пространство удобнее и сохранить эту функциональность на годы».</blockquote><ul className="aboutList"><li>Проектируем с учётом коммуникаций и геометрии помещения</li><li>Согласовываем реальные образцы материалов</li><li>Проводим контрольную проверку перед доставкой</li><li>Даём гарантию и послегарантийное обслуживание</li></ul></div>
      </div></section>

      <section className="section reviewsSection"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">Отзывы клиентов</p><h2>Спокойный процесс так же важен, как готовый интерьер</h2></div><div className="ratingBox"><strong>4.9</strong><span>средняя оценка клиентов</span></div></div>
        <div className="reviewsGrid">{reviews.map((review) => <article className="reviewCard" key={review.name}><div className="stars">★★★★★</div><p>{review.text}</p><div><strong>{review.name}</strong><span>{review.project}</span></div></article>)}</div>
      </div></section>

      <section className="section faqSection"><div className="container faqGrid"><div><p className="eyebrow">Частые вопросы</p><h2>Что важно знать до начала проекта</h2><p className="sectionText">Не нашли ответ — задайте вопрос по телефону или в Telegram.</p></div><div className="faqList">{faqs.map(([question, answer], index) => <article className={`faqItem ${openFaq === index ? "open" : ""}`} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><i>{openFaq === index ? "−" : "+"}</i></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></div></section>

      <section className="section contactSection" id="contact"><div className="container contactGrid">
        <div className="contactIntro"><p className="eyebrow">Предварительный расчёт</p><h2>Узнайте стоимость вашего проекта</h2><p className="sectionText">Ответьте на несколько вопросов. Мы уточним детали, предложим подходящую комплектацию и подготовим предварительный диапазон стоимости.</p><div className="contactCards"><div className="contactCard"><span>Телефон</span><a href="tel:+79990000000">+7 999 000-00-00</a></div><div className="contactCard"><span>Telegram</span><a href="https://t.me/woodforma_demo">@woodforma</a></div><div className="contactCard"><span>Режим работы</span><strong>Пн–Сб, 10:00–19:00</strong></div></div></div>
        <form className="leadForm" onSubmit={handleSubmit}>{sent ? <div className="successState"><div className="successDot"/><h3>Спасибо за заявку</h3><p>Менеджер свяжется с вами в рабочее время, уточнит детали и расскажет о следующем шаге.</p><button type="button" onClick={() => setSent(false)}>Отправить ещё одну заявку</button></div> : <><div className="quizBlock wide"><span className="quizLabel">Что хотите заказать?</span><div className="chipGrid">{furnitureOptions.map((item) => <button key={item} type="button" className={`choiceChip ${furniture === item ? "active" : ""}`} onClick={() => setFurniture(item)}>{item}</button>)}</div></div><div className="quizBlock wide"><span className="quizLabel">Ориентировочный бюджет</span><div className="chipGrid">{budgetOptions.map((item) => <button key={item} type="button" className={`choiceChip ${budget === item ? "active" : ""}`} onClick={() => setBudget(item)}>{item}</button>)}</div></div><label>Имя<input required name="name" placeholder="Как к вам обращаться"/></label><label>Телефон<input required name="phone" type="tel" placeholder="+7 999 000-00-00"/></label><label className="wide">Комментарий<textarea rows={4} name="comment" placeholder="Например: кухня 3,2 метра, есть план помещения"/></label><div className="wide uploadFake"><span>Есть план или фотография помещения?</span><button type="button">Прикрепить файл</button></div><button className="button buttonPrimary wide" type="submit">Получить расчёт стоимости</button><small className="wide formNote">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</small></>}</form>
      </div></section>

      <section className="finalCta"><div className="container finalCtaInner"><div><p className="eyebrow light">Начать проект</p><h2>Обсудим вашу идею и предложим оптимальное решение</h2></div><a className="button buttonLight" href="#contact">Записаться на консультацию</a></div></section>

      <footer className="siteFooter"><div className="container footerGrid"><div><a className="logo footerLogo" href="#top">WOOD<span>FORMA</span></a><p>Кухни, шкафы, гардеробные и комплексная меблировка по индивидуальным размерам.</p></div><div><span>Компания</span><a href="#services">Направления</a><a href="#projects">Проекты</a><a href="#process">Как мы работаем</a><a href="#about">О компании</a></div><div><span>Контакты</span><a href="tel:+79990000000">+7 999 000-00-00</a><a href="mailto:hello@woodforma.ru">hello@woodforma.ru</a><p>Санкт-Петербург и Ленинградская область</p></div></div><div className="container footerBottom"><span>© 2026 WoodForma</span><span>Политика конфиденциальности</span></div></footer>
    </main>
  );
}
