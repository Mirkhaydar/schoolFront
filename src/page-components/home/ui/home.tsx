import React from 'react';

import { Card, List, Rate, Statistic } from 'antd';
import Image from 'next/image';
import { FaCheckCircle, FaArrowUp } from 'react-icons/fa';

import { Button } from '@/shared/ui/button';

import styles from './home-view.module.scss';

// import { ReviewCard } from '@/entities/review';

const HomeView: React.FC = () => {
  // Пример данных (замените на реальные данные)
  // const reviews = [
  //   { author: 'John Doe', text: 'Great course! I learned so much and had a lot of fun. The teachers are amazing and the community is very supportive.', rating: 5 },
  //   { author: 'Jane Smith', text: 'Highly recommended! This is the best language learning platform I have ever used. The lessons are engaging and the app is easy to use.', rating: 4 },
  //   { author: 'Peter Jones', text: 'I have been using this app for a few months now and I am very impressed with the progress I have made. The lessons are well-structured and the exercises are challenging but not overwhelming.', rating: 5 },
  //   { author: 'Mary Williams', text: 'This app is a great way to learn a new language. The lessons are interactive and the app provides a lot of opportunities to practice speaking and writing.', rating: 4 },
  // ];

  const statistics = [
    { title: 'Зарегистрированных учащихся', value: 120, suffix: 'М', color: '#3f8600', icon: <FaCheckCircle style={{ height: '24px', width: '24px' }} className={styles.statisticIcon} /> },
    { title: 'Часов обучения от А1 до С1', value: 2500, suffix: '+', color: '#08979c', icon: <FaArrowUp style={{ height: '24px', width: '24px' }} className={styles.statisticIcon} /> },
    { title: 'Исправлений от сообщества в 2023', value: 76, suffix: 'М', color: '#d48806', icon: <FaArrowUp style={{ height: '24px', width: '24px' }} className={styles.statisticIcon} /> },
  ];

  const languages = [
    { name: 'Английский', flag: '/images/flags/english.svg' },
    { name: 'Немецкий', flag: '/images/flags/german.svg' },
    { name: 'Французский', flag: '/images/flags/french.svg' },
    { name: 'Испанский', flag: '/images/flags/spanish.svg' },
    { name: 'Японский', flag: '/images/flags/japanese.svg' },
    { name: 'Польский', flag: '/images/flags/polish.svg' },
  ];

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
            {/* <Image 
            src="/images/logo.jpg" 
            alt="logo" 
            width={150}
            height={150}
            className={styles.logo}
            /> */}
          <h1 className={styles.title}>
            Изучай <span className={styles.highlight}>Языки</span>
            <br />
            для реальной жизни
          </h1>
          <Button type="primary" size="large" className={styles.heroButton}>
            Учиться бесплатно
          </Button>
          <div className={styles.trustpilot}>
            <Rate disabled defaultValue={5} count={6} style={{color: "#00b96b"}} />
            <span className={styles.trustpilotText}>
              Замечательно <span className={styles.reviewsCount}>16,446 отзывов на</span> <a href='https://ru.trustpilot.com/' className={styles.trustpilotLink}>Trustpilot</a>
            </span>
          </div>
        </div>
        <Card className={styles.languageCard}>
          <h3 className={styles.languageCardTitle}>Я хочу изучать:</h3>
          <List
            dataSource={languages}
            grid={{ gutter: 16, column: 3 }}
            renderItem={(item) => (
              <List.Item>
                <div className={styles.languageItem}>
                  <Image
                    src={item.flag}
                    alt={item.name}
                    width={32}
                    height={32}
                    className={styles.languageFlag}
                  />
                  <span className={styles.languageName}>{item.name}</span>
                </div>
              </List.Item>
            )}
          />
        </Card>
      </section>

      <section className={styles.statistics}>
        <h2 className={styles.sectionTitle}>Немного статистики</h2>
        <div className={styles.statisticsGrid}>
          {statistics.map((stat) => (
            <Statistic
              key={stat.title}
              prefix={stat.icon}
              title={stat.title}
              value={stat.value}
              suffix={stat.suffix}
              style={{color: stat.color}}
              className={styles.statisticItem}
            />
          ))}
        </div>
      </section>

      {/* <section className={styles.reviewsSection}>
        <h2 className={styles.sectionTitle}>Отзывы</h2>
        <div className={styles.reviewsGrid}>
          {reviews.map((review) => (
            // <ReviewCard key={review.author} review={review} />
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default HomeView;