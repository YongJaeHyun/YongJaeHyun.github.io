import { useState } from "react";
import MainSection from "../MainSection";
import SectionTitle from "../SectionTitle";
import Wrapper from "../Wrapper";
import ProjectSummaryCard from "../ProjectSummaryCard";

const Projects = () => {
  const [overlayId, setOverlayId] = useState<number | null>(null);

  return (
    <MainSection className="bg-purple-300 pt-24 relative">
      <Wrapper>
        <SectionTitle># Projects</SectionTitle>
        <div className="grid grid-cols-4 w-full gap-10">
          {[
            {
              id: 0,
              imgLength: 11,
              title: "장애인 구인구직 웹사이트",
              numOfPeople: 5,
              githubURL:
                "https://github.com/YongJaeHyun/job-search-web-for-disabled-person?tab=readme-ov-file",
              deployURL: "https://f5-workable.github.io/",
              introHTML:
                "<b>장애인과 기업 사이에서 구인구직 중개를 해주는 웹사이트입니다.</b><br />공공데이터를 활용하여 장애인 및 기업에 구인과 구직에 대한 안정적이고 신뢰성 있는 정보를 제공합니다.",
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
              imgLength: 2,
              title: "포트폴리오 웹사이트",
              numOfPeople: 1,
              githubURL: "https://github.com/YongJaeHyun/YongJaeHyun.github.io",
              deployURL: "https://yongjaehyun.github.io/",
              introHTML:
                "<b>포트폴리오 용도로 제작한 웹사이트입니다.</b><br />현재 개발 진행 중이며, 앞으로 지속적으로 업데이트 할 예정입니다.",
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
          ].map((project) => (
            <ProjectSummaryCard
              project={project}
              overlayId={overlayId}
              setOverlayId={setOverlayId}
            />
          ))}
        </div>
      </Wrapper>
    </MainSection>
  );
};

export default Projects;
