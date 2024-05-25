"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./page.module.sass";
import MDEditor from "@uiw/react-md-editor";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Footer from "@/components/Footer/Footer";

const source = `
`;

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={s.container}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MDEditor.Markdown className={s.markdown} source={source} />
      <Footer />
    </div>
  );
}

export default Page;
