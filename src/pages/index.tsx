import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <>
      <div>
        <p>한국의 아이돌</p>
        <Link href="/celebrity/ive" legacyBehavior>
          <a>Move to '/celebrity/ive'</a>
        </Link>

        <p>한국의 아이돌2</p>
        <Link href="/celebrity/idol/[name]" as="/celebrity/idol/newjeans" legacyBehavior>
          <a>Move to '/celebrity/idol/newjeans'</a>
        </Link>

        <p>한국의 아이돌3</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="찾고 싶은 아이돌 그룹명"
          style={{ marginRight: "12px" }}
        />
        <button
          type="button"
          onClick={() => router.push(`/celebrity/idol/${name}`)}
        >
          {name}(으)로 가기
        </button>
      </div>
    </>
  );
}
