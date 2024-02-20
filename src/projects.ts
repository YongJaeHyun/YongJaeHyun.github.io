const projects = [
  {
    id: 0,
    imgLength: 11,
    title: "장애인 구인구직 웹사이트",
    numOfPeople: 5,
    roleInfo: "frontend: 2명, backend: 3명",
    githubURL:
      "https://github.com/YongJaeHyun/job-search-web-for-disabled-person?tab=readme-ov-file",
    deployURL: "https://f5-workable.github.io/",
    introHTML:
      '<p class="mb-3"><b>장애인과 기업 사이에서 구인구직 중개를 해주는 웹사이트.</b></p>\
        <p class="mb-3">"웹킷640"이라는 학교 내에서 진행한 <span class="text-blue-500">웹 개발 지역인재 양성 프로그램에서 팀 프로젝트로 기획 및 개발한 플랫폼</span>입니다.</p>\
        <p class="mb-3">저는 이 프로젝트에서 프론트엔드를 맡아 <span class="text-blue-500">홈, 검색, 공고 상세, 북마크, 지원(자) 현황 페이지를 개발</span>했으며, <span class="text-blue-500">프론트엔드 전체 소스코드 관리 및 CI/CD 관리</span> 역할도 수행했습니다.</p>\
        <p class="mb-3"><span class="text-blue-500">공공데이터를 활용</span>하여 장애인 및 기업에 구인과 구직에 대한 안정적이고 신뢰성 있는 정보를 제공할 수 있도록 만들었습니다.</p>\
        <p class="mb-3">해당 사이트로 <span class="text-blue-500">팀프로젝트 경연 대회에서 우수상을 수상</span>하였습니다.</p>',
    mainFeatures: [
      "장애인과 기업 중개",
      "이력서 작성",
      "조건별 상세 검색",
      "검색 무한 스크롤",
      "지원 내역",
      "북마크",
      "공공 데이터 활용",
    ],
    skills: ["React", "JS", "TailwindCSS", "Github Pages"],
    startDate: "2023.05.02",
    endDate: "2024.05.30",
  },
  {
    id: 1,
    imgLength: 6,
    title: "포트폴리오 웹사이트",
    numOfPeople: 1,
    githubURL: "https://github.com/YongJaeHyun/YongJaeHyun.github.io",
    deployURL: "https://yongjaehyun.github.io/",
    introHTML:
      '<p class="mb-3"><b>포트폴리오 용도로 제작한 웹사이트입니다.</b></p>\
        <p class="mb-3">현재 개발 진행 중이며, 앞으로 지속적으로 업데이트 할 예정입니다.</p>',
    mainFeatures: [
      "자기 소개",
      "인적 사항",
      "기술 스택",
      "프로젝트 경험",
      "Github, Blog 링크",
    ],
    skills: ["React", "TS", "TailwindCSS", "Github Pages", "Github Action"],
    startDate: "2024.02.09",
    endDate: "2024.02.13",
  },
];

export default projects;
