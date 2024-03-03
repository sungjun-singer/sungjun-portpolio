import Image from "next/image";

export default function ProjectItem({data}){

    const title = data.properties.이름.title[0].text.content
    const github = data.properties.Github.url;
    const youtube = data.properties.YouTube.rich_text[0]? data.properties.YouTube.rich_text[0].text.content : "";
    const description = data.properties.Description.rich_text[0].text.content;
    const imgSrc = data.cover.file.url;
    const tags = data.properties.태그.multi_select;
    const startDateString = data.properties.WorkPeriod.date.start
    const endDateString = data.properties.WorkPeriod.date.end

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split("-");
        const endDateStringArray = end.split("-");

        let startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        let endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);


        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);
        return result;
    }

    return (
        <div className="project-card">
            <div className="w-full h-64 overflow-hidden rounded-t-xl relative">
                <Image 
                    className="rounded-t-xl object-cover"
                    src={imgSrc}
                    alt="cover image"
                    layout="fill"
                    objectFit="cover" 
                    quality={100}
                />
            </div>

            <div className="p-4 flex flex-col  ">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={github}>깃허브 바로가기</a>
                {youtube ? (
                    <a href={youtube}>유튜브 시연영상 바로가기</a>
                ) : (
                    <a a href="#" className="pointer-events-none opacity-50 cursor-not-allowed line-through">유튜브 시연영상 바로가기</a>
                )}
                
                <p className="my-1 dark:text-slate-300">
                    작업기간 {`${startDateString} ~ ${endDateString} (${calculatedPeriod(startDateString, endDateString)}일)`}
                </p>

                <div className="flex items-start mt-2">
                    {tags.map((tag) => (
                        <h1 
                            key={tag}
                            className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
                        >
                            {tag.name}
                        </h1>    
                    ))}

                </div>
            </div>
            
        </div>
    )
}