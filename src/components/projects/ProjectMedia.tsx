import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { PiInfoLight } from "react-icons/pi";
import useCheckIsMobile from "../../hooks/useCheckIsMobile";

interface IProjectImage {
  project: IProjectInfo;
  isIntersecting: boolean;
}

const ProjectMedia = ({ project, isIntersecting }: IProjectImage) => {
  const mediaViewerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement>(null);

  const [mediaIdx, setImgIdx] = useState(project.hasVideo ? 0 : 1);
  const { isMobile } = useCheckIsMobile();

  const isVideo = project.hasVideo && mediaIdx === 0;

  const hasPrevMedia = mediaIdx > (project.hasVideo ? 0 : 1);
  const hasNextMedia = mediaIdx < project.imgLength;

  const viewPrevImg = useCallback(
    (e?: React.MouseEvent<HTMLOrSVGElement>) => {
      e?.stopPropagation();
      if (hasPrevMedia) {
        setImgIdx((prev) => prev - 1);
      }
    },
    [hasPrevMedia],
  );
  const viewNextImg = useCallback(
    (e?: React.MouseEvent<HTMLOrSVGElement>) => {
      e?.stopPropagation();
      if (hasNextMedia) {
        setImgIdx((prev) => prev + 1);
      }
    },
    [hasNextMedia],
  );

  const showMediaFullScreen = () => {
    if (!document.fullscreenElement) {
      mediaViewerRef.current?.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const media = mediaRef.current as HTMLVideoElement;
    if (isIntersecting && media?.tagName === "VIDEO") {
      media.currentTime = 0;
    }
  }, [isIntersecting]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!document.fullscreenElement) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        viewPrevImg();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        viewNextImg();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [viewPrevImg, viewNextImg]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center max-h-80 md:h-64 rounded-xl border-2 shadow-xl overflow-hidden">
        <div
          ref={mediaViewerRef}
          onClick={showMediaFullScreen}
          className="group relative h-full cursor-pointer flex justify-center items-center"
        >
          {isVideo ? (
            <video
              ref={mediaRef as RefObject<HTMLVideoElement>}
              src={`/images/${project.id}/${mediaIdx}.mp4`}
              className="h-full w-full object-cover fullscreen:object-contain group-[:fullscreen]:object-contain"
              autoPlay
              muted
            />
          ) : (
            <img
              ref={mediaRef as RefObject<HTMLImageElement>}
              src={`/images/${project.id}/${mediaIdx}.png`}
              className="h-full w-full object-cover fullscreen:object-contain group-[:fullscreen]:object-contain"
              alt="프로젝트 이미지"
            />
          )}
          {hasPrevMedia && (
            <div
              onClick={viewPrevImg}
              className="absolute top-1/2 -translate-y-1/2 left-6 rounded-full bg-black/80 hover:bg-black/60 p-2 hidden group-[:fullscreen]:block"
            >
              <MdArrowBackIosNew size={isMobile ? 24 : 52} className="text-white" />
            </div>
          )}
          {hasNextMedia && (
            <div
              onClick={viewNextImg}
              className="absolute top-1/2 -translate-y-1/2 right-6 rounded-full bg-black/80 hover:bg-black/60 p-2 hidden group-[:fullscreen]:block"
            >
              <MdArrowForwardIos size={isMobile ? 24 : 52} className="text-white" />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 relative">
        {hasPrevMedia && (
          <MdArrowBackIosNew
            size={13}
            className="absolute -left-6 cursor-pointer"
            onClick={viewPrevImg}
          />
        )}
        <p>
          <span>{project.hasVideo ? mediaIdx + 1 : mediaIdx}</span> /{" "}
          <span>{project.imgLength}</span>
        </p>
        {hasNextMedia && (
          <MdArrowForwardIos
            size={13}
            className="absolute -right-6 cursor-pointer"
            onClick={viewNextImg}
          />
        )}
      </div>
      <p className="text-sm text-gray-400 mt-2 flex items-center">
        <PiInfoLight className="inline mr-1" size={18} />
        이미지를 클릭하여 전체화면으로 볼 수 있습니다!
      </p>
    </div>
  );
};

export default ProjectMedia;
