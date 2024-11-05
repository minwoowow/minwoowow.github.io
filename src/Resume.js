import React from 'react'
import { Link } from 'react-router-dom'

export default function Resume() {
  return (
    <div className='flex flex-col w-1/2 mt-16 font-["Paperlogy-6SemiBold"]'>
      <div className="absolute bottom-28 right-[450px]">
        <button className="fixed w-40 h-12 border-2 rounded-lg bg-black text-white transition-all duration-300 hover:bg-black/70">
          <Link to='/'>포트폴리오 바로가기</Link>
          <span class="absolute -top-1 -right-1 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
          </span>
        </button>
      </div>
      <div className='flex border-b-2 border-black pb-5'>
        <div className='flex flex-col w-4/5 mt-4 space-y-2'>
          <p className='text-3xl mb-2'>장민우</p>
          <p><span className='text-gray-500 mr-2'>생년월일 :</span> 1982년 11월 27일</p>
          <p><span className='text-gray-500 mr-2'>휴대폰 :</span> 010-5583-9658</p>
          <p><span className='text-gray-500 mr-2'>이메일 :</span> jmwoo1127@gmail.com</p>
          <p><span className='text-gray-500 mr-2'>GITHUB :</span> https://github.com/minwoowow</p>
          <p><span className='text-gray-500 mr-2'>주소 :</span> 경남 김해시 율하5로 14, 301동 208호(율하2지구LH3단지아파트)</p>
        </div>
        <div className='w-44'>
          <img src={require("./assets/images/portrait.jpg")} alt='증명사진' className='p-1'/>
        </div>
      </div>

      <div className='flex flex-col mt-14 border-b-2 border-black'>
        <p className='text-4xl mb-5'>경력</p>
        <hr/>

        <div className='flex mt-10'>
          <div className='w-1/4'>
            <p className='text-xl text-gray-600'>2020.02 ~ 2022.11</p>
          </div>
          <div className='flex flex-col w-3/4 pl-20 mb-10'>
            <p className='text-2xl mb-5'>쿠팡풀필먼트서비스<span className='text-sm text-gray-500 ml-8'>Operation Team / 매니저 / 물류관리</span></p>
            <p>프레쉬 상품 김해센터, 쿠팡 자회사</p>
            <ul className='font-["PaperLogy-4Regular"] space-y-2'>
              <li><span className='text-sky-600 mr-2'>▪</span>WMS 기반 데이터 가공 및 분석</li>
              <li><span className='text-sky-600 mr-2'>▪</span>물동량 Forcast 및 Manpower Plan 수립</li>
              <li><span className='text-sky-600 mr-2'>▪</span>입출고에서 분류 및 적재에 이르는 전반적인 물류 프로세스 최적화</li>
              <li><span className='text-sky-600 mr-2'>▪</span>라인밸런싱 등을 위한 효율적인 Layout 개선활동</li>
            </ul>
          </div>
        </div>

        <div className='flex mt-10'>
          <div className='w-1/4'>
            <p className='text-xl text-gray-600'>2018.04 ~ 2020.02</p>
          </div>
          <div className='flex flex-col w-3/4 pl-20 mb-10'>
            <p className='text-2xl mb-5'>농협김해유통센터<span className='text-sm text-gray-500 ml-8'>소매사업부 / 대리 / 물류관리</span></p>
            <p>농수산물 및 공산품 판매, 농협중앙회</p>
            <ul className='font-["PaperLogy-4Regular"] space-y-2'>
              <li><span className='text-sky-600 mr-2'>▪</span>판매량 예측 기반 발주 및 재고관리</li>
              <li><span className='text-sky-600 mr-2'>▪</span>농산물 입고 검수 및 서류작업</li>
              <li><span className='text-sky-600 mr-2'>▪</span>발주처 가격협상 및 조율</li>
              <li><span className='text-sky-600 mr-2'>▪</span>물류 동선 최적화 개선활동</li>
            </ul>
          </div>
        </div>
        <hr/>

        <div className='flex mt-10'>
          <div className='w-1/4'>
            <p className='text-xl text-gray-600'>2016.06 ~ 2017.07</p>
          </div>
          <div className='flex flex-col w-3/4 pl-20 mb-10'>
            <p className='text-2xl mb-5'>백광엔지니어링<span className='text-sm text-gray-500 ml-8'>영업관리부 / 과장 / 영업관리</span></p>
            <p>육상플랜트 액체탱크 설비 업체</p>
            <ul className='font-["PaperLogy-4Regular"] space-y-2'>
              <li><span className='text-sky-600 mr-2'>▪</span>육상플랜트 액체탱크 설비 국내 및 해외영업 관리</li>
              <li><span className='text-sky-600 mr-2'>▪</span>국내 거래처 관리</li>
              <li><span className='text-sky-600 mr-2'>▪</span>해외수출 Order 진행관리</li>
              <li><span className='text-sky-600 mr-2'>▪</span>FTA 원산지 관리</li>
            </ul>
          </div>
        </div>
        <hr/>

        <div className='flex mt-10'>
          <div className='w-1/4'>
            <p className='text-xl text-gray-600'>2014.03 ~ 2016.04</p>
          </div>
          <div className='flex flex-col w-3/4 pl-20 mb-10'>
            <p className='text-2xl mb-5'>정아정밀<span className='text-sm text-gray-500 ml-8'>해외영업팀 / 대리 / 무역사무</span></p>
            <p>자동차 부품회사(바디, 프레임), GM 1차 벤더</p>
            <ul className='font-["PaperLogy-4Regular"] space-y-2'>
              <li><span className='text-sky-600 mr-2'>▪</span>자동차 부품 해외수출 Order 진행관리</li>
              <li><span className='text-sky-600 mr-2'>▪</span>포워더 컨택 및 문서수발</li>
              <li><span className='text-sky-600 mr-2'>▪</span>생산 및 물류 스케쥴 관리</li>
              <li><span className='text-sky-600 mr-2'>▪</span>FTA 원산지 전담관리자</li>
            </ul>
          </div>
        </div>
        <hr/>

        <div className='flex mt-10'>
          <div className='w-1/4'>
            <p className='text-xl text-gray-600'>2011.03 ~ 2014.02</p>
          </div>
          <div className='flex flex-col w-3/4 pl-20 mb-10'>
            <p className='text-2xl mb-5'>태흥시스템<span className='text-sm text-gray-500 ml-8'>영업부 / 주임 / 무역사무</span></p>
            <p>공장자동화 설비 업체</p>
            <ul className='font-["PaperLogy-4Regular"] space-y-2'>
              <li><span className='text-sky-600 mr-2'>▪</span>FA설비 해외수출입 사무업무</li>
              <li><span className='text-sky-600 mr-2'>▪</span>바이어 메일 송수신 및 Quotation 대응</li>
              <li><span className='text-sky-600 mr-2'>▪</span>Invoice, Packing List 작성</li>
              <li><span className='text-sky-600 mr-2'>▪</span>포워더 부킹 및 선적서류 관리</li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className='flex flex-col mt-14 border-b-2 border-black'>
        <p className='text-4xl mb-5'>학력</p>
        <hr/>

        <div className='flex mt-10'>
          <div className='w-1/4'>
            <p className='text-xl text-gray-600'>2009.03 ~ 2011.02</p>
            <p className='text-gray-400'>편입▪졸업</p>
          </div>
          <div className='flex flex-col w-3/4 pl-20 mb-10'>
            <p className='text-2xl mb-5'>창원대학교<span className='text-sm text-gray-500 ml-8'>경제학과</span></p>
            <p><span className='text-gray-500 mr-4'>지역</span>경남<span className='text-gray-300 mx-6'>|</span><span className='text-gray-500 mr-4'>학점</span>3.47 / 4.5</p>
          </div>
        </div>

        <div className='flex mt-10'>
          <div className='w-1/4'>
            <p className='text-xl text-gray-600'>2002.03 ~ 2007.02</p>
            <p className='text-gray-400'>중퇴</p>
          </div>
          <div className='flex flex-col w-3/4 pl-20 mb-10'>
            <p className='text-2xl mb-5'>동명대학교<span className='text-sm text-gray-500 ml-8'>멀티미디어공학과</span></p>
            <p><span className='text-gray-500 mr-4'>지역</span>부산<span className='text-gray-300 mx-6'>|</span><span className='text-gray-500 mr-4'>학점</span>3.74 / 4.5</p>
          </div>
        </div>
        <hr/>

        <div className='flex mt-10'>
          <div className='w-1/4'>
            <p className='text-xl text-gray-600'>1998.03 ~ 2001.02</p>
            <p className='text-gray-400'>졸업</p>
          </div>
          <div className='flex flex-col w-3/4 pl-20 mb-10'>
            <p className='text-2xl mb-5'>창원중앙고등학교<span className='text-sm text-gray-500 ml-8'>이과계열</span></p>
            <p><span className='text-gray-500 mr-4'>지역</span>경남</p>
          </div>
        </div>
        <hr/>
      </div>

      <div className='flex flex-col mt-14 border-b-2 border-black'>
        <p className='text-4xl mb-5'>교육</p>
        <hr/>

        <div className='flex mt-10'>
          <div className='w-1/4'>
            <p className='text-xl text-gray-600'>2024.02~2024.07</p>
          </div>
          <div className='flex flex-col w-3/4 pl-20 mb-10'>
            <p className='text-2xl mb-5'>부산대학교 산학협력단<span className='text-sm text-gray-500 ml-8'>K-Digital Training</span></p>
            <p className='text-lg mb-1'>🔹 훈련과정명</p>
            <p className='font-["PaperLogy-4Regular"] mb-3'>AI활용 빅데이터분석 풀스택 웹서비스 SW 개발자 양성과정 6기</p>
            <p className='text-lg mb-1'>🔹 교육내용</p>
            <ul className='font-["PaperLogy-4Regular"] space-y-2'>
              <li><span className='text-sky-600 mr-2'>▪</span>Backend : Java, Spring Boot, MySQL</li>
              <li><span className='text-sky-600 mr-2'>▪</span>Frontend : JavaScript, React, HTML+CSS</li>
              <li><span className='text-sky-600 mr-2'>▪</span>Data Analysis : Python, Pytorch</li>
              <li><span className='text-sky-600 mr-2'>▪</span>Team Project : AI 학습모델 웹서비스 프로젝트</li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>

      <div className='flex flex-col mt-14 border-b-2 border-black'>
        <p className='text-4xl mb-5'>자격증</p>
        <hr/>

        <div className='flex mt-10'>
          <div className='w-1/4'>
            <p className='text-xl text-gray-600'>2024.06</p>
          </div>
          <div className='flex flex-col w-3/4 pl-20 mb-10'>
            <p className='text-2xl mb-5'>정보처리기사<span className='text-sm text-gray-500 ml-8'>한국산업인력공단</span></p>
            <p>필기합격<span className='text-sm text-gray-500 ml-8'>2024.06.05</span></p>
            <p>실기시행<span className='text-sm text-gray-500 ml-8'>2024.10.20 (12월 발표예정)</span></p>
          </div>
        </div>
      </div>

      <div className='flex flex-col mt-14 border-b-2 border-black'>
        <p className='text-4xl mb-5'>병역</p>
        <hr/>

        <div className='flex mt-10'>
          <div className='w-1/4'>
            <p className='text-xl text-gray-600'>2003.01 ~ 2005.03</p>
          </div>
          <div className='flex flex-col w-3/4 pl-20 mb-10'>
            <p className='text-2xl mb-5'>군필<span className='text-sm text-gray-500 ml-8'>사회복무요원 / 소집해제</span></p>
          </div>
        </div>
      </div>

      <div className='flex flex-col mt-14 border-b-2 border-black pb-10'>
        <p className='text-4xl mb-5'>자기소개</p>
        <hr/>
        <div className='font-["PaperLogy-4Regular"] mt-10 space-y-5'>
          <p>사회생활을 시작하면서 사람들과의 만남에서 항상 역지사지를 되새겼고 그것은 지금까지도 저의 행동양식의 근간을 이루고 있습니다. 개인이 평상시에 쌓아왔던 배려나 예의와 같은 에티켓은 한순간에 습득할 수 없는 것이라 생각합니다. 공공장소에서의 예절, <span className='font-bold'>직장상사나 동료와의 원활한 관계는 조직사회에서 가장 기본이 되는 것이고 제가 가장 잘할 수 있는 것</span>이기도 합니다.</p>
          <p>어떤 상황에서도 <span className='font-bold'>낙관적으로 사고하고 유연성있게 행동하는 것 또한 저의 장점입니다</span>. 사회생활을 하면서 여러 가지 상황에 부딪히며 경험해온 문제해결 및 대처능력은 새로운 업무수행 상황에서 많은 도움이 될 것이라 생각합니다.</p>
          <p>K-Digital Training 과정을 통해 <span className='font-bold'>문제해결을 위한 창의적인 접근방식을 배우면서 코딩의 즐거움</span>을 느꼈습니다.
          처음 팀 프로젝트를 진행하며 백엔드와 프론트엔드를 연결하는 순간의 희열을 느끼며 개발의 매력에 빠졌고, 특히 팀원들과 소통하며 프로젝트를 진행했던 과정은 너무나 즐거운 경험이었습니다. 이 경험을 바탕으로 개발에 대한 열정과 지속적인 배움에 대한 의지를 가지고 웹개발자로 성장하고 싶습니다.</p>
        </div>
      </div>
    </div>
  )
}
