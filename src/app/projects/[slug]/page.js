import { ProjectDetail } from "@/components/projects-detail";
import { projectsData } from "@/system";

export default function ProjectsDetailPage() {
    return (
        <>
            <ProjectDetail data={projectsData[1]} />
        </>
    )
}