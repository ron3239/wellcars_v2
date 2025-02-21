import { MetaDataContext } from "@/components/Providers/ProviderStore";
import { Button_Icon } from "@/components/UX";
import { _metaDate } from "@/types/metaDate";
import React from "react";
import { FC, useContext } from "react";
import { IoHome, IoChevronUpCircle, IoPersonAdd, IoWalletSharp } from "react-icons/io5";
import style from "./style.module.scss";

const iconList = [IoHome, IoChevronUpCircle, IoPersonAdd, IoWalletSharp];

export const Footer = () => {
  const storageContext = useContext(MetaDataContext);
  if (!storageContext) return null;
  const { _metaDate, setMetaDate } = storageContext;

  return (
    <footer className={style.footer}>
      {iconList.map((Icon, index) => (
        <Button_Icon key={index} _metaDate={_metaDate} idComponent={index.toString()} setMetaDate={setMetaDate}>
          <Icon size={50} color="white" className={style.Icon} />
        </Button_Icon>
      ))}
    </footer>
  );
};
