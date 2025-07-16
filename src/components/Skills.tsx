import React, {JSX} from "react";
import SectionHeader from "@/components/SectionHeader";
import {
    FaPython, FaAws, FaBitbucket, FaGithub, FaCircle,
    FaHandSpock, FaApple
} from "react-icons/fa";
import {
    SiGo, SiTypescript, SiTerraform, SiMqtt,
    SiApachekafka, SiRedis, SiJunit5,
    SiIntellijidea, SiPostman
} from "react-icons/si";
import {TbSql, TbBrandMysql} from "react-icons/tb";
import {BiLogoPostgresql} from "react-icons/bi";
import {RiJavaLine} from "react-icons/ri";
import {VscTerminalLinux} from "react-icons/vsc";
import VertxIcon from "@/icons/vertx-icon.svg";

const iconSize = 18;
const iconColor = "lightgray";
const prefix = "➜ ~ cat skills/";

type SkillItem = { name: string; icon: JSX.Element };
type Section = { title: string; items: SkillItem[] };

const sections: Section[] = [
    {
        title: "languages.txt",
        items: [
            {name: "Java", icon: <RiJavaLine/>},
            {name: "Python", icon: <FaPython/>},
            {name: "Go", icon: <SiGo/>},
            {name: "Typescript", icon: <SiTypescript/>},
            {name: "SQL", icon: <TbSql/>}
        ]
    },
    {
        title: "cloud-infrastructure.txt",
        items: [
            {name: "AWS", icon: <FaAws/>},
            {name: "Terraform", icon: <SiTerraform/>}
        ]
    },
    {
        title: "messaging-systems.txt",
        items: [
            {name: "MQTT", icon: <SiMqtt/>},
            {name: "Kafka", icon: <SiApachekafka/>},
            {name: "gRPC", icon: <FaCircle/>}
        ]
    },
    {
        title: "frameworks.txt",
        items: [
            {name: "Vert.x (Java)", icon: <VertxIcon style={{width: iconSize, height: iconSize}}/>},
            {name: "Spock (Test)", icon: <FaHandSpock/>},
            {name: "JUnit (Test)", icon: <SiJunit5/>}
        ]
    },
    {
        title: "databases.txt",
        items: [
            {name: "PostgreSQL", icon: <BiLogoPostgresql/>},
            {name: "MySQL", icon: <TbBrandMysql/>},
            {name: "Redis", icon: <SiRedis/>}
        ]
    },
    {
        title: "os.txt",
        items: [
            {name: "macOS", icon: <FaApple/>},
            {name: "Linux", icon: <VscTerminalLinux/>}
        ]
    },
    {
        title: "tools.txt",
        items: [
            {name: "GitHub", icon: <FaGithub/>},
            {name: "BitBucket", icon: <FaBitbucket/>},
            {name: "IntelliJ", icon: <SiIntellijidea/>},
            {name: "Postman", icon: <SiPostman/>}
        ]
    }
];

const SkillSection: React.FC<Section> = ({title, items}) => (
    <div className="skill-section">
        <p className="skill-section-title">{prefix + title}</p>
        <div className="skill-grid">
            {items.map(({name, icon}) => (
                <div key={name} className="skill-item">
                    {React.cloneElement(icon, {color: iconColor, size: iconSize})}
                    <span className="skill-name">{name}</span>
                </div>
            ))}
        </div>
    </div>
);

export default function Skills() {
    return (
        <div className="terminal-box" id="skills">
            <SectionHeader>Skills</SectionHeader>
            {sections.map((section) => (
                <SkillSection key={section.title} {...section} />
            ))}
        </div>
    );
}
