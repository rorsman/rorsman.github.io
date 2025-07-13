import SectionHeader from "@/components/SectionHeader";

const languages = ["Java", "Python", "Go", "Typescript", "SQL"];
const databases = ["PostgreSQL", "MySQL", "Redis"];
const cloudInfrastructure = ["AWS", "Terraform"]
const messaging = ["MQTT", "Kafka", "gRPC"]
const frameworks = ["Vert.x (Java)", "Spock (Test)", "JUnit (Test)"];
const tools = ["GitHub", "BitBucket", "IntelliJ", "Postman"]
const os = [ "macOS", "Linux"]
const prefix = "➜ ~ cat skills/"

export default function Skills() {
    return (
        <div className="terminal-box" id="skills">
            <SectionHeader>Skills</SectionHeader>
            <div className="mb-4">
                <p>{prefix + 'backend.txt'}</p>
                {languages.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
            <div className="mb-4">
                <p>{prefix + 'cloud-infrastructure.txt'}</p>
                {cloudInfrastructure.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
            <div className="mb-4">
                <p>{prefix + 'messaging-systems.txt'}</p>
                {messaging.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
            <div className="mb-4">
                <p>{prefix + 'frameworks.txt'}</p>
                {frameworks.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
            <div className="mb-4">
                <p>{prefix + 'databases.txt'}</p>
                {databases.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
            <div className="mb-4">
                <p>{prefix + 'os.txt'}</p>
                {os.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
            <div className="mb-4">
                <p>{prefix + 'tools.txt'}</p>
                {tools.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
        </div>
    );
}