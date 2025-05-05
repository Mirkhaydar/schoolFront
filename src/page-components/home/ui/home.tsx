import React, { useState } from 'react';

import { Card, Statistic, Row, Col, Modal, Form, Input, message } from 'antd';
import Image from 'next/image';
import { 
  FaUniversity, 
  FaGlobeEurope, 
  FaUserGraduate, 
  FaBookOpen, 
  FaCheckCircle, 
  FaHandsHelping, 
  FaLightbulb, 
  FaGraduationCap, 
  FaFileAlt, 
  FaMoneyBillWave, 
  FaLandmark,
  FaQuoteLeft,
  FaStar,
  FaWhatsapp,
  FaTelegram,
  FaArrowRight,
  FaShieldAlt
} from 'react-icons/fa';

import { Button } from '@/shared/ui/button';
import turkeyStudyImage from 'public/turkey_study.png';

import styles from './home-view.module.scss';

const { TextArea } = Input;

const HomeView: React.FC = () => {
  const [consultModalVisible, setConsultModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showConsultModal = () => {
    setConsultModalVisible(true);
  };

  const handleConsultModalCancel = () => {
    setConsultModalVisible(false);
  };

  const handleConsultSubmit = (values: any) => {
    console.log('Заявка отправлена:', values);
    message.success('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
    form.resetFields();
    setConsultModalVisible(false);
  };

  const statistics = [
    { title: 'Ведущих университетов', value: 200, suffix: '+', color: '#cf1322', icon: <FaUniversity style={{ height: '24px', width: '24px' }} className={styles.statisticIcon} /> },
    { title: 'Иностранных студентов', value: 300, suffix: 'тыс.+', color: '#08979c', icon: <FaUserGraduate style={{ height: '24px', width: '24px' }} className={styles.statisticIcon} /> },
    { title: 'Программ на английском', value: 600, suffix: '+', color: '#3f8600', icon: <FaBookOpen style={{ height: '24px', width: '24px' }} className={styles.statisticIcon} /> },
    { title: 'Городов с университетами', value: 81, suffix: '', color: '#d48806', icon: <FaGlobeEurope style={{ height: '24px', width: '24px' }} className={styles.statisticIcon} /> },
  ];

  const advantages = [
    { title: 'Высокое качество образования', description: 'Современные программы и исследовательские возможности, признанные международным сообществом.', icon: '/images/quality.svg' },
    { title: 'Поступление без экзаменов', description: 'На многие программы возможно поступление по аттестату и диплому без дополнительных вступительных испытаний.', icon: '/images/no-exam.svg' },
    { title: 'Доступная стоимость', description: 'Обучение и проживание значительно дешевле, чем в Европе и США, с доступными стипендиальными программами.', icon: '/images/affordable.svg' },
    { title: 'Богатая культура и возможности', description: 'Уникальная культурная среда и перспективы карьерного роста в быстрорастущей экономике страны.', icon: '/images/culture-career.svg' },
  ];

  const universities = [
    { 
      name: 'Стамбульский университет', 
      city: 'Стамбул', 
      logo: '/images/istanbul_uni_logo.png', 
      description: 'Один из старейших и крупнейших вузов Турции с широким спектром программ и богатой историей.',
      year: '1453',
      students: '95,000+',
      rating: 4.7,
      programs: 'Медицина, инженерия, экономика, право, международные отношения'
    },
    { 
      name: 'Босфорский университет', 
      city: 'Стамбул', 
      logo: '/images/bogazici_uni_logo.png', 
      description: 'Престижный государственный вуз с обучением преимущественно на английском языке, признанный во всем мире.',
      year: '1863',
      students: '15,000+',
      rating: 4.9,
      programs: 'Бизнес, инженерия, компьютерные науки, экономика'
    },
    { 
      name: 'Ближневосточный технический университет (METU)', 
      city: 'Анкара', 
      logo: '/images/metu_uni_logo.png', 
      description: 'Ведущий технический университет, известный своими инновационными исследованиями и высоким уровнем образования.',
      year: '1956',
      students: '27,000+',
      rating: 4.8,
      programs: 'Инженерия, IT, архитектура, естественные науки'
    },
    { 
      name: 'Университет Коч', 
      city: 'Стамбул', 
      logo: '/images/koc_uni_logo.png', 
      description: 'Частный исследовательский университет с мировым признанием и сильными связями с бизнес-сообществом.',
      year: '1993',
      students: '7,000+',
      rating: 4.9,
      programs: 'Бизнес, медицина, инженерия, право'
    },
  ];

  const helpSteps = [
    { 
      title: 'Консультация и подбор', 
      description: 'Анализируем ваш профиль, академические интересы и цели для подбора оптимальных вариантов обучения.', 
      icon: <FaLightbulb />, 
      step: '01'
    },
    { 
      title: 'Подготовка документов', 
      description: 'Помогаем собрать, перевести и нотариально заверить все необходимые документы согласно требованиям университетов.', 
      icon: <FaFileAlt />,
      step: '02'
    },
    { 
      title: 'Подача заявки', 
      description: 'Контролируем процесс подачи заявок в выбранные университеты и коммуникацию с приемными комиссиями.', 
      icon: <FaCheckCircle />,
      step: '03'
    },
    { 
      title: 'Полное сопровождение', 
      description: 'Поддерживаем на всех этапах: от получения приглашения до прибытия в Турцию и адаптации на месте.', 
      icon: <FaHandsHelping />,
      step: '04'
    },
  ];
  
  const testimonials = [
    {
      name: 'Алексей М.',
      program: 'Международный бизнес, Босфорский университет',
      photo: '/images/testimonial1.jpg',
      text: 'Благодаря профессиональной помощи TurkeyEdu я смог поступить в один из лучших университетов Турции. Все этапы были четко организованы, начиная от подбора программы до получения визы и адаптации на месте.',
      rating: 5
    },
    {
      name: 'Елена К.',
      program: 'Медицина, Стамбульский университет',
      photo: '/images/testimonial2.jpg',
      text: 'Очень благодарна команде TurkeyEdu за помощь в поступлении на программу медицины. Особенно ценно было индивидуальное сопровождение при подготовке к интервью и оформлении документов.',
      rating: 5
    },
    {
      name: 'Дмитрий В.',
      program: 'Компьютерная инженерия, METU',
      photo: '/images/testimonial3.jpg',
      text: 'Выбрал обучение в Турции по совету TurkeyEdu и ни разу не пожалел. Качество образования превзошло мои ожидания, а стоимость значительно ниже, чем в Европе. Рекомендую всем!',
      rating: 4
    }
  ];
  
  const faqItems = [
    {
      question: 'Какие документы нужны для поступления?',
      answer: 'Для поступления в турецкие университеты обычно требуются: аттестат или диплом с приложением, их нотариально заверенные переводы, загранпаспорт, фотографии, мотивационное письмо и CV. Для некоторых программ может потребоваться сертификат о знании английского языка.'
    },
    {
      question: 'Нужно ли знать турецкий язык?',
      answer: 'Для программ на английском языке знание турецкого не обязательно, но многие университеты предлагают бесплатные курсы турецкого для иностранных студентов. Для программ на турецком требуется сертификат TÖMER или прохождение языкового года.'
    },
    {
      question: 'Какова стоимость обучения в Турции?',
      answer: 'Стоимость обучения варьируется от 500 до 5000 долларов в год в государственных вузах и от 5000 до 20000 долларов в частных. Это значительно ниже, чем в США и Европе. Также доступны различные стипендиальные программы.'
    },
    {
      question: 'Как получить студенческую визу?',
      answer: 'После получения приглашения от университета нужно подать документы в консульство Турции на студенческую визу. Мы предоставляем полное сопровождение этого процесса, включая подготовку всех необходимых документов.'
    }
  ];

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        {/* Декоративные элементы */}
        <div className={styles.decorSquare}></div>
        <div className={styles.decorCircle}></div>
        
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Обучение в <span className={styles.highlight}>Турции</span>
            <br />
            Ваш путь к международному образованию
          </h1>
          <p className={styles.subtitle}>
            Поступление в топовые университеты Турции без экзаменов. Персональная поддержка на всех этапах от выбора программы до адаптации в стране.
          </p>
          <div className={styles.heroCta}>
            <Button type="primary" size="large" className={styles.heroButton} onClick={showConsultModal}>
              Получить бесплатную консультацию
            </Button>
            <a href="#universities" className={styles.secondaryLink}>
              <span>Посмотреть университеты</span> <FaArrowRight />
            </a>
          </div>
          
          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}><FaShieldAlt /></div>
              <span>100% гарантия поступления</span>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.rating}>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span>4.9 из 5 на основе 120+ отзывов</span>
            </div>
          </div>
        </div>
        
        <div className={styles.heroImageContainer}>
          <Image
            src={turkeyStudyImage} // Используем импортированную переменную
            alt="Обучение в Турции"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
            priority
            className={styles.heroImage}
          />
        </div>
      </section>
      
      <section className={styles.brandsBanner}>
        <h3>Работаем с ведущими университетами Турции</h3>
        <div className={styles.logoContainer}>
          <div className={styles.logoItem}>Istanbul University</div>
          <div className={styles.logoItem}>Boğaziçi University</div>
          <div className={styles.logoItem}>Middle East Technical University</div>
          <div className={styles.logoItem}>Koç University</div>
          <div className={styles.logoItem}>Ankara University</div>
        </div>
      </section>

      <section id="advantages" className={styles.advantages}>
        <h2 className={styles.sectionTitle}>Почему стоит учиться в Турции?</h2>
        <p className={styles.sectionSubtitle}>Турция предлагает уникальное сочетание качественного образования, доступных цен и богатой культуры</p>
        <Row gutter={[32, 32]} justify="center">
          {advantages.map((adv, index) => (
            <Col key={adv.title} xs={24} sm={12} md={6}>
              <Card hoverable className={`${styles.advantageCard} ${styles['card' + (index + 1)]}`}>
                <div className={styles.advantageIcon}>
                  {adv.title === 'Высокое качество образования' && <FaGraduationCap />}
                  {adv.title === 'Поступление без экзаменов' && <FaFileAlt />}
                  {adv.title === 'Доступная стоимость' && <FaMoneyBillWave />}
                  {adv.title === 'Богатая культура и возможности' && <FaLandmark />}
                </div>
                <h3 className={styles.advantageTitle}>{adv.title}</h3>
                <p>{adv.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className={styles.advantageStats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>70%</span>
            <span className={styles.statLabel}>дешевле обучение, чем в США и Европе</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>11</span>
            <span className={styles.statLabel}>университетов в мировом ТОП-500</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>180+</span>
            <span className={styles.statLabel}>программ полностью на английском</span>
          </div>
        </div>
      </section>

      <section id="how-we-help" className={styles.howWeHelp}>
        <h2 className={styles.sectionTitle}>Как мы помогаем поступить?</h2>
        <p className={styles.sectionSubtitle}>Наш проверенный 4-этапный подход гарантирует успешное поступление</p>
        <Row gutter={[32, 32]} justify="center" className={styles.helpStepsRow}>
          {helpSteps.map((step) => (
            <Col key={step.title} xs={24} sm={12} md={6}>
              <Card hoverable className={styles.helpStepCard}>
                <div className={styles.helpStepHeader}>
                  <span className={styles.helpStepNumber}>{step.step}</span>
                  <div className={styles.helpStepIcon}>{step.icon}</div>
                </div>
                <h3 className={styles.helpStepTitle}>{step.title}</h3>
                <p className={styles.helpStepDescription}>{step.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className={styles.ctaContainer}>
          <Button type="primary" size="large" className={styles.ctaButtonMid} onClick={showConsultModal}>
            Начать поступление сейчас
          </Button>
        </div>
      </section>

      <section className={styles.statistics}>
        <h2 className={styles.sectionTitle}>Турция в цифрах</h2>
        <p className={styles.sectionSubtitle}>Страна с богатыми образовательными традициями и международным признанием</p>
        <div className={styles.statisticsGrid}>
          {statistics.map((stat, index) => (
            <div key={index} className={styles.statisticItem}>
              <div className={styles.statisticIcon}>{stat.icon}</div>
              <Statistic
                title={stat.title}
                value={stat.value}
                suffix={stat.suffix}
                valueStyle={{ color: stat.color }}
              />
            </div>
          ))}
        </div>
      </section>
      
      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>Отзывы наших студентов</h2>
        <p className={styles.sectionSubtitle}>Узнайте, что говорят о нас те, кто уже учится в Турции</p>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}><FaQuoteLeft /></div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialMeta}>
                  <div className={styles.testimonialName}>{testimonial.name}</div>
                  <div className={styles.testimonialProgram}>{testimonial.program}</div>
                  <div className={styles.testimonialRating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="universities" className={styles.universities}>
        <h2 className={styles.sectionTitle}>Популярные университеты</h2>
        <p className={styles.sectionSubtitle}>Мы сотрудничаем с ведущими вузами Турции, признанными на международном уровне</p>
        <Row gutter={[24, 24]} className={styles.universityRow}>
          {universities.map((uni) => (
            <Col key={uni.name} xs={24} sm={12} lg={6}>
              <Card hoverable className={styles.universityCard}>
                <div className={styles.universityLogoContainer}>
                  <FaUniversity className={styles.universityLogoPlaceholder} />
                </div>
                <h3 className={styles.universityName}>{uni.name}</h3>
                <div className={styles.universityRating}>
                  <div className={styles.ratingStars}>
                    {[...Array(Math.floor(uni.rating))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {uni.rating % 1 !== 0 && <FaStar className={styles.halfStar} />}
                  </div>
                  <span>{uni.rating}</span>
                </div>
                <div className={styles.universityInfo}>
                  <span className={styles.universityCity}>{uni.city}</span>
                  <div className={styles.universityMeta}>
                    <span>Основан: {uni.year}</span>
                    <span>Студентов: {uni.students}</span>
                  </div>
                </div>
                <p className={styles.universityDescription}>{uni.description}</p>
                <div className={styles.universityPrograms}>
                  <strong>Направления:</strong> {uni.programs}
                </div>
                <Button type="primary" className={styles.universityButton} onClick={showConsultModal}>
                  Узнать о поступлении
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
      
      <section id="faq" className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Часто задаваемые вопросы</h2>
        <p className={styles.sectionSubtitle}>Ответы на самые популярные вопросы о поступлении в Турцию</p>
        
        <div className={styles.faqContainer}>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{item.question}</h3>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </div>
          ))}
        </div>
        

      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Начните свой путь к образованию в Турции</h2>
        <p>Получите персональную консультацию по поступлению и подбору подходящего университета</p>
        <div className={styles.ctaButtonWrap}>
          <Button type="primary" size="large" className={styles.ctaButton} onClick={showConsultModal}>
            Оставить заявку
          </Button>
        </div>
        
        <div className={styles.contactMethods}>
          <a href="https://wa.me/xxxxxxxxxx" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="https://t.me/turkeyedu" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <FaTelegram /> Telegram
          </a>
        </div>
      </section>
      
      <Modal 
        title="Получить консультацию" 
        open={consultModalVisible}
        onCancel={handleConsultModalCancel}
        footer={null}
        width={500}
      >
        <div className={styles.consultForm}>
          <p>Заполните форму, и мы свяжемся с вами для консультации о поступлении в университеты Турции</p>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleConsultSubmit}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
            >
              <Input placeholder="Ваше имя" />
            </Form.Item>
            
            <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Пожалуйста, введите ваш телефон!' }]}
            >
              <Input placeholder="Телефон" />
            </Form.Item>
            
            <Form.Item
              name="email"
              rules={[
                { type: 'email', message: 'Пожалуйста, введите корректный email!' },
                { required: true, message: 'Пожалуйста, введите ваш email!' }
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            
            <Form.Item name="message">
              <TextArea placeholder="Ваш вопрос или комментарий" rows={4} />
            </Form.Item>
            
            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.formButton}>
                Отправить заявку
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default HomeView;