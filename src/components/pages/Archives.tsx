import MainSection from "../MainSection";
import SectionTitle from "../SectionTitle";
import Wrapper from "../Wrapper";

const Archives = () => {
  return (
    <MainSection className="bg-purple-300 pt-24">
      <Wrapper>
        <SectionTitle># My Archives</SectionTitle>
        <div className="flex h-80 gap-5">
          <div className="w-full h-full bg-white border-t-8 border-black rounded-lg px-6 py-3 shadow-lg">
            <h4 className="text-3xl font-semibold">Github</h4>
            <a
              href="https://github.com/YongJaeHyun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              https://github.com/YongJaeHyun
            </a>
            <p className="mt-5">지금까지 해온 프로젝트들을 관리하고 있는 저장소입니다.</p>
          </div>
          <div className="w-full h-full bg-white border-t-8 border-black rounded-lg px-6 py-3 shadow-lg">
            <h4 className="text-3xl font-semibold">Tech Blog</h4>
            <a
              href="https://lazyong.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {" "}
              https://lazyong.tistory.com/
            </a>
            <p className="mt-5">
              제가 공부하고 배운 것들을 하나하나 정리해 공유하는 지식 저장소입니다.
            </p>
          </div>
        </div>
      </Wrapper>
    </MainSection>
  );
};

export default Archives;
