import Link from "next/link";

const Ive = () => {
  return (
    <>
      <div>
        <p>아이브</p>
        <Link href="/" legacyBehavior>
          <a>Move to '/'</a>
        </Link>
      </div>
    </>
  );
}

export default Ive;