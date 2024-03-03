import Animation from "./animation";
import Link from "next/link";

export default function Hero(){
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">김성준, 프론트엔드 개발자
                <br className="hidden lg:inline-block"/> "함께 성장"하는 개발자 입니다.
                </h1>
                <p className="mb-8 leading-relaxed">
                    유튜브 볼때보다 코딩할때 잠이 더 안오는 개발자 김성준입니다. <br />
                    저의 가치관은 <b>“함께 성장”</b> 입니다. <br />
                    카카오엔터프라이즈에서 주관한 프로젝트를 <b>10명</b>의 팀원들과 함께 <b>9.am to 9.pm</b> 동안 수행하며 과정을 공유하며
                    팀원들과 <b>“함께 성장”</b> 해나가며 <b>A+</b>를 받았고, 이 경험을 바탕으로 SK C&C UI/UX 과정에서 디자인학과 학생들과 
                    협업하여 <b>2등</b>을 한 경험이 있습니다.</p>
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