import { Link, useParams } from 'react-router-dom';
import { projects } from '../../constants/index.jsx';
import Navigation from "./Navigation.jsx";
import {Footer} from "./index.js";
import AnimatedButton from "../AnimatedButton.jsx";
import {styles} from "../../styles.js";


const ProjectsDetailed = () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) return <div>Projekt nicht gefunden.</div>;

    return (
        <>
            <div className="flex-1">
                <Navigation color={project.navcolor} alignment={project.alignment} />

                <img src={project.background} alt={project.alt} className="h-[80vh] w-full object-cover object-center"/>

                <div className="max-w-[2000px] mx-auto lg:px-48 p-6 pt-12">
                    <h2 className="mb-3 text-light">{project.title}</h2>
                    <div className="mb-18 mono text-light">{project.tags}</div>

                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                            {project.year && (
                                <>
                                    <h4>&gt; JAHR</h4>
                                    <p>{project.year}</p>
                                </>
                            )}

                            {project.tools && (
                                <>
                                    <h4>&gt; TECHNOLOGIEN</h4>
                                    {project.tools.map((tool, i) => (
                                        <div key={i}>
                                            <p>{tool.tool}</p>
                                        </div>
                                    ))}
                                </>
                            )}

                            {project.links && (
                                <>
                                    <h4>&gt; REFERENZEN</h4>
                                    {project.links.map((link, i) => (
                                        <div key={i}>
                                            <Link
                                                to={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline underline-offset-4 hover:text-accent"
                                            >
                                                {link.label}
                                            </Link>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                        <div>
                            {project.problem && (
                                <>
                                    <h4>&gt; PROBLEMSTELLUNG</h4>
                                    <p>{project.problem}</p>
                                </>
                            )}

                            {project.solution && (
                                <>
                                        <h4>&gt; UMSETZUNG</h4>
                                    <p>{project.solution}</p>
                                </>
                            )}

                            {project.about && (
                                <>
                                    <h4>&gt; PROJEKTBESCHREIBUNG</h4>
                                    <p>{project.about}</p>
                                </>
                            )}
                        </div>
                    </div>

                    <hr className="text-gray border-[1px] my-24" />

                    {/*Casestudy*/}
                    {project.casestudy}

                    <div className={`${styles.padding} w-full flex justify-center`}>
                        <AnimatedButton primary rounded onClick={() => (window.location.href = "#/#projects")}> Zurück zur Projektübersicht </AnimatedButton>
                    </div>
                </div>
                <Footer/>

            </div>
        </>
    );
};

export default ProjectsDetailed;
