import Animation from "./animation";
import Link from "next/link";

export default function Hero(){
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 김성준입니다.
                <br className="hidden lg:inline-block"/>오늘도 빡코딩!
                </h1>
                <p className="mb-8 leading-relaxed">포트폴리오 완성! 디자인 수정과 내용 수정해줘야한다 이제~</p>
                <div className="flex justify-center">
                <Link href="/projects">
                    <span 
                        className="btn-projects">
                            프로젝트 보러가기
                    </span>
                </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    )
}