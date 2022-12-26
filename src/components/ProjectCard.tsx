import { useSelector, useDispatch } from 'react-redux'
import { State } from '../redux/store'
import { getSingleImageToDisplay } from './../redux/actions'

type LinksType = {
  github: string
  deploy_link: string
}

type ProjectDetailsType = {
  title: string
  projectImg: string
  aboutText: string
  screenShots: string[]
  techStacks: string[]
  links: LinksType
  updateIsOpen: () => void
}

const ProjectCard = ({
  title,
  projectImg,
  aboutText,
  screenShots,
  techStacks,
  links,
  updateIsOpen,
}: ProjectDetailsType) => {
  const dispatch = useDispatch()
  const { image } = useSelector((s: State) => s.displayModel)
  return (
    <div className="w-[94%] sm:w-[78%] lg:w-[93%] h-[680px] shadow-lg bg-[#141e2f] pb-10 m-[auto]">
      <div className="w-full overflow-hidden">
        <img
          className="w-full h-[290px] hover:scale-[1.1] transition duration-4000 ease-in-out cursor-pointer object-cover"
          src={projectImg}
          alt={title}
        />

        {/* ScreenShots */}
        <div className="w-[99%] m-[auto] h-[95px] flex gap-2 my-2 mb-5 overflow-x-scroll overflow-y-hidden scollbar_small">
          {screenShots.map((ele, i) => (
            <img
              onClick={() => {
                dispatch(getSingleImageToDisplay(ele))
                updateIsOpen()
              }}
              key={ele}
              className="w-full h-full object-cover shadow-md cursor-pointer hover:scale-[1.09] transition duration-2000 ease-in-out select-none"
              src={ele}
              alt={'screenShots'}
            />
          ))}
        </div>

        {/* Description */}
        <div className="w-full h-[110px] px-2 ">
          <p className="text-[20px] font-[800] underline text-red-600 mt-[10px] font-poppins">
            {title}
          </p>
          <p className="text-[12px] md:text-[14px] text-white font-serif w-full h-[65px] scollbar_y_small overflow-y-auto ">
            {aboutText}
          </p>
        </div>

        {/* Tech Stacks */}
        <div className="w-[95%] m-[auto] flex justify-center gap-[7px] text-gray-200 text-[14px] mb-4 flex-wrap">
          {techStacks.map((ele, i) => (
            <p>{ele}</p>
          ))}
        </div>

        {/* Buttons */}
        <div className="w-full flex justify-center text-gray-400 gap-2 px-3">
          <a
            href={links.deploy_link}
            target="_blank"
            className="border border-gray-500 p-1.5 px-4 hover:border-gray-200 hover:text-white transition duration-500 ease-in-out"
            rel="noreferrer"
          >
            Open Live
          </a>
          <a
            href={links.github}
            target="_blank"
            className="border border-gray-500 p-1.5 px-4 hover:border-gray-200 hover:text-white transition duration-500 ease-in-out"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
