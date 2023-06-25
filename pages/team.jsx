import Layout from '@/components/layout';
import Wave from '@/components/wave';
import Wave180 from '@/components/wave180';
import Link from 'next/link';
import Image from 'next/image';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import fs from 'fs';
import path from 'path';

export default function Team({ teamjson }) {
  return (
    <Layout>
      <div className="text-center hero">
        <div className="container mx-auto ">
          <div className="flex gap-8 items-center flex-col ">
            <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-3xl text-xl font-bold text-center">
              Our Leadership Team
            </h1>
          </div>
        </div>
        <Wave></Wave>
      </div>
      {teamjson.map((group, index) => (
        <GroupSection key={group.groupName} group={group} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'ourteam.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const teamjson = JSON.parse(fileContent);
  return { props: { teamjson } };
}

function GroupSection({ group }) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="text-3xl mb-4">{group.groupName}</h2>
        <p className="font-light sm:text-xl">{group.description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {group.members.map((memberinfo, index) => (
          <MemberCard key={index} json={memberinfo} />
        ))}
      </div>
    </div>
  );
}

function MemberCard({ json }) {
  return (
    <div className="text-center rounded bg-grey py-4 px-8 w-full sm:w-fit">
      <Image
        className="mx-auto mb-4 w-36 h-36 rounded-full"
        width="500"
        height="500"
        src={`images/team/${json.image}`}
        alt="temp"
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight">
        {json.name}
      </h3>
      <p>{json.title}</p>
      <ul className="flex justify-center mt-4 space-x-4">
        <li>
          <Link href={json.linkedin} className="hover:text-gray">
            <IoLogoLinkedin className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link href={json.github} className="hover:text-gray">
            <IoLogoGithub className="w-6 h-6" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
