import Animation from "./animation";
import Link from "next/link";

export default function Hero(){
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 김성준입니다.
                <br className="hidden lg:inline-block"/>오늘도 빡코딩!
                </h1>
                <p className="mb-8 leading-relaxed">대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다. 탄핵결정은 공직으로부터 파면함에 그친다. 그러나, 이에 의하여 민사상이나 형사상의 책임이 면제되지는 아니한다.</p>
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