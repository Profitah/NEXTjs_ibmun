/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const imgBox = css`
  width: 400px;
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const img = css`
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <>
      <div css={imgBox}>
        <Image src="/img/idol.png" alt="우주최강아이돌" width={400} height={200} css={img} />
      </div>
      <div>
        <p>한국의 아이돌</p>
        <Link href="/celebrity/ive" legacyBehavior> {/* 현재 Next 버전에서 a태그에 Link를 사용하기 위해서 legacyBehavior가 반드시 필요.*/}
          <a>Move to '/celebrity/ive'</a>
        </Link>

        <p>한국의 아이돌2</p>
        <Link href="/celebrity/idol/[name]" as={`/celebrity/idol/newjeans`} legacyBehavior>
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

