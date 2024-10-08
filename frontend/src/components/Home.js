import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const HeroSection = styled.section`
  background-image: url("/images/hero-bg.jpg");
  background-size: cover;
  color: white;
  padding: 100px 0;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

const ServicesSection = styled.section`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`;

const ServiceCard = styled.div`
  width: 30%;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <Title>크리에이티브 디자인 에이전시</Title>
        <Subtitle>당신의 브랜드를 빛나게 만들어 드립니다</Subtitle>
        <Button>포트폴리오 보기</Button>
      </HeroSection>

      <ServicesSection>
        <ServiceCard>
          <img src="/images/web-design.png" alt="웹 디자인" />
          <h2>웹 디자인</h2>
          <p>최신 트렌드를 반영한 웹사이트 디자인</p>
        </ServiceCard>
        <ServiceCard>
          <img src="/images/branding.png" alt="브랜딩" />
          <h2>브랜딩</h2>
          <p>독특하고 기억에 남는 브랜드 아이덴티티 개발</p>
        </ServiceCard>
        <ServiceCard>
          <img src="/images/marketing.png" alt="디지털 마케팅" />
          <h2>디지털 마케팅</h2>
          <p>효과적인 온라인 마케팅 전략 수립 및 실행</p>
        </ServiceCard>
      </ServicesSection>
    </HomeContainer>
  );
}

export default Home;
