import Layout from "@/components/layout";
import ProjectItem from "@/components/projects/project-item";
import { DATABASE_ID, TOKEN } from "@/config";

export default function Projects({projects}){

    console.log(projects);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10">

            
                <h1 className="text-4xl font-bold sm:text-6xl">
                    총 프로젝트 : 
                    <b className="pl-4 text-blue-500">{projects.results.length}</b>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 sm:w-full">
                    {projects.results.map((project) => (
                        <ProjectItem key={project.id} data={project} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps(){
    
    const options = {
        method : "POST",
        headers : {
            Accept : "application/json",
            'Notion-Version' : "2022-06-28",
            'Content-Type' : "application/json",
            Authorization : `Bearer ${TOKEN}`
        },
        body : JSON.stringify({
            sorts : [
                {
                    "property" : "이름",
                    "direction" : "ascending"
                }
            ],
            page_size : 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json();

    // console.log(JSON.stringify(projects));

    // const projectNames = projects.results.map((project) => (
    //     project.properties.이름.title[0].text.content
    // ))

    // console.log(projectNames);
    
    return {
        props : {projects},
    }
}