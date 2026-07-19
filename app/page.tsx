"use client";

import { FormEvent, useMemo, useState } from "react";

const projects = [
  { title: "Кухня-гостиная с островом", type: "Кухни", price: "от 315 000 ₽", note: "МДФ в эмали, кварцевый агломерат, фурнитура Blum", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=88", size: "large" },
  { title: "Встроенный шкаф во всю стену", type: "Шкафы", price: "от 136 000 ₽", note: "Матовые фасады, скрытые ручки, внутренняя подсветка", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=88", size: "normal" },
  { title: "Гардеробная с мягкой подсветкой", type: "Гардеробные", price: "от 184 000 ₽", note: "Шпон ореха, стекло, встроенная LED-подсветка", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=88", size: "normal" },
  { title: "Домашний кабинет", type: "Рабочие зоны", price: "от 119 000 ₽", note: "Шпон ясеня, металл, скрытый кабель-менеджмент", image: "https://images.unsplash.com/photo-1593476550610-87baa860004a?auto=format&fit=crop&w=1400&q=88", size: "wide" },
];

const categories = [
  { title: "Кухни", text: "Продуманная эргономика, удобное хранение и материалы под интерьер.", image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=85" },
  { title: "Шкафы", text: "Встроенные решения для ниш, спальни, прихожей и гостиной.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85" },
  { title: "Гардеробные", text: "Открытые и закрытые системы хранения с продуманным наполнением.", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=85" },
  { title: "Комплексная меблировка", text: "Единая концепция мебели для квартиры, дома или коммерческого пространства.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85" },
];

const process = [
  { number: "01", title: "Консультация", text: "Обсуждаем помещение, задачи, стиль и ориентир по бюджету." },
  { number: "02", title: "Замер и проект", text: "Снимаем размеры, продумываем наполнение и готовим визуализацию." },
  { number: "03", title: "Смета и договор", text: "Фиксируем материалы, комплектацию, стоимость и сроки." },
  { number: "04", title: "Производство", text: "Изготавливаем мебель и проверяем качество на каждом этапе." },
  { number: "05", title: "Доставка и монтаж", text: "Привозим, собираем, регулируем и сдаём готовый результат." },
];

const reviews = [
  { name: "Анна и Михаил", project: "Кухня-гостиная, Петроградский район", text: "Нам предложили несколько решений по хранению, о которых мы сами не подумали. Стоимость совпала со сметой, монтаж прошёл аккуратно." },
  { name: "Екатерина", project: "Гардеробная и прихожая, Приморский район", text: "Материалы спокойно сравнили до договора. В результате получилось функционально и визуально легче, чем мы представляли вначале." },
  { name: "Алексей", project: "Кабинет и встроенные шкафы, Репино", text: "Помещение было сложной формы, но всё подогнали точно. Коммуникации спрятали, а рабочая зона выглядит цельно." },
];

const materials = [
  { name: "Шпон и массив", text: "Дуб, ясень и орех для тёплых, выразительных интерьеров." },
  { name: "Эмаль и Fenix", text: "Матовые поверхности и спокойные оттенки для современной мебели." },
  { name: "Камень и керамика", text: "Износостойкие поверхности для кухонь, ванных и рабочих зон." },
];

const faqs = [
  ["Сколько занимает изготовление?", "Обычно от 30 до 60 рабочих дней после утверждения проекта и материалов. Точный срок фиксируется в договоре."],
  ["Можно ли работать по дизайн-проекту?", "Да. Проверим техническую реализуемость, уточним материалы и подготовим рабочую документацию."],
  ["Выезжаете ли вы за пределы Санкт-Петербурга?", "Работаем по Санкт-Петербургу и Ленинградской области. Другие регионы обсуждаются отдельно."],
  ["Меняется ли цена после подписания договора?", "Нет, если не меняется комплектация. Итоговая стоимость фиксируется после замера и согласования проекта."],
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
            <div className="heroBadge">Мебель на заказ в Санкт-Петербурге</div>
            <h1>Проектируем мебель под ваш интерьер и образ жизни</h1>
            <p className="heroText">Кухни, шкафы, гардеробные и комплексная меблировка. От первого замера до финальной регулировки после монтажа.</p>
            <div className="heroButtons"><a className="button buttonPrimary" href="#contact">Рассчитать проект</a><a className="button buttonSecondary" href="#projects">Посмотреть работы</a></div>
            <div className="heroProof"><div><strong>8 лет</strong><span>работаем с индивидуальными проектами</span></div><div><strong>420+</strong><span>реализованных интерьеров</span></div><div><strong>24 месяца</strong><span>гарантия по договору</span></div></div>
          </div>
          <div className="heroVisual">
            <img src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1600&q=90" alt="Современная кухня по индивидуальному проекту" />
            <div className="heroFloating"><span>Первый шаг</span><strong>Замер и проект</strong><p>Поможем определить компоновку, материалы и ориентир по стоимости.</p></div>
          </div>
        </div>
      </section>

      <section className="trustBar"><div className="container trustGrid"><div><strong>Фиксированная смета</strong><span>стоимость закрепляется в договоре</span></div><div><strong>Своя команда монтажа</strong><span>без случайных подрядчиков</span></div><div><strong>Проверенные материалы</strong><span>для жилых и коммерческих помещений</span></div><div><strong>СПб и Ленобласть</strong><span>выезд на замер и монтаж</span></div></div></section>

      <section className="section" id="services"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">Направления</p><h2>Мебель для всего пространства в одном стиле</h2></div><p className="sectionText">Можно заказать отдельное изделие или полностью укомплектовать квартиру, дом или коммерческое пространство.</p></div>
        <div className="categoryGrid">{categories.map((item) => <article className="categoryCard" key={item.title}><img src={item.image} alt={item.title}/><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </div></section>

      <section className="section portfolioSection" id="projects"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">Проекты</p><h2>Решения, созданные под реальные помещения</h2></div><p className="sectionText">Показываем сочетание материалов, компоновку и ориентировочную стоимость готовых проектов.</p></div>
        <div className="filterRow">{filters.map((filter) => <button key={filter} className={`filterChip ${activeFilter === filter ? "active" : ""}`} type="button" onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
        <div className="projectsGrid">{visibleProjects.map((project) => <article className={`projectCard project-${project.size}`} key={project.title}><img src={project.image} alt={project.title}/><div className="projectOverlay"/><div className="projectContent"><span className="projectType">{project.type}</span><h3>{project.title}</h3><p>{project.note}</p><div className="projectBottom"><strong>{project.price}</strong><span>Санкт-Петербург</span></div></div></article>)}</div>
      </div></section>

      <section className="section sectionDark"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow light">Что входит в работу</p><h2>Прозрачный проект без скрытых этапов</h2></div><p className="sectionText lightText">До подписания договора вы понимаете, что входит в стоимость и каким будет результат.</p></div>
        <div className="benefitsGrid"><div className="benefitCard"><span>01</span><h3>Подробная смета</h3><p>Материалы, фурнитура, доставка и монтаж указаны отдельно.</p></div><div className="benefitCard"><span>02</span><h3>Проект до производства</h3><p>Показываем компоновку, пропорции и основные материалы.</p></div><div className="benefitCard"><span>03</span><h3>Выбор комплектации</h3><p>Предлагаем несколько решений под задачу и бюджет.</p></div><div className="benefitCard"><span>04</span><h3>Сервис после монтажа</h3><p>Остаёмся на связи и устраняем гарантийные вопросы.</p></div></div>
      </div></section>

      <section className="section" id="process"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">Процесс</p><h2>Пять этапов от идеи до готовой мебели</h2></div><p className="sectionText">На каждом этапе есть понятный результат: замер, проект, смета, производство и монтаж.</p></div>
        <div className="processList">{process.map((item) => <article className="processRow" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </div></section>

      <section className="section materialsSection"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">Материалы</p><h2>Подбираем отделку под интерьер и нагрузку</h2></div><p className="sectionText">Сочетаем внешний вид, практичность и бюджет. Перед заказом показываем реальные образцы.</p></div>
        <div className="materialsGrid">{materials.map((item, index) => <article className={`materialCard material${index + 1}`} key={item.name}><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.text}</p></article>)}</div>
        <div className="brandLine"><span>EGGER</span><span>CLEAF</span><span>FENIX</span><span>BLUM</span><span>HETTICH</span><span>HÄFELE</span></div>
      </div></section>

      <section className="section aboutSection" id="about"><div className="container aboutGrid">
        <div className="aboutVisual"><img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1500&q=88" alt="Производство мебели WoodForma"/><div className="aboutBadge"><strong>420+</strong><span>реализованных проектов в Санкт-Петербурге и области</span></div></div>
        <div className="aboutContent"><p className="eyebrow">О компании</p><h2>Одна команда отвечает за весь результат</h2><p className="sectionText">Проектировщики, технологи, мастера и монтажники работают по одной документации и согласованному плану.</p><blockquote>«Нам важно, чтобы мебель выглядела естественно в интерьере и оставалась удобной каждый день».</blockquote><ul className="aboutList"><li>Учитываем геометрию помещения и коммуникации</li><li>Согласовываем реальные образцы материалов</li><li>Проверяем изделия до доставки</li><li>Даём гарантию и остаёмся на связи после монтажа</li></ul></div>
      </div></section>

      <section className="section reviewsSection"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">Отзывы</p><h2>Что клиенты отмечают после завершения проекта</h2></div><div className="ratingBox"><strong>4.9</strong><span>средняя оценка</span></div></div>
        <div className="reviewsGrid">{reviews.map((review) => <article className="reviewCard" key={review.name}><div className="stars">★★★★★</div><p>{review.text}</p><div><strong>{review.name}</strong><span>{review.project}</span></div></article>)}</div>
      </div></section>

      <section className="section faqSection"><div className="container faqGrid"><div><p className="eyebrow">Вопросы</p><h2>Что важно знать до начала работ</h2><p className="sectionText">Не нашли ответ — напишите или позвоните нам.</p></div><div className="faqList">{faqs.map(([question, answer], index) => <article className={`faqItem ${openFaq === index ? "open" : ""}`} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><i>{openFaq === index ? "−" : "+"}</i></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></div></section>

      <section className="section contactSection" id="contact"><div className="container contactGrid">
        <div className="contactIntro"><p className="eyebrow">Расчёт проекта</p><h2>Расскажите, какая мебель вам нужна</h2><p className="sectionText">Уточним размеры, стиль и бюджет, после чего предложим подходящую комплектацию и ориентир по стоимости.</p><div className="contactCards"><div className="contactCard"><span>Телефон</span><a href="tel:+79990000000">+7 999 000-00-00</a></div><div className="contactCard"><span>Telegram</span><a href="https://t.me/woodforma_demo">@woodforma</a></div><div className="contactCard"><span>Режим работы</span><strong>Пн–Сб, 10:00–19:00</strong></div></div></div>
        <form className="leadForm" onSubmit={handleSubmit}>{sent ? <div className="successState"><div className="successDot"/><h3>Спасибо за заявку</h3><p>Мы свяжемся с вами в рабочее время и уточним детали проекта.</p><button type="button" onClick={() => setSent(false)}>Заполнить форму ещё раз</button></div> : <><div className="quizBlock wide"><span className="quizLabel">Что хотите заказать?</span><div className="chipGrid">{furnitureOptions.map((item) => <button key={item} type="button" className={`choiceChip ${furniture === item ? "active" : ""}`} onClick={() => setFurniture(item)}>{item}</button>)}</div></div><div className="quizBlock wide"><span className="quizLabel">Ориентировочный бюджет</span><div className="chipGrid">{budgetOptions.map((item) => <button key={item} type="button" className={`choiceChip ${budget === item ? "active" : ""}`} onClick={() => setBudget(item)}>{item}</button>)}</div></div><label>Имя<input required name="name" placeholder="Как к вам обращаться"/></label><label>Телефон<input required name="phone" type="tel" placeholder="+7 999 000-00-00"/></label><label className="wide">Комментарий<textarea rows={4} name="comment" placeholder="Например: нужна кухня длиной 3,2 метра, есть план помещения"/></label><div className="wide uploadFake"><span>Есть план или фотография помещения?</span><button type="button">Прикрепить файл</button></div><button className="button buttonPrimary wide" type="submit">Получить предварительный расчёт</button><small className="wide formNote">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</small></>}</form>
      </div></section>

      <section className="finalCta"><div className="container finalCtaInner"><div><p className="eyebrow light">Начать проект</p><h2>Обсудим задачу и предложим подходящее решение</h2></div><a className="button buttonLight" href="#contact">Записаться на консультацию</a></div></section>

      <footer className="siteFooter"><div className="container footerGrid"><div><a className="logo footerLogo" href="#top">WOOD<span>FORMA</span></a><p>Кухни, шкафы, гардеробные и комплексная меблировка по индивидуальным размерам.</p></div><div><span>Компания</span><a href="#services">Направления</a><a href="#projects">Проекты</a><a href="#process">Как мы работаем</a><a href="#about">О компании</a></div><div><span>Контакты</span><a href="tel:+79990000000">+7 999 000-00-00</a><a href="mailto:hello@woodforma.ru">hello@woodforma.ru</a><p>Санкт-Петербург и Ленинградская область</p></div></div><div className="container footerBottom"><span>© 2026 WoodForma</span><span>Политика конфиденциальности</span></div></footer>
    </main>
  );
}
