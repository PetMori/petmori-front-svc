"use client";
import { useEffect, useState } from "react";
import "./landing.css";
import Image from "next/image";
import Thumbnail from "../../../public/Thumbnail.png";
import MonitoringExample from "../../../public/monitoring.png";
import Bell from "../../../public/bell.png";
import { FaDog } from "react-icons/fa6";
import CuttingDog from "../../../public/cuttingDog.jpg";
import Sudog from "../../../public/sudog.jpg";
import WhiteDog from "../../../public/whitedog.jpg";
import PartyDog from "../../../public/partyDog.jpg";
import DogBack from "../../../public/dogBack.jpg";
import DogDay from "../../../public/dogDay.jpg";
import {
  Scissors,
  Dog,
  Lightbulb,
  Star,
  HelpCircle,
  MapPin,
  Droplets,
  Users,
  PawPrint,
  ContactIcon,
} from "lucide-react";

const Landing = () => {
  const [currentTab, setCurrentTab] = useState("magazine");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(!window.matchMedia("(min-width: 768px)").matches);
    };

    checkMobile(); // 초기 체크
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const switchTab = (tab: string) => {
    setCurrentTab(tab);
  };

  const renderCommunityContent = () => {
    switch (currentTab) {
      case "freeboard":
        return (
          <div className="freeboard-list">
            <div className="freeboard-item">
              <div className="freeboard-content">
                <h3>
                  <span className="title-text">우리 강아지 첫 미용 후기</span>
                  <div className="tag-list">
                    <span className="tag tag-grooming">
                      <Scissors size={16} strokeWidth={2.5} />
                    </span>
                    <span className="tag tag-small">
                      <Dog size={16} strokeWidth={2.5} />
                    </span>
                  </div>
                </h3>
                <p>
                  처음으로 미용실에 맡겼는데 실시간으로 보니까 정말 안심이
                  되더라고요. 미용사님도 친절하시고 우리 강아지도 스트레스 없이
                  잘 받았어요.
                </p>
                <div className="freeboard-meta">
                  <span>보호자123</span>
                  <span>•</span>
                  <span>2시간 전</span>
                  <span>•</span>
                  <span>댓글 24</span>
                  <span>•</span>
                  <span>조회 156</span>
                </div>
              </div>
            </div>

            <div className="freeboard-item">
              <div className="freeboard-content">
                <h3>
                  <span className="title-text">
                    실시간 모니터링 정말 좋네요
                  </span>
                  <div className="tag-list">
                    <span className="tag tag-review">
                      <Star size={16} strokeWidth={2.5} />
                    </span>
                    <span className="tag tag-medium">
                      <Users size={16} strokeWidth={2.5} />
                    </span>
                  </div>
                </h3>
                <p>
                  다른 앱들은 맡기고 기다리기만 했는데, 여기는 실시간으로 볼 수
                  있어서 너무 좋아요. 우리 아이가 편안하게 있는 모습 보니
                  안심되고요.
                </p>
                <div className="freeboard-meta">
                  <span>냥냥이</span>
                  <span>•</span>
                  <span>1일 전</span>
                  <span>•</span>
                  <span>댓글 45</span>
                  <span>•</span>
                  <span>조회 523</span>
                </div>
              </div>
            </div>
            <div className="freeboard-item">
              <div className="freeboard-content">
                <h3>
                  <span className="title-text">미용실 추천해주세요!</span>
                  <div className="tag-list">
                    <span className="tag tag-question">
                      <HelpCircle size={16} strokeWidth={2.5} />
                    </span>
                    <span className="tag tag-location">
                      <MapPin size={16} strokeWidth={2.5} />
                    </span>
                  </div>
                </h3>
                <p>
                  강남역 근처에 실시간 모니터링 되는 미용실 있나요? 이번에 처음
                  미용 맡기려고 하는데 걱정이 많아서요.
                </p>
                <div className="freeboard-meta">
                  <span>초보집사</span>
                  <span>•</span>
                  <span>2일 전</span>
                  <span>•</span>
                  <span>댓글 8</span>
                  <span>•</span>
                  <span>조회 67</span>
                </div>
              </div>
            </div>
            <div className="freeboard-item">
              <div className="freeboard-content">
                <h3>
                  <span className="title-text">대형견 목욕 팁 있나요?</span>
                  <div className="tag-list">
                    <span className="tag tag-bath">
                      <Droplets size={16} strokeWidth={2.5} />
                    </span>
                    <span className="tag tag-large">
                      <PawPrint size={16} strokeWidth={2.5} />
                    </span>
                    <span className="tag tag-tip">
                      <Lightbulb size={16} strokeWidth={2.5} />
                    </span>
                  </div>
                </h3>
                <p>
                  골든리트리버 키우는데 집에서 목욕시키기가 너무 힘들어요.
                  미용실에서는 어떻게 하는지 궁금합니다.
                </p>
                <div className="freeboard-meta">
                  <span>골댕이맘</span>
                  <span>•</span>
                  <span>3일 전</span>
                  <span>•</span>
                  <span>댓글 15</span>
                  <span>•</span>
                  <span>조회 234</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "magazine":
        return (
          <div className="magazine-grid">
            <div className="magazine-card">
              <Image
                src={CuttingDog}
                alt="봄철 반려동물 털 관리법"
                className="magazine-image"
                priority
              />
              <div className="magazine-overlay">
                <h3>봄철 반려동물 털 관리법</h3>
                <p>환절기 털갈이 시즌, 똑똑한 관리 노하우</p>
              </div>
            </div>
            <div className="magazine-card">
              <Image
                src={WhiteDog}
                alt="견종별 미용 스타일 가이드"
                className="magazine-image"
                priority
              />
              <div className="magazine-overlay">
                <h3>견종별 미용 스타일 가이드</h3>
                <p>우리 아이에게 어울리는 스타일 찾기</p>
              </div>
            </div>
            <div className="magazine-card">
              <Image
                src={Sudog}
                alt="미용과 건강관리"
                className="magazine-image"
                priority
              />
              <div className="magazine-overlay">
                <h3>미용과 건강관리의 연관성</h3>
                <p>정기 미용이 건강에 미치는 영향</p>
              </div>
            </div>
          </div>
        );

      case "events":
        return (
          <div className="events-grid">
            <div className="event-card">
              <Image
                src={PartyDog}
                alt="2025 서울 펫 페스티벌"
                className="event-image"
                priority
              />
              <div className="event-info">
                <div className="event-date">
                  <span className="event-month">AUG</span>
                  <span className="event-day">25-27</span>
                </div>
                <div className="event-details">
                  <h3>2025 서울 펫 페스티벌</h3>
                  <p className="event-location">서울 잠실 종합운동장</p>
                </div>
              </div>
            </div>
            <div className="event-card">
              <Image
                src={DogBack}
                alt="여름 미용 컨테스트"
                className="event-image"
                priority
              />
              <div className="event-info">
                <div className="event-date">
                  <span className="event-month">AUG</span>
                  <span className="event-day">1-31</span>
                </div>
                <div className="event-details">
                  <h3>여름 미용 컨테스트</h3>
                  <p className="event-location">온라인 참여</p>
                </div>
              </div>
            </div>
            <div className="event-card">
              <Image
                src={DogDay}
                alt="가을 펫 파티"
                className="event-image"
                priority
              />
              <div className="event-info">
                <div className="event-date">
                  <span className="event-month">OCT</span>
                  <span className="event-day">15</span>
                </div>
                <div className="event-details">
                  <h3>가을 펫 파티</h3>
                  <p className="event-location">한강 뚝섬공원</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div
            className="hero-content"
            style={{ paddingLeft: isMobile ? "0px" : "50px" }}
          >
            <div className="hero-text">
              <h1>
                우리 아이의 미용,
                <br />
                이제 안심하고 맡기세요
              </h1>
              <p className="subtitle">
                실시간 영상으로 확인하는 반려동물 미용 서비스
              </p>
              <div className="highlight">
                🎥 실시간 모니터링으로 언제나 안심
              </div>
              <div className="cta-buttons ">
                <a href="#monitoring" className="btn btn-primary">
                  <FaDog />
                  서비스 둘러보기
                </a>
                <a
                  href="mailto:dldydtn84@gmail.com"
                  className="btn btn-secondary"
                >
                  <ContactIcon /> 문의하기
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      flexDirection: "column",
                      justifyContent: "end",
                    }}
                  >
                    <Image
                      src={Thumbnail}
                      alt="Thumbnail Icon"
                      className="absolute bottom-0  flex w-full object-contain object-bottom rounded-b-[25px]"
                      priority
                    />
                  </div>
                  {/* <div className="live-indicator">● LIVE</div>
                  <div className="app-icon">🐕</div>
                  <h3>Petmori</h3>
                  <p>실시간으로 만나요!</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="monitoring" className="live-monitoring">
        <div className="container">
          <div
            className="monitoring-content "
            style={{
              paddingLeft: isMobile ? "0px" : "50px",
            }}
          >
            <div className="monitoring-text">
              <h2>
                <span className="highlight-text">실시간 모니터링</span>
                으로 <br />
                언제나 안심
              </h2>
              <p>처음 맡기는 미용실이 걱정되시나요?</p>
              <p>우리 아이가 잘 지내고 있는지 궁금하시죠?</p>

              <ul className="monitoring-features">
                <li>실시간 영상으로 미용 과정 확인</li>
                <li>언제든 앱에서 바로 확인 가능</li>
                <li>미용사와의 실시간 소통</li>
                <li>완료 알림으로 픽업 타이밍까지</li>
              </ul>
            </div>
            <div className="flex w-full h-full justify-center">
              <div className="phone-mockup">
                <div className="phone-screen" style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      height: "20px",
                    }}
                  >
                    <Image
                      src={Bell}
                      className="w-full h-full"
                      alt="bell"
                      priority
                    />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      flex: "column",
                      paddingTop: "50px",
                      zIndex: 1,
                      overflow: "hidden",
                      borderRadius: "30px",
                    }}
                  >
                    <Image
                      src={MonitoringExample}
                      alt="실시간 모니터링 예시"
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features" id="features">
        <div className="container">
          <h2 className="section-title">간편하게 예약하고 이용해보세요! 🐾</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>스마트 미용실 찾기</h3>
              <p>
                지도와 목록으로 내 주변 미용실을 쉽게 찾고, 영업시간과 평점까지
                한눈에 확인하세요.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>간편 예약 시스템</h3>
              <p>
                날짜, 시간, 옵션을 선택하고 PayApp으로 간편하게 결제. 24시간
                전까지 무료 취소 가능해요.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📹</div>
              <h3>실시간 모니터링</h3>
              <p>
                우리 아이의 미용 과정을 실시간 영상으로 확인하며 안심하고 기다릴
                수 있어요.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>커뮤니티 & 리뷰</h3>
              <p>
                다른 반려인들의 후기를 보고, 우리 아이의 미용 경험도
                공유해보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="community">
        <div className="container">
          <h2 className="section-title">함께 만드는 반려동물 커뮤니티</h2>
          <div className="community-tabs">
            <div
              className={`tab-button ${
                currentTab === "freeboard" ? "active" : ""
              }`}
              onClick={() => switchTab("freeboard")}
            >
              자유게시판
            </div>
            <div
              className={`tab-button ${
                currentTab === "magazine" ? "active" : ""
              }`}
              onClick={() => switchTab("magazine")}
            >
              매거진
            </div>
            <div
              className={`tab-button ${
                currentTab === "events" ? "active" : ""
              }`}
              onClick={() => switchTab("events")}
            >
              행사정보
            </div>
          </div>

          <div className="community-content">{renderCommunityContent()}</div>
        </div>
      </section>

      <section className="service-start" id="service-start">
        <div className="container">
          <h2>
            Petmori와 함께
            <br />
            우리 아이의 미용을 시작해보세요
          </h2>
          <p>웹과 앱에서 모두 이용 가능한 Petmori 서비스를 곧 시작해보세요!</p>
          <div className="service-buttons">
            <a href="#" className="service-btn">
              <div className="service-icon">🌐</div>
              <div>
                <div style={{ fontSize: "0.8rem", opacity: 0.7 }}>Website</div>
                <div>출시 예정</div>
              </div>
            </a>
            <a href="#" className="service-btn">
              <div className="service-icon">📱</div>
              <div>
                <div style={{ fontSize: "0.8rem", opacity: 0.7 }}>
                  모바일 앱
                </div>
                <div>출시 예정</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Landing;
