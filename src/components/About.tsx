import MainSection from "./MainSection";
import Wrapper from "./Wrapper";

const About = () => {
  return (
    <MainSection className="bg-purple-300 pt-24">
      <Wrapper>
        <h3 className="text-3xl font-semibold"># About me</h3>
        <div className="overflow-hidden w-40 h-40 rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/96125546?s…00&u=40be63bde5de958dc78b000f88c5c9d953acd08a&v=4"
            alt="프로필 이미지"
          />
        </div>
      </Wrapper>
    </MainSection>
  );
};

export default About;
