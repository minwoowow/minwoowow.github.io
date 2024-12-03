import { faGithub, faJava, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {

  const titleStyle = "text-5xl font-bold bg-gradient-to-r from-sky-700 to-cyan-100";
  const subTitleStyle = "text-3xl font-bold mt-10";
  const listStyle = "list-inside list-disc marker:text-sky-700 mt-4";

  return (
    <div className="flex flex-col w-2/5 mt-16 font-[Paperlogy-8ExtraBold]">
      <div className="absolute bottom-28 right-[450px]">
        <button className="fixed w-40 h-12 border-2 rounded-lg bg-black text-white transition-all duration-300 hover:bg-black/70">
          <Link to='/resume'>이력서 바로가기</Link>
          <span class="absolute -top-1 -right-1 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
          </span>
        </button>
      </div>
      <div className="text-6xl font-bold leading-tight">
        안녕하세요!
        <br />
        풀스택 개발자를
        <br />
        꿈꾸고 있는 장민우입니다.
      </div>
      <div className="text-2xl font-bold mt-16">
        K-Digital Training 과정을 통해 문제해결을 위한 창의적인 접근방식을
        배우면서 코딩의 즐거움을 느꼈습니다.
        <br />
        처음 팀 프로젝트를 진행하며 백엔드와 프론트엔드를 연결하는 순간의 희열을
        느끼며 개발의 매력에 빠졌고, 특히 팀원들과 소통하며 프로젝트를 진행했던
        과정이 너무나 즐거운 경험이었습니다.
        <br />
        늦은 나이에 찾은 적성인 만큼, 누구보다 강한 집념과 열정을 가지고
        개발자라는 꿈을 향해 달려가고 있습니다.
      </div>
      <div className="flex flex-col items-end mt-10">
        <div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} size="xl" className="mr-5" />
            <a href="mailto:jmwoo1127@gmail.com" className="rounded-sm transition ease-in-out duration-500 hover:bg-sky-300 hover:text-white">jmwoo1127@gmail.com</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} size="xl" className="mr-5"/>
            <a href="https://github.com/minwoowow" className="rounded-sm transition ease-in-out duration-500 hover:bg-sky-300 hover:text-white">https://github.com/minwoowow</a>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className={titleStyle}>Education</div>
        <div className="flex flex-col mt-6">
          <span className="font-bold text-lg">부산대학교 K-Digital AI활용 빅데이터분석 풀스택웹서비스 SW 개발자 양성과정 6기</span>
          <span className="font-bold text-lg text-gray-500">2024.02 - 2024.07</span>
          <div className="mt-6">
          <p className="font-bold text-lg">교육내용</p>
            <ul className={listStyle}>
              <li>Backend : Java, Data Structure, Servlet&JSP, Spring Boot, MySQL</li>
              <li>Frontend : HTML+CSS, JavaScript, React, Figma</li>
              <li>Data Analysis : Python, PyTorch, TensorFlow</li>
              <li>Team Project : AI학습모델 웹서비스 프로젝트</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className={titleStyle}>Skills</div>
        <div className="flex flex-col">
          <p className={subTitleStyle}>
            <FontAwesomeIcon icon={faJava} className="mr-3" />
            Java
          </p>
          <ul className={listStyle}>
            <li>OOP의 특징을 통해 코드의 재사용성과 유지보수성을 높이는 개념을 이해하고 있습니다.</li>
            <li>배열, 리스트, 스택, 큐 등을 활용하여 데이터 삽입, 삭제, 검색을 구현할 수 있습니다.</li>
            <li>문제해결을 위한 알고리즘을 도출하는 것에 매우 흥미를 느끼고 꾸준히 학습하고 있습니다.</li>
            <li>Dijkstra 알고리즘을 활용해 부산시 지하철 최단경로 탐색을 구현했습니다.</li>
          </ul>
          <p className={subTitleStyle}>
            <FontAwesomeIcon icon={faJs} className="mr-3" />
            JavaScript
          </p>
          <ul className={listStyle}>
            <li>addEventListner를 사용하여 다양한 이벤트 처리를 구현할 수 있습니다.</li>
            <li>fetch, axios를 사용하여 API 통신 및 response 데이터를 처리할 수 있습니다.</li>
            <li>async, await를 사용하여 비동기 처리를 구현할 수 있습니다.</li>
          </ul>
          <p className={subTitleStyle}>
            <FontAwesomeIcon icon={faPython} className="mr-3" />
            Python
          </p>
          <ul className={listStyle}>
            <li>List, Tuple, Dictionary를 활용하여 함수 및 클래스를 구현할 수 있습니다.</li>
            <li>List Comprehension을 사용하여 코드를 간결화하는 것에 매우 흥미를 느낍니다.</li>
            <li>Numpy, Pandas를 활용하여 대규모 데이터셋 분석 및 가공을 구현할 수 있습니다.</li>
          </ul>
          <p className={subTitleStyle}>
            <SiSpringboot className="inline mr-3"/>
            Spring Boot
          </p>
          <ul className={listStyle}>
            <li>Spring Boot를 사용하여 팀 프로젝트 웹서버를 개발한 경험이 있습니다.</li>
            <li>Spring Security를 활용하여 사용자 인증 및 권한 관리를 구현할 수 있습니다.</li>
            <li>JPA를 사용하여 DB 매핑 및 CRUD 작업을 구현할 수 있습니다.</li>
          </ul>
          <p className={subTitleStyle}>
            <SiMysql className="inline mr-3" />
            MySQL
          </p>
          <ul className={listStyle}>
            <li>팀 프로젝트에서 기본적인 스키마 설계부터 데이터 전처리 후 입력까지 직접 구현했습니다.</li>
            <li>쿼리 최적화를 위해 서브쿼리 대신 JOIN을 사용하여 쿼리 튜닝을 한 경험이 있습니다.</li>
          </ul>
          <p className={subTitleStyle}>
            <FaReact className="inline mr-3"/>
            React
          </p>
          <ul className={listStyle}>
            <li>React를 사용하여 팀 프로젝트에서 Frontend를 개발한 경험이 있습니다.</li>
            <li>TailwindCSS를 사용하는데 능숙합니다.</li>
            <li>RouterProvider, CreateBrowserRouter를 사용하여 직관적이고 계층적인 라우팅을 구현했습니다.</li>
            <li>코드 재사용성을 위해 커스텀훅을 구현했습니다.</li>
          </ul>
        </div>
      </div>
      <div className="mt-16">
        <div className={titleStyle}>Project</div>
        <div className="flex flex-col">
          <div className={subTitleStyle}>부산시 지하철 실시간 혼잡도 알림 서비스</div>
          <img src={require("./assets/images/metronom_index_page.png")} alt="프로젝트 구현 이미지" className="mt-6" />
          <div>
            <p className="text-2xl font-bold mt-10 mb-4">핵심 아이디어</p>
            지하철 객실내 CCTV로 부터 받아온 이미지 데이터를 컴퓨터 비전을 활용하여 분석 후 실시간으로 혼잡도를 알려주는 서비스를 제공          
          </div>
          <div>
            <p className="text-2xl font-bold mt-10">맡은 역할 : Backend</p>
            <ul className={listStyle}>
              <li>데이터베이스 설계, REST API 구축, 비즈니스 로직구현</li>
              <li>최단경로 탐색 알고리즘 구현(Dijkstra Algorithm 활용)</li>
              <li>기술스택 : Spring Boot, MySQL</li>
            </ul>
          </div>
          <a href="https://github.com/minwoowow/project-backend-metronom" className="group relative w-44 h-8 mt-4 mb-10 text-sm bg-black text-white hover:text-black hover:font-bold">
            <span className="z-40 ease-in-out absolute left-0 bottom-0 w-0 h-full bg-sky-300 transition-all duration-700 group-hover:w-full"></span>
            <span className="z-50 absolute left-4 top-1.5">자세히 보기 ▶ GITHUB</span>
          </a>
        </div>
        <hr />
        <div className="flex flex-col h-full">
          <p className={subTitleStyle}>AI기반 이미지 분석을 활용한 의류 추천 서비스</p>
          <img src={require("./assets/images/MainPage.png")} alt="프로젝트 구현 이미지" className="mt-6" />
          <div>
            <p className="text-2xl font-bold mt-10 mb-4">핵심 아이디어</p>
            인지도 높은 인터넷 의류 쇼핑몰을 크롤링한 데이터셋을 딥러닝을 활용해 학습시키고 사용자가 의류 이미지를 입력하면
            학습된 모델에서 분석하여 가장 유사한 벡터값을 가지는 상품을 추천해주는 서비스를 제공
          </div>
          <div>
            <p className="text-2xl font-bold mt-10">맡은 역할 : Frontend</p>
            <ul className={listStyle}>
              <li>UX/UI 설계, 화면 레이아웃 설계, 페이지별 컴포넌트 제작</li>
              <li>기술스택 : React, TailwindCSS, JavaScript, HTML</li>
            </ul>
          </div>
          <a href="https://github.com/minwoowow/project-frontend-modamatch" className="group relative w-44 h-8 mt-4 text-sm bg-black text-white hover:text-black hover:font-bold">
            <span className="z-40 ease-in-out absolute left-0 bottom-0 w-0 h-full bg-sky-300 transition-all duration-700 group-hover:w-full"></span>
            <span className="z-50 absolute left-4 top-1.5">자세히 보기 ▶ GITHUB</span>
          </a>
        </div>
      </div>
      <div className="mt-16">
        <p className={titleStyle}>Experience</p>
        <p className="text-2xl font-bold mt-10 mb-4">다양한 산업에서의 9년 경력</p>
        제조업에서 4년, 유통/물류 분야에서 5년 동안 다양한 실무 경험을 쌓았습니다.
        이를 통해 프로젝트 관리, 프로세스 최적화, 효율적인 문제 해결능력을 기르게 되었으며,
        이러한 경험은 개발자로서 회사의 요구에 신속하고 유연하게 대응하는 데 큰 강점이 될 것입니다.
        <p className="text-2xl font-bold mt-10 mb-4">문제 해결 및 커뮤니케이션</p>
        다양한 산업에서 쌓은 경험을 통해 복잡한 문제를 신속하고 효과적으로 해결하는 능력을 갖추었으며,
        다양한 배경의 팀원들과 원활하게 소통하고 협업할 수 있습니다.
        <p className="text-2xl font-bold mt-10 mb-4">다양한 도메인 지식과 응용력</p>
        제조업과 유통/물류 분야에서 쌓은 경험을 통해 각 산업의 특성과 도메인 지식에 대한 깊은 이해를 가지고 있습니다.
        이를 기반으로 ERP, MES, WMS 등과 같은 각 산업별 시스템에 대한 실질적인 요구사항을 명확히 파악하여
        시스템을 개발하는데 유용한 인사이트를 제공할 수 있습니다.
      </div>      
    </div>   
  );
}
