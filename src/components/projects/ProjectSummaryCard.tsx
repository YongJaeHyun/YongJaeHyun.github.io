interface IProjectSummaryCard {
  projectId: number;
  title: string;
  moveToTargetSlide: () => void;
}

const ProjectSummaryCard = ({ projectId, title, moveToTargetSlide }: IProjectSummaryCard) => {
  return (
    <div
      className="flex flex-col w-40 md:w-72 h-32 md:h-52 cursor-pointer mt-20 mx-auto"
      onClick={moveToTargetSlide}
    >
      <div className="h-full rounded-xl overflow-hidden border shadow-md mb-3">
        <img
          src={`/images/${projectId}/1.png`}
          alt="프로젝트 대표 이미지"
          className="h-full object-cover"
          loading="lazy"
        />
      </div>
      <h4 className="w-full text-md lg:text-lg font-medium truncate text-center">{title}</h4>
    </div>
  );
};

export default ProjectSummaryCard;
