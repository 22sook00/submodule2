"use client";
import { useState } from "react";

export default function Home() {
  const menuArr = ["홈", "상품리스트", "장바구니", "게시판"];
  const commonMenuArr = ["로그인", "회원가입", "장바구니"];
  const [selectMenu, setSelectMenu] = useState("");
  const [selectCommonMenu, setSelectCommonMenu] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <header className="w-full h-20">
        <nav className="w-full h-full border-b border-solid border-slate-300 flex justify-between px-10 items-center">
          <ul className="flex gap-4">
            {menuArr.map((el, idx) => {
              return (
                <li
                  key={`${el}-${idx}`}
                  className="cursor-pointer transition-all hover:text-[#777e87]"
                  onClick={() => setSelectMenu(el)}
                >
                  {el}
                </li>
              );
            })}
          </ul>
          <ul className="flex gap-4">
            {commonMenuArr.map((el, idx) => {
              return (
                <li
                  key={`${el}-${idx}`}
                  className="cursor-pointer transition-all hover:text-[#777e87]"
                  onClick={() => setSelectCommonMenu(el)}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <div className="flex flex-col gap-10 items-center">
        <h3 className="text-3xl text-pink-400 font-bold mt-10">SUB 2</h3>
        <section>
          <article className="text-2xl text-semibold">{selectMenu}</article>
        </section>
        <section>
          <article className="text-2xl text-semibold">
            {selectCommonMenu}
          </article>
        </section>
      </div>
    </main>
  );
}
