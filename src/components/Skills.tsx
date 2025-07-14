import SectionHeader from "@/components/SectionHeader";
import {
    FaPython,
    FaAws,
    FaBitbucket,
    FaGithub,
    FaCircle,
    FaHandSpock, FaApple
} from 'react-icons/fa';
import {
    SiGo,
    SiTypescript,
    SiTerraform,
    SiMqtt,
    SiApachekafka,
    SiRedis,
    SiJunit5,
    SiIntellijidea,
    SiPostman
} from 'react-icons/si';
import {
    TbSql,
    TbBrandMysql
} from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';
import { RiJavaLine } from 'react-icons/ri';
import {VscTerminalLinux} from "react-icons/vsc";

const iconSize = 18;
const iconColor = 'lightgray'

const languages = [
    {name: "Java", icon: <RiJavaLine color={iconColor} size={iconSize}/>},
    {name: "Python", icon: <FaPython color={iconColor} size={iconSize}/>},
    {name: "Go", icon: <SiGo color={iconColor} size={iconSize}/>},
    {name: "Typescript", icon: <SiTypescript color={iconColor} size={iconSize}/>},
    {name: "SQL", icon: <TbSql color={iconColor} size={iconSize}/>}
];
const databases = [
    {name: "PostgreSQL", icon: <BiLogoPostgresql color={iconColor} size={iconSize}/>},
    {name: "MySQL", icon: <TbBrandMysql color={iconColor} size={iconSize}/>},
    {name: "Redis", icon: <SiRedis color={iconColor} size={iconSize}/>}
];
const cloudInfrastructure = [
    {name: "AWS", icon: <FaAws color={iconColor} size={iconSize}/>},
    {name: "Terraform", icon: <SiTerraform color={iconColor} size={iconSize}/>}
];
const messaging = [
    {name: "MQTT", icon: <SiMqtt color={iconColor} size={iconSize}/>},
    {name: "Kafka", icon: <SiApachekafka color={iconColor} size={iconSize}/>},
    {name: "gRPC", icon: <FaCircle color={iconColor} size={iconSize}/>}
];
const frameworks = [
    {name: "Vert.x (Java)", icon: <FaCircle color={iconColor} size={iconSize}/>},
    {name: "Spock (Test)", icon: <FaHandSpock color={iconColor} size={iconSize}/>},
    {name: "JUnit (Test)", icon: <SiJunit5 color={iconColor} size={iconSize}/>}
];
const tools = [
    {name: "GitHub", icon: <FaGithub color={iconColor} size={iconSize}/>},
    {name: "BitBucket", icon: <FaBitbucket color={iconColor} size={iconSize}/>},
    {name: "IntelliJ", icon: <SiIntellijidea color={iconColor} size={iconSize}/>},
    {name: "Postman", icon: <SiPostman color={iconColor} size={iconSize}/>}
];
const os = [
    {name: "macOS", icon: <FaApple color={iconColor} size={iconSize}/>},
    {name: "Linux", icon: <VscTerminalLinux color={iconColor} size={iconSize}/>}
];
const prefix = "➜ ~ cat skills/"

export default function Skills() {
    return (
        <div className="terminal-box" id="skills">
            <SectionHeader>Skills</SectionHeader>
            <div className="mb-4">
                <p>{prefix + 'languages.txt'}</p>
                <div className="flex flex-wrap gap-4">
                    {languages.map(({name, icon}) => (
                        <div key={name} className="flex flex-col items-center text-center w-24">
                            {icon}
                            <span className="text-sm mt-1">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <p>{prefix + 'cloud-infrastructure.txt'}</p>
                <div className="flex flex-wrap gap-4">
                    {cloudInfrastructure.map(({name, icon}) => (
                        <div key={name} className="flex flex-col items-center text-center w-24">
                            {icon}
                            <span className="text-sm mt-1">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <p>{prefix + 'messaging-systems.txt'}</p>
                <div className="flex flex-wrap gap-4">
                    {messaging.map(({name, icon}) => (
                        <div key={name} className="flex flex-col items-center text-center w-24">
                            {icon}
                            <span className="text-sm mt-1">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <p>{prefix + 'frameworks.txt'}</p>
                <div className="flex flex-wrap gap-4">
                    {frameworks.map(({name, icon}) => (
                        <div key={name} className="flex flex-col items-center text-center w-24">
                            {icon}
                            <span className="text-sm mt-1">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <p>{prefix + 'databases.txt'}</p>
                <div className="flex flex-wrap gap-4">
                    {databases.map(({name, icon}) => (
                        <div key={name} className="flex flex-col items-center text-center w-24">
                            {icon}
                            <span className="text-sm mt-1">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <p>{prefix + 'os.txt'}</p>
                <div className="flex flex-wrap gap-4">
                    {os.map(({name, icon}) => (
                        <div key={name} className="flex flex-col items-center text-center w-24">
                            {icon}
                            <span className="text-sm mt-1">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <p>{prefix + 'tools.txt'}</p>
                <div className="flex flex-wrap gap-4">
                    {tools.map(({name, icon}) => (
                        <div key={name} className="flex flex-col items-center text-center w-24">
                            {icon}
                            <span className="text-sm mt-1">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}