import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/icon";
import fs from "fs";
import path from "path";
import { useRouter } from "next/router";

export default function Team({ teamjson }) {
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <Layout>
      <Hero title="Our Leadership Team" />
      {teamjson.map((group, index) => (
        <GroupSection key={group.groupName} basePath={basePath} group={group} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "config", "ourteam.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const teamjson = JSON.parse(fileContent);
  return { props: { teamjson } };
}

function GroupSection({ group, basePath }) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="text-3xl mb-4">{group.groupName}</h2>
        <p className="font-light sm:text-xl">{group.description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {group.members.map((memberinfo, index) => (
          <MemberCard key={index} basePath={basePath} json={memberinfo} />
        ))}
      </div>
    </div>
  );
}

function MemberCard({ json, basePath }) {
  return (
    <div className="text-center rounded bg-grey py-4 px-8 w-full sm:w-60">
      <Image
        className="mx-auto mb-4 w-44 h-44 rounded-full"
        width="500"
        height="500"
        src={
          basePath
            ? `${basePath}/images/team/${json.image}`
            : `/images/team/${json.image}`
        }
        alt={json.image.split(".")[0].split("_").join(" ")}
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight">{json.name}</h3>
      <p>{json.title}</p>
      <ul className="flex justify-center mt-4 space-x-4">
        {json.linkedin ? (
          <li>
            <Link href={json.linkedin} className="hover:text-gray">
              <Icon name="linkedin" className="text-3xl" />
            </Link>
          </li>
        ) : null}
        {json.github ? (
          <li>
            <Link href={json.github} className="hover:text-gray">
              <Icon name="github" className="text-3xl" />
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
