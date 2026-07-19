"use client";

import { FormEvent, useMemo, useState } from "react";

const projects = [
  { title: "Кухня-гостиная с островом", type: "Кухни", price: "от 165 000 ₽", note: "МДФ, столешница, базовая фурнитура", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=88", size: "large" },
  { title: "Шкаф во всю стену", type: "Шкафы", price: "от 85 000 ₽", note: "Матовые фасады, скрытые ручки", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=88", size: "normal" },
  { title: "Гардеробная с подсветкой", type: "Гардеробные", price: "от 120 000 ₽", note: "Системы хранения, стекло, LED-подсветка", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=88", size: "normal" },
  { title: "Домашний кабинет", type: "Рабочие зоны", price: "от 95 000 ₽", note: "Стол, хранение, кабель-менеджмент", image: "https://images.unsplash.com/photo-1593476550610-87baa860004a?auto=format&fit=crop&w=1400&q=88", size: "wide" },
];

const categories = [
  { title: "Кухни", text: "Функциональные кухни по размерам помещения.", image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=85" },
  { title: "Шкафы", text: "Встроенные и корпусные системы хранения.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85" },
  { title: "Гардеробные", text: "Открытые и закрытые решения с подсветкой.", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=85" },
  { title: "Комплексная меблировка", text: "Мебель для квартиры или дома в одном стиле.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85" },
];

const process = [
  { number: "01", title: "Консультация", text: "Обсуждаем задачу, стиль и бюджет." },
  { number: "02", title: "Замер и проект", text: "Снимаем размеры и показываем компоновку." },
  { number: "03", title: "Смета и договор", text: "Фиксируем материалы, стоимость и сроки." },
  { number: "04", title: "Производство", text: "Изготавливаем мебель и проверяем качество." },
  { number: "05", title: "Доставка и монтаж", text: "Привозим, собираем и сдаём готовый результат." },
];

const materials = [
  { name: "Шпон и массив", text: "Натуральная фактура дуба, ясеня и ореха." },
  { name: "Эмаль и Fenix", text: "Матовые поверхности и сложные оттенки." },
  { name: "Камень и керамика", text: "Практичные столешницы и рабочие поверхности." },
];

const reviews = [
  { initials: "АМ", name: "Анна и Михаил", project: "Кухня-гостиная", text: "Смета не изменилась, монтаж прошёл аккуратно, а хранение получилось удобнее, чем мы планировали." },
  { initials: "ЕК", name: "Екатерина", project: "Гардеробная и прихожая", text: "Материалы сравнили до договора. Всё получилось спокойно, функционально и без лишних переделок." },
  { initials: "АЛ", name: "Алексей", project: "Кабинет и шкафы", text: "Сложную геометрию помещения учли точно. Мебель встала без зазоров, коммуникации спрятали." },
];

const faqs = [
  ["Сколько занимает изготовление?", "Обычно от 30 до 60 рабочих дней. Точный срок фиксируется в договоре."],
  ["Можно ли работать по дизайн-проекту?", "Да. Проверим документацию и подготовим рабочую деталировку."],
  ["Работаете ли вы по Ленинградской области?", "Да, выезд и монтаж обсуждаются индивидуально."],
  ["Меняется ли цена после договора?", "Нет, если не меняется комплектация проекта."],
];

const furnitureOptions = ["Кухня", "Шкаф", "Гардеробная", "Комплексная меблировка"];
const budgetOptions = ["до 150 000 ₽", "150 000–300 000 ₽", "300 000–500 000 ₽", "от 500 000 ₽"];
const filters = ["Все", "Кухни", "Шкафы", "Гардеробные", "Рабочие зоны"];

export default function Home() {
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [furniture, setFurniture] = useState("Кухня");
  const [budget, setBudget] = useState("150 000–300 000 ₽");
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
          <a className="logo" href="#top">WOOD<span>FORMA</span></a>
          <nav className="desktopNav"><a href="#services">Направления</a><a href="#projects">Проекты</a><a href="#process">Процесс</a><a href="#about">О компании</a><a href="#contact">Контакты</a></nav>
          <div className="headerActions"><a className="headerPhone" href="tel:+79990000000">+7 999 000-00-00</a><a className="button buttonPrimary buttonSmall" href="#contact">Получить расчёт</a><button className="menuButton" type="button" aria-label="Открыть меню" onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button></div>
        </div>
        {menuOpen && <nav className="mobileNav"><a href="#services" onClick={() => setMenuOpen(false)}>Направления</a><a href="#projects" onClick={() => setMenuOpen(false)}>Проекты</a><a href="#process" onClick={() => setMenuOpen(false)}>Процесс</a><a href="#about" onClick={() => setMenuOpen(false)}>О компании</a><a href="#contact" onClick={() => setMenuOpen(false)}>Контакты</a></nav>}
      </header>

      <section className="hero" id="top"><div className="container heroGrid"><div className="heroCopy"><div className="heroBadge">Мебельное производство в Санкт-Петербурге</div><h1>Мебель по индивидуальным размерам — от проекта до монтажа</h1><p className="heroText">Кухни, шкафы, гардеробные и комплексная меблировка. Замер, проект и фиксированная стоимость в договоре.</p><div className="heroButtons"><a className="button buttonPrimary" href="#contact">Рассчитать проект</a><a className="button buttonSecondary" href="#projects">Смотреть работы</a></div><div className="heroProof"><div><strong>8 лет</strong><span>в производстве мебели</span></div><div><strong>420+</strong><span>реализованных проектов</span></div><div><strong>24 месяца</strong><span>гарантия по договору</span></div></div></div><div className="heroVisual"><img src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1600&q=90" alt="Современная кухня"/><div className="heroFloating"><span>До производства</span><strong>Замер и 3D-проект</strong><p>Вы заранее видите компоновку и понимаете стоимость.</p></div></div></div></section>

      <section className="trustBar"><div className="container trustGrid"><div><strong>Цена фиксируется</strong><span>после согласования проекта</span></div><div><strong>Свой монтаж</strong><span>без случайных подрядчиков</span></div><div><strong>Материалы для дома</strong><span>проверенные поставщики</span></div><div><strong>СПб и Ленобласть</strong><span>выезд на объект</span></div></div></section>

      <section className="section" id="services"><div className="container"><div className="sectionHead"><div><p className="eyebrow">Что мы создаём</p><h2>Мебель для всего пространства</h2></div><p className="sectionText">От отдельных изделий до комплексной меблировки квартиры или дома.</p></div><div className="categoryGrid">{categories.map((item) => <article className="categoryCard" key={item.title}><img src={item.image} alt={item.title}/><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>

      <section className="section portfolioSection" id="projects"><div className="container"><div className="sectionHead"><div><p className="eyebrow">Реализованные проекты</p><h2>Готовые решения для реальных помещений</h2></div><p className="sectionText">Стоимость указана ориентировочно и зависит от размеров, материалов и фурнитуры.</p></div><div className="filterRow">{filters.map((filter) => <button key={filter} className={`filterChip ${activeFilter === filter ? "active" : ""}`} type="button" onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><div className="projectsGrid">{visibleProjects.map((project) => <article className={`projectCard project-${project.size}`} key={project.title}><img src={project.image} alt={project.title}/><div className="projectOverlay"/><div className="projectContent"><span className="projectType">{project.type}</span><h3>{project.title}</h3><p>{project.note}</p><div className="projectBottom"><strong>{project.price}</strong><span>Ориентировочная стоимость</span></div></div></article>)}</div></div></section>

      <section className="section sectionDark"><div className="container"><div className="sectionHead compactHead"><div><p className="eyebrow light">Что входит в работу</p><h2>Понятный проект без сюрпризов</h2></div><p className="sectionText lightText">До договора вы понимаете состав работ, стоимость и будущий результат.</p></div><div className="benefitsGrid"><div className="benefitCard"><span>01</span><h3>Подробная смета</h3><p>Материалы, фурнитура, доставка и монтаж указаны отдельно.</p></div><div className="benefitCard"><span>02</span><h3>Проект до производства</h3><p>Показываем компоновку, пропорции и основные материалы.</p></div><div className="benefitCard"><span>03</span><h3>Выбор комплектации</h3><p>Предлагаем несколько решений под задачу и бюджет.</p></div><div className="benefitCard"><span>04</span><h3>Сроки в договоре</h3><p>Фиксируем этапы и даты до начала производства.</p></div></div></div></section>

      <section className="section" id="process"><div className="container"><div className="sectionHead"><div><p className="eyebrow">Этапы работы</p><h2>Пять шагов до готовой мебели</h2></div><p className="sectionText">Каждый этап согласован заранее.</p></div><div className="processList">{process.map((item) => <article className="processRow" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

      <section className="section materialsSection"><div className="container"><div className="sectionHead"><div><p className="eyebrow">Материалы</p><h2>Подбираем покрытие под стиль и нагрузку</h2></div><p className="sectionText">Работаем с проверенными производителями материалов и фурнитуры.</p></div><div className="materialsGrid">{materials.map((item, index) => <article className={`materialCard material${index + 1}`} key={item.name}><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.text}</p></article>)}</div><div className="brandLine"><span>EGGER</span><span>CLEAF</span><span>FENIX</span><span>BLUM</span><span>HETTICH</span><span>HÄFELE</span></div></div></section>

      <section className="section aboutSection" id="about"><div className="container aboutGrid"><div className="aboutVisual"><img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1500&q=88" alt="Производство мебели"/><div className="aboutBadge"><strong>420+</strong><span>готовых проектов</span></div></div><div className="aboutContent"><p className="eyebrow">О компании</p><h2>Контролируем проект от замера до монтажа</h2><p className="sectionText">Проектировщики, мастера и монтажники работают как одна команда.</p><blockquote>«Мебель должна быть удобной каждый день, а не только хорошо выглядеть на рендере».</blockquote><ul className="aboutList"><li>Учитываем геометрию и коммуникации</li><li>Показываем реальные образцы материалов</li><li>Проверяем мебель перед доставкой</li><li>Остаёмся на связи после монтажа</li></ul></div></div></section>

      <section className="section reviewsSection"><div className="container"><div className="reviewsTop"><div><p className="eyebrow">Отзывы</p><h2>Что говорят клиенты</h2><p className="sectionText">Коротко о процессе, качестве и монтаже.</p></div><div className="ratingSummary"><strong>4.9</strong><div><span>★★★★★</span><small>средняя оценка</small></div></div></div><div className="reviewsGrid">{reviews.map((review) => <article className="reviewCard" key={review.name}><div className="reviewMeta"><div className="reviewAvatar">{review.initials}</div><div><strong>{review.name}</strong><span>{review.project}</span></div></div><p>{review.text}</p><div className="reviewStars">★★★★★</div></article>)}</div></div></section>

      <section className="section faqSection"><div className="container faqGrid"><div><p className="eyebrow">Частые вопросы</p><h2>Что важно знать</h2><p className="sectionText">Ответы на основные вопросы до начала проекта.</p></div><div className="faqList">{faqs.map(([question, answer], index) => <article className={`faqItem ${openFaq === index ? "open" : ""}`} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><i>{openFaq === index ? "−" : "+"}</i></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></div></section>

      <section className="section contactSection" id="contact"><div className="container contactGrid"><div className="contactIntro"><p className="eyebrow">Предварительный расчёт</p><h2>Узнайте стоимость проекта</h2><p className="sectionText">Ответьте на несколько вопросов — мы подготовим ориентировочный диапазон стоимости.</p><div className="contactCards"><div className="contactCard"><span>Телефон</span><a href="tel:+79990000000">+7 999 000-00-00</a></div><div className="contactCard"><span>Telegram</span><a href="https://t.me/woodforma_demo">@woodforma</a></div><div className="contactCard"><span>Режим работы</span><strong>Пн–Сб, 10:00–19:00</strong></div></div></div><form className="leadForm" onSubmit={handleSubmit}>{sent ? <div className="successState"><div className="successDot"/><h3>Спасибо за заявку</h3><p>Менеджер свяжется с вами в рабочее время.</p><button type="button" onClick={() => setSent(false)}>Отправить ещё одну</button></div> : <><div className="quizBlock wide"><span className="quizLabel">Что хотите заказать?</span><div className="chipGrid">{furnitureOptions.map((item) => <button key={item} type="button" className={`choiceChip ${furniture === item ? "active" : ""}`} onClick={() => setFurniture(item)}>{item}</button>)}</div></div><div className="quizBlock wide"><span className="quizLabel">Ориентировочный бюджет</span><div className="chipGrid">{budgetOptions.map((item) => <button key={item} type="button" className={`choiceChip ${budget === item ? "active" : ""}`} onClick={() => setBudget(item)}>{item}</button>)}</div></div><label>Имя<input required name="name" placeholder="Как к вам обращаться"/></label><label>Телефон<input required name="phone" type="tel" placeholder="+7 999 000-00-00"/></label><label className="wide">Комментарий<textarea rows={3} name="comment" placeholder="Например: кухня 3,2 метра, есть план помещения"/></label><div className="wide uploadFake"><span>Есть план или фото помещения?</span><button type="button">Прикрепить файл</button></div><button className="button buttonPrimary wide" type="submit">Получить расчёт стоимости</button><small className="wide formNote">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</small></>}</form></div></section>

      <section className="finalCta"><div className="container finalCtaInner"><div><p className="eyebrow light">Начать проект</p><h2>Обсудим задачу и предложим решение</h2></div><a className="button buttonLight" href="#contact">Записаться на консультацию</a></div></section>

      <footer className="siteFooter"><div className="container footerGrid"><div><a className="logo footerLogo" href="#top">WOOD<span>FORMA</span></a><p>Мебель по индивидуальным размерам в Санкт-Петербурге и Ленинградской области.</p></div><div><span>Компания</span><a href="#services">Направления</a><a href="#projects">Проекты</a><a href="#process">Как мы работаем</a><a href="#about">О компании</a></div><div><span>Контакты</span><a href="tel:+79990000000">+7 999 000-00-00</a><a href="mailto:hello@woodforma.ru">hello@woodforma.ru</a><p>Санкт-Петербург и Ленинградская область</p></div></div><div className="container footerBottom"><span>© 2026 WoodForma</span><span>Политика конфиденциальности</span></div></footer>
    </main>
  );
}
