interface IProjectSummaryCard {
  projectId: number;
  title: string;
  setOverlayId: (overlayId: number | null) => void;
}

const ProjectSummaryCard = ({ projectId, title, setOverlayId }: IProjectSummaryCard) => {
  return (
    <>
      <div
        className="flex flex-col min-w-64 w-72 h-52 cursor-pointer"
        onClick={() => setOverlayId(projectId)}
      >
        <div className="w-full h-full rounded-xl overflow-hidden mb-3 border-2 shadow-lg">
          <img
            src={`/images/${projectId}/0.png`}
            alt="프로젝트 대표 이미지"
            className="h-full object-cover"
            loading="lazy"
          />
        </div>
        <h4 className="w-full text-md lg:text-lg font-semibold truncate text-center">
          {title}
        </h4>
      </div>
    </>
  );
};

export default ProjectSummaryCard;
