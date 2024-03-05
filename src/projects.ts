const projects = [
  {
    id: 0,
    imgLength: 13,
    hasVideo: true,
    title: "장애인 구인구직 웹사이트",
    numOfPeople: 5,
    roleInfo: "FE: 2명, BE: 3명",
    githubURL:
      "https://github.com/YongJaeHyun/job-search-web-for-disabled-person?tab=readme-ov-file",
    deployURL: "https://f5-workable.github.io/",
    content:
      '<p class="mb-2"><b>장애인과 기업 사이에서 구인구직 중개를 해주는 웹사이트.</b></p>\
        <p class="mb-2">"웹킷640"이라는 학교 내에서 진행한 <span class="text-blue-600">웹 개발 지역인재 양성 프로그램에서 팀 프로젝트로 기획 및 개발한 플랫폼</span>입니다.</p>\
        <p class="mb-2">저는 이 프로젝트에서 프론트엔드를 맡아 <span class="text-blue-600">장애인과 기업 양측의 홈, 검색, 공고 상세, 북마크, 희망 근무지, 지원 현황 페이지를 개발</span>했으며, <span class="text-blue-600">프론트엔드 전체 소스코드 관리 및 CI/CD 관리</span> 역할을 수행했습니다.</p>\
        <p class="mb-2"><span class="text-blue-600">공공데이터를 활용</span>하여 장애인 및 기업에 구인과 구직에 대한 안정적이고 신뢰성 있는 정보를 제공할 수 있도록 만들었습니다.</p>\
        <p class="mb-2">해당 사이트로 <span class="text-blue-600">팀프로젝트 경연 대회에서 우수상을 수상</span>하였습니다.</p>',
    significance:
      '<p class="mb-2">검색 시 <span class="text-blue-600">UX를 고려하여, 일반적인 페이징이 아닌 무한 스크롤과 스켈레톤 UI를 적용</span>해 보았습니다. 이를 통해, 팀원들로부터 "훨씬 보기 편하다"라는 피드백을 받을 수 있었습니다.</p>\
      <p class="mb-2">공고 상세 페이지에서, 기업의 위치를 직관적으로 보여주기 위해 <span class="text-blue-600">카카오맵 API를 활용</span>했습니다. 또한 해당 기업에 대한 통계 자료를 한눈에 볼 수 있도록 하기 위해 <span class="text-blue-600">통계 자료를 그래프로 시각화</span> 했습니다.</p>',
    skills: ["React", "JS", "TailwindCSS", "Github Pages"],
    startDate: "2023.05.02",
    endDate: "2023.05.30",
  },
  {
    id: 1,
    imgLength: 6,
    hasVideo: false,
    title: "포트폴리오 웹사이트",
    numOfPeople: 1,
    githubURL: "https://github.com/YongJaeHyun/YongJaeHyun.github.io",
    deployURL: "https://yongjaehyun.github.io/",
    content:
      '<p class="mb-2"><b>포트폴리오 용도로 제작한 웹사이트입니다.</b></p>\
      <p class="mb-2"><span class="text-blue-600">프론트엔드 개발자로서, "중요한 내용들을 전달하면서 몰입감 있는 포트폴리오를 제작해달라"는 요구사항을 받았을 때 어떻게 만들 것인지를 생각하며 만들었습니다.</span></p>\
        <p class="mb-2"><span class="text-blue-600">현재는 데스크탑을 타겟으로 개발 완료 되었으며, 반응형으로도 개발 중</span>입니다.</p>\
        <p class="mb-2">앞으로 지속적으로 업데이트 할 예정입니다.</p>',
    significance:
      '<p class="mb-2">첫 화면의 <span class="text-blue-600">Typing 애니메이션과</span> 스크롤을 통해 한 슬라이드씩 이동하는 <span class="text-blue-600">Slide 애니메이션을 Custom Hook을 이용해 직접 구현</span>했습니다.</p>\
      <p class="mb-2"><span class="text-blue-600">마우스 위치에 따라 입체감 있게 보이도록 하는 3D 카드 컴포넌트를 제작</span>했습니다.</p>\
      <p class="mb-2">이러한 장치들을 통해 각각의 슬라이드에 대한 몰입을 높이고자 노력했습니다.</p>',
    skills: ["React", "TS", "TailwindCSS", "Github Pages", "Github Action"],
    startDate: "2024.02.09",
    endDate: "2024.02.13",
  },
];

export default projects;
